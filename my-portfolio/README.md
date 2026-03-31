🚀 Portfolio Website (Vite + Tailwind CSS)

This is a personal portfolio website built using Vite and Tailwind CSS. It is designed to showcase your skills, projects, experience, and contact details with a modern UI and smooth user experience.

📌 Tech Stack
⚡ Vite
🎨 Tailwind CSS
⚛️ React (JSX Components)
📧 EmailJS (for contact form)


📂 Project Setup

1️⃣ Create & Navigate
npm create vite@latest my-project
cd my-project

2️⃣ Install Dependencies
npm install
npm install tailwindcss @tailwindcss/vite

⚙️ Tailwind Setup

Update your vite.config.js:

import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()],
}

Add this in your index.css:

@import "tailwindcss";


▶️ Run the Project
npm run dev
Visit: http://localhost:5173

🧩 Features
🎯 Clean and modern UI
📱 Fully responsive design
🧑‍💻 Projects showcase
📜 Resume download option
📬 Contact form (EmailJS integrated)
✨ Custom cursor & particle background effects
📁 Updated Folder Structure
my-portfolio/
│── dist/
│── node_modules/
│── public/
│   ├── profile.jpg
│   └── resume.pdf
│
│── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── CustomCursor.jsx
│   │   ├── Navbar.jsx
│   │   ├── OverlayMenu.jsx
│   │   └── ParticlesBackground.jsx
│   │
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Feedback.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── tailwind.config.js
│
│── .env
│── .gitignore
│── eslint.config.js
│── index.html
│── package-lock.json
│── package.json
│── README.md
│── vite.config.js
🔐 Environment Variables

Create a .env file and add:

VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key


📬 Contact
📧 Email: ravispatel2908.com
💼 LinkedIn: https://linkedin.com/in/ravibhushansinghh/
💻 GitHub: https://github.com/ravibs298

⭐ Acknowledgements
Vite Documentation
Tailwind CSS Documentation
EmailJS