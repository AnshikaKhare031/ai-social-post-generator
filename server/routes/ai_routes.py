from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from services.ai_service import generate_post, generate_reel
from database import SessionLocal
from models import Post

router = APIRouter()


# ✅ Request Schema (IMPORTANT)
class PostRequest(BaseModel):
    product_name: str
    description: str
    platform: str
    tone: str


# ✅ DB Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# 🚀 Generate Post + Save to DB
@router.post("/generate-post")
async def create_post(data: PostRequest, db: Session = Depends(get_db)):

    # 👉 Call AI service
    ai_response = generate_post(
        data.product_name,
        data.description,
        data.platform,
        data.tone
    )

    # 👉 Extract fields
    hook = ai_response.get("hook", "")
    caption = ai_response.get("caption", "")
    hashtags = ai_response.get("hashtags", "")

    # 👉 Save to DB
    new_post = Post(
        product_name=data.product_name,
        platform=data.platform,
        tone=data.tone,
        hook=hook,
        caption=caption,
        hashtags=hashtags
    )

    db.add(new_post)
    db.commit()
    db.refresh(new_post)

    return ai_response


# 🚀 Get Post History
@router.get("/posts")
def get_posts(db: Session = Depends(get_db)):
    posts = db.query(Post).order_by(Post.id.desc()).all()
    return posts


# 🚀 Reel Generator (keep simple for now)
@router.post("/generate-reel")
async def create_reel(topic: str):
    return generate_reel(topic)