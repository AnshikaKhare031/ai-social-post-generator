from database import engine, Base
import models

Base.metadata.create_all(bind=engine)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.ai_routes import router as ai_router
from routes.auth_routes import router as auth_router

app = FastAPI(title="Udaan AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(ai_router)


@app.get("/")
def home():
    return {"message": "Udaan AI backend running"}