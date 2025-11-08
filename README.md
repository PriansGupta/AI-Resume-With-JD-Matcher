# ✨ AI Resume Maker – Tailor Your Resume with AI

Transform any resume into a job-ready, ATS-optimized version using the power of AI. This tool takes your existing resume and a Job Description (JD), analyzes both, and produces a refined, keyword-aligned, role-specific version instantly.

Built for developers, job seekers, and platforms looking to automate resume personalization.

---

## 🚀 Key Features

✅ Upload resume in **LaTeX**
✅ Paste any **Job Description**
✅ Generates a **tailored, ATS-friendly** resume
✅ Ensures **keyword matching** & **skill alignment**
✅ Uses **OpenAI LLMs** for intelligent rewriting
✅ Clean REST API — can be plugged into any frontend
✅ Fast, reliable, developer-friendly backend

---

## 🧠 How It Works

1. User uploads a resume(latex)
2. User enters a job description
3. Backend parses the resume
4. A structured, context-rich prompt is sent to OpenAI
5. AI rewrites the resume to fit the JD
6. User receives a polished version ready to download

This ensures **relevance**, **impact**, and **ATS compatibility** every single time.

---

## 🛠️ Tech Stack

* **Node.js** + **Express.js**
* **Multer** for file uploads
* **OpenAI API**
* **Dotenv** for configuration
* **PDF / LaTeX processing tools**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/ai-resume-maker.git
cd ai-resume-maker
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add environment variables

Create a `.env` file:

```
OPENAI_API_KEY=your_api_key
PORT=5000
```

### 4️⃣ Run the server

```bash
npm start
```

Server starts at:
👉 **[http://localhost:5000](http://localhost:5000)**

---

## 📤 API Usage

### **POST /tailor** – Tailor a resume to a JD

**Form Fields**

* `latexFile` → Resume file
* `jobDescription` → Raw JD text

**Example (Axios):**

```js
const formData = new FormData();
formData.append("latexFile", file);
formData.append("jobDescription", jd);

axios.post("/tailor", formData);
```

**Response:**
✅ Tailored LaTeX or PDF content ready to download.

---

## 🔮 Future Enhancements

✨ Auto PDF → LaTeX conversion
✨ Resume scoring against JD
✨ Missing-keyword analyzer
✨ Multiple template themes
✨ UI dashboard for resume editing
✨ User profile + template library

---
