 React + Vite URL Shortener App

This is a minimal and fast **React URL Shortener** application built using **Vite** with **Material UI** and custom **Logging Middleware**.

It allows users to:
- Shorten URLs with optional custom shortcodes and expiry times
- Redirect via client-side routing
- Track click statistics and view analytics
- Handle errors and validations on the client-side

---

## 🔧 Tech Stack

- ⚛️ **React** (with Hooks)
- ⚡ **Vite** (Fast bundler)
- 🎨 **Material UI (MUI)** for UI components
- 🧠 **Client-side Routing** using `react-router-dom`
- 🛠️ **Custom Logger Middleware**
- 💾 **localStorage** for persistence

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/url-shortener-app.git
cd url-shortener-app
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the development server
bash
Copy
Edit
npm run dev
Visit http://localhost:3000 in your browser.

📁 Folder Structure
bash
Copy
Edit
src/
├── components/           # Reusable UI components
├── pages/                # Main pages (Shortener, Stats, Redirect)
├── utils/                # Logger, validators, helper functions
├── App.jsx               # Main app routing
└── main.jsx              # Entry point
🧪 Features
🔗 Shorten up to 5 URLs at once

⏰ Set custom expiry time (default: 30 mins)

📝 Custom shortcodes (if available)

📊 View click analytics with timestamp, referrer, and location

🔁 Redirect short URL to original URL

🧩 Client-side input validation

📋 Copy short URLs to clipboard

🚫 Handle shortcode collisions and expired links

📄 All logs stored via custom middleware (no console.log)

✅ Requirements
Node.js 16+

npm or yarn

🛡️ ESLint & Formatting
The project uses ESLint rules preconfigured for React + Vite.
You can expand this with TypeScript and typescript-eslint as needed:
👉 TypeScript Template

🧠 Inspiration
This app is part of a Campus Hiring Evaluation Task designed to test:

React skills

Client-side routing

UI/UX design using MUI

Logging & validation logic

Analytical/statistical display

📄 License
This project is open-source and licensed under the MIT License.

✨ Author
Made with ❤️ by Your Name  Puja Kumari
