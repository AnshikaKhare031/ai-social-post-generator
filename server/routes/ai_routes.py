from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session

from services.ai_service import generate_post, generate_reel
from database import SessionLocal
from models import Post, User
from auth import get_current_user, get_db

router = APIRouter()


# ✅ Request Schema
class PostRequest(BaseModel):
    product_name: str
    description: str
    platform: str
    tone: str

class ReelRequest(BaseModel):
    topic: str


# 🚀 Generate Post + Save to DB (Protected)
@router.post("/generate-post")
async def create_post(
    data: PostRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    ai_response = generate_post(
        data.product_name,
        data.description,
        data.platform,
        data.tone,
    )

    hook = ai_response.get("hook", "")
    caption = ai_response.get("caption", "")
    hashtags = ai_response.get("hashtags", "")

    new_post = Post(
        product_name=data.product_name,
        platform=data.platform,
        tone=data.tone,
        hook=hook,
        caption=caption,
        hashtags=hashtags,
        user_id=current_user.id,
    )

    db.add(new_post)
    db.commit()
    db.refresh(new_post)

    return ai_response


# 🚀 Get Post History (Protected — only current user's posts)
@router.get("/posts")
def get_posts(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    posts = (
        db.query(Post)
        .filter(Post.user_id == current_user.id)
        .order_by(Post.id.desc())
        .all()
    )
    return posts


# 🚀 Reel Generator (Protected)
@router.post("/generate-reel")
async def create_reel(
    data: ReelRequest,
    current_user: User = Depends(get_current_user),
):
    return generate_reel(data.topic)