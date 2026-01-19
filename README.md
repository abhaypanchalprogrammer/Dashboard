📊 React Dashboard Application

A modern **frontend dashboard application** built using **React** that demonstrates real-world UI patterns such as API integration, loading states, error handling, retry logic, routing, and reusable components.

This project focuses on **frontend responsibilities only**.

🚀 Features

- ⚛️ Built with **React + Vite**
- 📡 **Real API integration** using `dummyapi`
- ⏳ Loading states with **Skeleton UI**
- ❌ Error handling with **Retry functionality**
- 🔄 Manual retry on API failure
- 📊 Charts widgets
- 📋 Data tables with searching
- 🧭 Fully implemented only **routing for all sidebar pages**
- 🧱 Reusable layout components (Sidebar, Header, Cards)
- 📱 Responsive dashboard layout

🧠 Project Focus

The **Dashboard page** is the **reference implementation**, demonstrating:

- API lifecycle handling (loading, success, error)
- Retry logic
- UI state management
- Reusable frontend patterns

Other sidebar pages are routed and use placeholder content, showing how the application can be **scaled easily** using the same structure.

🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS / Tailwind
- dummyapi (API)
- React Router

📁 Folder Structure

src/
│── api/ # API service layer
│── components/ # Reusable UI components
│── dashboard/ # Dashboard-specific components
│── App.jsx
│── main.jsx

⚙️ API Handling

- API calls are abstracted into a **separate service layer**
- Handles loading, error, and retry states
- Keeps components clean and maintainable

🧪 Error Handling & Retry

If an API request fails:

- A user-friendly error message is displayed
- A **Retry button** allows re-fetching data without refreshing the page

This mimics **real production dashboard behavior**.

▶️ Getting Started

- Clone the repository

bash

- git clone <your-repo-url>

Install dependencies

bash

- npm install

Run the development server

bash

- npm run dev

🎯 Purpose

This project was built to:

- Practice frontend dashboard development
- Demonstrate real-world React patterns
- Showcase API integration and UI state handling
- Serve as a portfolio project for **Frontend Developer roles**

📌 Note

This is a **frontend-only project**.  
Backend services and authentication are intentionally excluded.

👨‍💻 Author

**Abhay Panchal**
