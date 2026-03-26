# 📚 dk Study Session Planner

A modern and minimal **Study Session Planner** built with React.  
Organize your study sessions, track your progress, and stay focused on your goals 🚀

---

## ✨ Features

- ➕ Add new study sessions  
- 🗂️ Filter sessions by subject (DSA, Web Dev, DBMS, OS, etc.)  
- ⏱️ Track duration in minutes  
- 📊 View total sessions & total duration  
- ✅ Mark sessions as Complete / Incomplete  
- 🗑️ Delete sessions  
- 🎯 Priority levels (Low, Medium, Hard)  
- ⚡ Real-time updates using Context API  
- 🧠 Form validation using React Hook Form  

---

## 🛠️ Tech Stack

- ⚛️ React.js  
- 🎣 React Hook Form  
- 🌐 Context API  
- 🎨 Tailwind CSS  
- 🔥 React Icons  

---

## 🧠 Concepts Used

### 🔹 Context API
- Global state management for sessions  
- Functions:
  - `addSession()`
  - `deleteSession()`

### 🔹 React Hook Form
- Form handling & validation  
- Duration validation (min: 10, max: 120)

### 🔹 Filtering
- Filter sessions by subject using `useState`

### 🔹 Derived Data
- Total Sessions → `sessions.length`  
- Total Duration → using `reduce()`

---

## 💾 LocalStorage Integration

To ensure data persistence, this project uses **localStorage** to store study sessions.

### 🔹 How it works

- When a session is added → it is saved in localStorage  
- When the page reloads → sessions are loaded from localStorage  
- When a session is deleted → it is removed from localStorage  

---
## 🙌 Author

Dishant Kumawat

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share it 🚀