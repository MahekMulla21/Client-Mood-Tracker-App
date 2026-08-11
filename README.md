# 🎯 Client Mood Tracker – Full-Stack Application

A cross-platform **mood tracking application** built using the MERN stack and React Native. It helps users track emotions, analyze mood trends, and receive smart suggestions based on their mood.

## ✨ Features

* 🔐 JWT-based secure authentication with bcrypt
* 😊 Track 7 different mood categories
* 🤖 Smart mood-based suggestions
* 📊 Weekly & monthly mood analytics using Chart.js
* 📚 Mood history with CRUD operations
* ⚠️ Repeated negative mood pattern alerts
* 🌐 Responsive React.js web application
* 📱 React Native mobile application for Android & iOS
* 💾 MongoDB-based persistent storage
* 🔔 Daily mood reminders and notifications

## 🛠️ Tech Stack

**Frontend:** React.js, React Native, Expo, Chart.js, Axios
**Backend:** Node.js, Express.js, REST APIs
**Database:** MongoDB, Mongoose
**Authentication:** JWT, bcrypt
**Mobile:** React Native, Expo, AsyncStorage

## 🚀 Quick Start

### Backend

```bash
cd backend
npm install
npm run dev
```

### Web

```bash
cd web
npm install
npm start
```

### Mobile

```bash
cd mobile
npm install
npm start
```

## 🔌 Main APIs

```text
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/me

POST   /api/moods
GET    /api/moods
GET    /api/moods/stats
PUT    /api/moods/:id
DELETE /api/moods/:id
```

## 👨‍💻 Team

**Group 6 – Client Mood Tracker Team**

## 📄 License

MIT License
