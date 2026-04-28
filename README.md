# 🚀 Hackathon Idea Generator

> **Stuck on what to build? Just type a theme — AI does the rest.**
A clean, fast web app that generates structured hackathon project ideas using **Google Gemini 2.5 Flash**. Built with vanilla HTML/CSS/JS and deployed on Vercel — no frameworks, no bloat.

![Gemini](https://img.shields.io/badge/Powered%20by-Gemini%202.5%20Flash-4285F4?style=for-the-badge&logo=google)
![License](https://img.shields.io/badge/License-MIT-43e89e?style=for-the-badge)
![Free](https://img.shields.io/badge/API-100%25%20Free-ff6b6b?style=for-the-badge)

---

## ✨ Features

- 🎯 **Instant idea generation** — type a theme, get a structured idea in seconds
- 🧠 **Structured output** — Title, Problem, Solution, Tech Stack, Unique Feature
- 💡 **Quick-fill chips** — one-click popular themes to get started fast
- 📋 **Copy to clipboard** — grab your idea in one click
- ⚡ **Generate Again** — not vibing? regenerate instantly
- 🌑 **Dark UI** — easy on the eyes during late-night hackathons
- 📱 **Responsive** — works on mobile too

---

## 🖥️ Demo

Try it live → **[hackathon-idea-gen.vercel.app](https://hackathon-idea-gen.vercel.app)**

**Example input:** `AI + Healthcare`

```
Title:          MediScan AI
Problem:        Rural patients lack access to early disease diagnosis
Solution:       Mobile app that uses AI to analyze symptoms and suggest diagnoses
Tech Stack:     JavaScript, TensorFlow.js, Google Cloud Vision, Firebase
Unique Feature: Works fully offline after first load using on-device ML models
```

---

## 🛠️ Tech Stack

| Layer     | Tech                                  |
|-----------|---------------------------------------|
| Frontend  | HTML, CSS, Vanilla JavaScript         |
| Backend   | Vercel Serverless Functions (Node.js) |
| AI        | Google Gemini 2.5 Flash API           |
| Hosting   | Vercel (free tier)                    |

---

## 📁 Project Structure

```
hackathon-idea-gen/
├── api/
│   └── generate.js     # Serverless function — proxies Gemini API securely
├── public/
│   └── index.html      # Entire frontend (HTML + CSS + JS in one file)
├── vercel.json         # Routing config for Vercel
├── package.json        # Node version config
└── README.md
```

---

## 🚀 Run Locally

**1. Clone the repo**
```bash
git clone https://github.com/jessicasneha5/hackathon-idea-gen.git
cd hackathon-idea-gen
```

**2. Get a free Gemini API key**

→ [aistudio.google.com](https://aistudio.google.com) → Sign in with Google → **Get API Key**

**3. Set up environment**
```bash
echo "GEMINI_API_KEY=your_key_here" > .env
```

**4. Install Vercel CLI and run**
```bash
npm i -g vercel
vercel dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## ☁️ Deploy Your Own

1. Fork this repo
2. Go to [vercel.com](https://vercel.com) → Import the repo
3. Add environment variable: `GEMINI_API_KEY` = your key
4. Deploy ✅

---

## 🔑 Environment Variables

| Variable         | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `GEMINI_API_KEY` | Your Google Gemini API key from [aistudio.google.com](https://aistudio.google.com) |

---

## 🤝 Contributing

Got ideas to make this better? PRs are welcome!

```bash
git checkout -b feature/your-feature
git commit -m "feat: add your feature"
git push origin feature/your-feature
```

---

## 📄 License

MIT © [Jessica Sneha](https://github.com/jessicasneha5)

---

<p align="center">Built with ❤️ and way too much coffee ☕</p>
