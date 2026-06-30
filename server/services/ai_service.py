import os
import json
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


# 🔥 UPDATED POST GENERATOR
def generate_post(product_name, description, platform, tone):

    prompt = f"""
Create a viral social media post.

Product Name: {product_name}
Description: {description}
Platform: {platform}
Tone: {tone}

Return ONLY valid JSON in this format:
{{
  "hook": "...",
  "caption": "...",
  "hashtags": "..."
}}
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    content = response.choices[0].message.content.strip()

    # ✅ Try parsing JSON safely
    try:
        return json.loads(content)
    except:
        return {
            "hook": "Error generating hook",
            "caption": content,
            "hashtags": ""
        }


# 🔥 UPDATED REEL GENERATOR
def generate_reel(topic: str):

    prompt = f"""
Create an Instagram reel idea about: {topic}

Return ONLY valid JSON in this format:
{{
  "hook": "...",
  "script": "...",
  "caption": "...",
  "hashtags": "..."
}}
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    content = response.choices[0].message.content.strip()

    # ✅ Try parsing JSON safely
    try:
        return json.loads(content)
    except:
        return {
            "hook": "Error generating hook",
            "script": content,
            "caption": "",
            "hashtags": ""
        }