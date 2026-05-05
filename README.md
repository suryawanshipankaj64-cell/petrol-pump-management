# Petrol Pump Management System

## Tech Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS (dark theme), Chart.js, React Hook Form
- **Backend**: Node.js/Express, MongoDB (Mongoose), JWT, Socket.io
- **Utils**: pdf-lib, qrcode.react, Razorpay, WhatsApp API links

## Setup
1. MongoDB: Install local or use MongoDB Atlas. Add MONGO_URI to .env
2. Backend: `cd backend && npm install && npm run dev`
3. Frontend: `cd frontend && npm install && npm run dev`
4. Env vars: JWT_SECRET, RAZORPAY_KEY_ID/SECRET (test mode)

## Features Implemented
- Auth (Admin/Employee)
- Dashboard w/charts
- Billing + PDF/QR/WhatsApp/Razorpay
- Fuel stock tracking
- Employee/Customer mgmt
- Reports export
- Realtime notifications

## Run
```
# Terminal 1
cd backend && npm run dev

# Terminal 2  
cd frontend && npm run dev
```
Frontend: http://localhost:3000
Backend API: http://localhost:5000

## Deploy
- Frontend: Vercel (connect repo)
- Backend: Render (add env vars)
- DB: MongoDB Atlas

