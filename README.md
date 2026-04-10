🚀 Interview AI - Smart Interview Preparation Platform
An AI-powered Interview Preparation platform that analyzes your resume, self-description, and job description to generate:

📊 Match Score
💻 Technical Questions with Answers & Intentions
🧠 Behavioral Questions (STAR Method)
⚠️ Skill Gaps
🗺️ Personalized Preparation Roadmap
📄 AI-generated Resume PDF
🌟 Features
✅ AI-based Interview Report Generation
✅ Resume Parsing (PDF Upload Supported)
✅ Smart Match Score (0–100)
✅ Technical Questions with Deep Answers
✅ Behavioral Questions using STAR Method
✅ Skill Gap Analysis (Low / Medium / High)
✅ Personalized Preparation Plan (Day-wise)
✅ Resume PDF Generator (via Puppeteer)
✅ Authentication (JWT + Cookies)

🧠 Tech Stack
Frontend
React.js
SCSS
Axios
Context API
Backend
Node.js
Express.js
MongoDB (Mongoose)
AI Integration
Google Gemini API (@google/genai)
Zod Schema Validation
Other Tools
Puppeteer (PDF generation)
Multer (File upload)
JWT Authentication

📸 Screenshots
Add screenshots here (optional but recommended)

<img width="463" height="388" alt="Screenshot 2026-04-03 124313" src="https://github.com/user-attachments/assets/06094efb-a2f0-42ef-a1b0-8c5f5d83e9d7" />
<img width="429" height="398" alt="Screenshot 2026-04-03 124612" src="https://github.com/user-attachments/assets/0f0cdb41-572a-4331-bd37-a90185351556" />
<img width="519" height="437" alt="Screenshot 2026-04-03 124631" src="https://github.com/user-attachments/assets/50406484-8654-47d9-946a-ae96850ced4c" />

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/SumitKumarsk001/Interview-Ai-
cd Interview-Ai-

### 2  Setup Backend
cd Backend
npm install

### Create .env file:
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
GOOGLE_GENAI_API_KEY=your_api_key

## Run backend:
npm start

## Run Frontend :
Run backend:
cd Frontend
npm install
npm run dev

## Project Structure : 
Interview-AI/
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
│
├── Frontend/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   └── styles/
