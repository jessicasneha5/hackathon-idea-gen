# 🚀 Hackathon Idea Generator

AI-powered hackathon idea generator using **Google Gemini 2.0 Flash** (Free API — no credit card).

## ⚡ Deploy in 10 min

### Step 1 — Get Free Gemini API Key
1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Sign in with Google
3. Click **"Get API Key"** → **"Create API key"**
4. Copy it (starts with `AIza...`)

### Step 2 — Push to GitHub
```bash
git init
git add .
git commit -m "init: hackathon idea generator"
gh repo create hackathon-idea-gen --public --push
```

### Step 3 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your `hackathon-idea-gen` repo
3. Add environment variable:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** `AIza...` (your key from Step 1)
4. Click **Deploy** ✅

You'll get a live URL like: `https://hackathon-idea-gen.vercel.app` 🎉

## 📁 Project Structure
```
├── api/
│   └── generate.js     ← Serverless function (calls Gemini API securely)
├── public/
│   └── index.html      ← Full frontend (HTML + CSS + JS)
├── vercel.json         ← Routing config
└── package.json
```

## 🆓 Free Tier Limits
- 15 requests/minute
- 1,500 requests/day
- No credit card required

## 💻 Run Locally
```bash
npm i -g vercel
echo "GEMINI_API_KEY=AIza..." > .env
vercel dev
# Open http://localhost:3000
```
 
