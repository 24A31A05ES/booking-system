# TravelGo (Travel Booking System)

---

## Project Description

TravelGo is a front-end travel booking demo that lets users search travel options (Flights/Trains/Buses), book tickets, and complete a simulated payment flow. It uses in-browser storage to manage users and bookings, so it runs entirely in the browser with a simple local server.

---

## Problem Statement

Build a simple travel booking system interface that allows a user to:

- register/login  
- search travel options  
- enter passenger details  
- pay (simulated)  
- view/cancel bookings  

all while running locally without requiring a backend.

---

## Features of the Project

### Authentication & user management
- Register new users and sign in  
- Session-based access control for protected pages  
- Logout support  

### Search & results
- Search form with city autocomplete suggestions  
- Results page that displays available options  

### Booking system
- Select an option and enter passenger details  
- Validations for:
  - required fields  
  - email  
  - phone number  
  - age  
- Stores bookings per user  

### Payment (simulated)
- Multiple payment methods:
  - Credit Card  
  - Debit Card  
  - UPI  
  - Net Banking  
- Basic validation + success confirmation  

### My Bookings
- View bookings for logged-in user  
- Cancel booking functionality  

### UI/UX
- Responsive navbar  
- Mobile toggle  
- Dark mode toggle  

---

## Technology Used

### Programming languages
- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  

### Tools / runtime
- Browser (Chrome / Edge / Firefox)  
- Local web server:
  - Python http.server  
  - Node.js npx serve  

### Browser storage
- localStorage (users + bookings)  
- sessionStorage (session + booking flow)  

---

## Project Structure
```
fsd/
├─ index.html
├─ login.html
├─ register.html
├─ search.html
├─ results.html
├─ booking.html
├─ payment.html
├─ mybookings.html
├─ css/
│ ├─ style.css
│ └─ home.css
└─ js/
├─ auth.js
├─ autocomplete.js
├─ search.js
├─ home.js
├─ booking.js
└─ payment.js
```


## Installation / Setup

This project is static (no backend). You only need a local server.

### Option A: Python (recommended)

1. Install Python 3  
2. Open PowerShell  

cd "your-project-folder"
python -m http.server 5500


3. Open:
http://localhost:5500/

---

### Option B: Node.js

1. Install Node.js  
2. Run:

cd "your-project-folder"
npx serve .


---

## Usage

1. Open the application  
2. Login or Signup  
3. Search travel options  
4. Click **Book Now**  
5. Enter passenger details  
6. Continue to payment  
7. Complete payment  
8. View in **My Bookings**  

---

## Author

### Names
- P. Kesava Datta  
- P. Jaya Lakshmi   
- M. Naga Venkata Sridhara  
- D. Krishna Mahesh  

---

### Roles
- Kesava Datta → Search & Home  
- Jaya Lakshmi → Booking System  
- Sridhara → Payment & Styling  
- Krishna Mahesh → Authentication  

---

## LinkedIn

- P.Kesava Datta :https://www.linkedin.com/in/kesava-datta-polaki-b1a27832b/
- P.Jaya Lakshmi :https://www.linkedin.com/in/pilli-jaya-lakshmi
- D.Krishna Mahesh :https://www.linkedin.com/in/krishna-mahesh-d
- M.Naga venkata sridhara :https://www.linkedin.com/in/sridhar-mutyala
