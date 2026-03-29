# TravelGo (Travel Booking System)

## Project Description
TravelGo is a front-end travel booking demo that lets users search travel options (Flights/Trains/Buses), book tickets, and complete a simulated payment flow. It uses in-browser storage to manage users and bookings, so it runs entirely in the browser with a simple local server.

## Problem Statement
Build a simple travel booking system interface that allows a user to:
- register/login,
- search travel options,
- enter passenger details,
- pay (simulated),
- and view/cancel bookings,
all while running locally without requiring a backend.

## Features of the Project
- **Authentication & user management**
  - Register new users and sign in
  - Session-based access control for protected pages
  - Logout support
- **Search & results**
  - Search form with city autocomplete suggestions
  - Results page that displays available options from demo data
- **Booking system**
  - Select an option and enter passenger details
  - Validations for required fields, email, phone number, and age
  - Stores bookings per user
- **Payment (simulated)**
  - Multiple payment methods (Credit Card, Debit Card, UPI, Net Banking)
  - Basic input validations and success confirmation modal
- **My Bookings**
  - View bookings for the logged-in user
  - Cancel booking functionality
- **UI/UX**
  - Responsive navbar with mobile toggle
  - Dark mode toggle on the search/home page

## Technology Used
- **Programming languages**
  - HTML5
  - CSS3
  - JavaScript (Vanilla JS)
- **Tools / runtime**
  - Browser (Chrome/Edge/Firefox)
  - Local web server (recommended):
    - Python `http.server` (Python 3), or
    - Node.js `npx serve` (optional alternative)
- **Browser storage**
  - `localStorage` (users + bookings)
  - `sessionStorage` (current session + selected booking flow state)

## Project Structure
```text
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
│  ├─ style.css
│  └─ home.css
└─ js/
   ├─ auth.js
   ├─ autocomplete.js
   ├─ search.js
   ├─ home.js
   ├─ booking.js
   └─ payment.js
```

## Installation / Setup
This project is static (no backend). You only need a local server so that navigation and storage work reliably.

### Option A: Python (recommended)
1. Install Python 3 (if not installed).
2. Open PowerShell in the project folder:

```powershell
cd "C:\Users\Polak\OneDrive\Desktop\fsd"
python -m http.server 5500
```

3. Open the app in your browser:
   - `http://localhost:5500/`

### Option B: Node.js (alternative)
1. Install Node.js (if not installed).
2. Run:

```powershell
cd "C:\Users\Polak\OneDrive\Desktop\fsd"
npx serve .
```

3. Open the URL shown in the terminal (usually `http://localhost:3000`).

## Usage
1. Open `http://localhost:5500/` (or your Node serve URL).
2. You will be redirected to `search.html`.
3. Click **Login or Signup**:
   - Create an account (Register) and you’ll be logged in automatically.
4. Search travel:
   - Choose **From**, **To**, and **Departure Date**, then click **SEARCH**.
5. On the results page:
   - Click **Book Now →** on any option.
6. Fill passenger details:
   - Click **Continue to Payment →**.
7. Payment:
   - Select a payment method, enter details, then **Pay Securely** (simulated).
8. View bookings:
   - Open **My Bookings** to see your booking and cancel if needed.

## Sample Output
- **Login/Register**: User account created and session stored.
- **Results page**: A list of cards showing operator/company, depart/arrive time, duration, price, and seats.
- **Booking confirmation**: A success modal displaying a generated **Booking ID** (example format: `TGO########`).
- **My Bookings**: Booking cards showing route, date, passenger, seat preference, payment method, and booking ID.

## Future Improvements
- Add a real backend (API + database) for persistent users/bookings
- Add filtering/sorting (price, duration, departure time) on results
- Add round-trip and multi-city flows (UI already has placeholders)
- Add seat map selection and dynamic seat availability updates
- Add email confirmation integration (after payment)
- Add automated tests (UI + storage logic) and CI workflow on GitHub

## Author
### Names
- **P .Kesava Datta**
- **P.Jaya Lakshmi**
- **M.Naga venkata sridhara**
- **D.Krishna Mahesh**

### Roles
- **member 1**: Authentication & user management
- **member 2**: Search & Home page
- **member 3**: Booking System
- **member 4**: Payment & Styling

### LinkedIn URL
- member 1: _add URL here_
- member 2: _add URL here_
- member 3: _add URL here_
- member 4: _add URL here_

