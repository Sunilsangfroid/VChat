# IBY_Task
My name is **Ch Sunil Patra**, and I am a 3rd-year BTech student majoring in **Computer Science and Engineering (CSE)** at **IIT Mandi**.

# Chat Application

## Overview
This is a fully functional web-based chat application built using **Next.js** for the frontend and **Convex** for the backend. The application includes core features like user registration, one-on-one messaging, group chats, and real-time message updates. Optional feature **video/audio calling** functionality have also been added.

## Features
### Core Features:
- **User Registration & Authentication:**
  - Users can sign up and log in to the application using email and password authentication.
  ![Registration Screenshot](https://i.imgur.com/Ho3twbS.png)
  
- **Text Messaging:**
  - Users can send and receive text messages between individuals in real time.
  ![Messaging Screenshot](https://i.imgur.com/gBaMzLk.png)
  
- **Group Chat:**
  - Allows users to create group chats and send messages to multiple participants.
  ![Group Chat Screenshot](https://i.imgur.com/hO9HWHp.png)

- **Real-time Message Updates:**
  - Implemented using WebSockets for real-time updates without the need to refresh.

### Optional Feature:
- **Video/Audio Calling:**
  - Integrated video and audio calling for seamless communication.
  ![Video Call Screenshot](https://i.imgur.com/Y2x052s.png)

## Tech Stack
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Convex 
- **Database:** Convex (NoSQL)
- **Real-time Messaging:** WebSockets (Socket.io)
- **Authentication:** JWT-based authentication
- **Video/Audio Calling:** WebRTC

## System Design
### User Interface:
The UI follows the **Atomic Design** methodology, ensuring that the components are modular and scalable. This helps in building a clean and intuitive interface.

### Backend Architecture:
- The backend is a REST API built using **Node.js** with a clear separation of concerns.
- WebSockets are implemented for real-time messaging.
- MongoDB is used for storing user data and message history due to its flexibility in handling chat-based data structures.

## Setup Instructions

### Prerequisites
- **Node.js** (v14+)
- **MongoDB** (cloud-based or local instance)
- **Next.js** (for running the frontend)

### Install Dependencies

#### 1. Clone the Repository
```bash
git clone https://github.com/Sunilsangfroid/VChat.git
cd chat-app
