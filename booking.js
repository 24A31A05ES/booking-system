// ==================== BOOKING.JS ====================
// Handles booking form, storing bookings, and my bookings page

function getBookings() {
    try { return JSON.parse(localStorage.getItem('tbs_bookings') || '[]'); } catch(e) { return []; }
}
function saveBookings(bookings) {
    localStorage.setItem('tbs_bookings', JSON.stringify(bookings));
}

// ---- Load booking summary on booking.html ----
document.addEventListener('DOMContentLoaded', function() {
    const bookingSummary = document.getElementById('bookingSummary');
    const bookingForm = document.getElementById('bookingForm');

    if (bookingSummary) {
        const data = JSON.parse(sessionStorage.getItem('tbs_selected_flight') || 'null');
        if (!data) {
            bookingSummary.innerHTML = '<div class="alert-box">No travel option selected. <a href="search.html">Go back to search.</a></div>';
            if (bookingForm) bookingForm.style.display = 'none';
            return;
        }
        bookingSummary.innerHTML = `
            <div class="summary-card">
                <div class="summary-row">
                    <span class="summary-icon">${data.type === 'Flight' ? '✈' : data.type === 'Train' ? '🚂' : '🚌'}</span>
                    <div class="summary-info">
                        <h3>${data.company}</h3>
                        <p>${data.type} &bull; ${data.from} → ${data.to}</p>
                        <p class="summary-date">${formatDate(data.date)}</p>
                    </div>
                    <div class="summary-time">
                        <span>${data.depart} → ${data.arrive}</span>
                        <small>${data.duration}</small>
                    </div>
                    <div class="summary-price">₹${Number(data.price).toLocaleString('en-IN')}</div>
                </div>
            </div>
        `;
    }

    // Pre-fill email from user session
    const user = window.auth && window.auth.getCurrentUser();
    const emailInput = document.getElementById('passengerEmail');
    const nameInput = document.getElementById('passengerName');
    if (user) {
        if (emailInput) emailInput.value = user.email;
        if (nameInput) nameInput.value = user.name;
    }

    // Booking form submit
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const data = JSON.parse(sessionStorage.getItem('tbs_selected_flight') || 'null');
            if (!data) { alert('Session expired. Please search again.'); window.location.href = 'search.html'; return; }

            const passenger = document.getElementById('passengerName').value.trim();
            const age = document.getElementById('passengerAge').value.trim();
            const seat = document.getElementById('seatSelection').value;
            const contact = document.getElementById('contactNumber').value.trim();
            const email = document.getElementById('passengerEmail').value.trim();

            if (!passenger || !age || !contact || !email) {
                alert('Please fill in all required fields.');
                return;
            }
            if (!/^\d{10}$/.test(contact.replace(/[\s\-]/g, ''))) {
                alert('Please enter a valid 10-digit contact number.');
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            if (parseInt(age) < 1 || parseInt(age) > 120) {
                alert('Please enter a valid age.');
                return;
            }

            const pendingBooking = {
                ...data,
                passenger,
                age,
                seat: seat || 'No Preference',
                contact,
                email
            };
            sessionStorage.setItem('tbs_pending_booking', JSON.stringify(pendingBooking));
            window.location.href = 'payment.html';
        });
    }
});

// ---- Load user's bookings on mybookings.html ----
function loadUserBookings() {
    const user = window.auth && window.auth.getCurrentUser();
    if (!user) return;

    const bookingsList = document.getElementById('bookingsList');
    const emptyState = document.getElementById('emptyBookings');
    if (!bookingsList) return;

    const all = getBookings();
    const mine = all.filter(b => b.userId === user.id);

    if (mine.length === 0) {
        bookingsList.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    bookingsList.innerHTML = mine.map(b => `
        <div class="booking-card animate-fade-in" id="booking-${b.bookingId}">
            <div class="booking-card-header">
                <span class="booking-icon">${b.type === 'Flight' ? '✈' : b.type === 'Train' ? '🚂' : '🚌'}</span>
                <div class="booking-route">
                    <h3>${b.company}</h3>
                    <p class="route">${b.from} → ${b.to}</p>
                    <p class="booking-date">${formatDate(b.date)}</p>
                </div>
                <div class="booking-meta">
                    <span class="type-badge ${b.type.toLowerCase()}">${b.type}</span>
                    <span class="status-badge confirmed">Confirmed</span>
                </div>
            </div>
            <div class="booking-card-body">
                <div class="detail-row">
                    <span>👤 Passenger</span><span>${b.passenger}</span>
                </div>
                <div class="detail-row">
                    <span>💺 Seat</span><span>${b.seat}</span>
                </div>
                <div class="detail-row">
                    <span>🕐 Time</span><span>${b.depart} → ${b.arrive}</span>
                </div>
                <div class="detail-row">
                    <span>📞 Contact</span><span>${b.contact}</span>
                </div>
                <div class="detail-row">
                    <span>💳 Payment</span><span>${b.paymentMethod || 'Paid'}</span>
                </div>
            </div>
            <div class="booking-card-footer">
                <div class="booking-id-block">
                    <span class="label">Booking ID</span>
                    <span class="bid">${b.bookingId}</span>
                </div>
                <div class="price-cancel">
                    <span class="booking-price">₹${Number(b.price).toLocaleString('en-IN')}</span>
                    <button class="btn btn-danger btn-sm" onclick="cancelBooking('${b.bookingId}')">Cancel</button>
                </div>
            </div>
        </div>
    `).join('');
}

function cancelBooking(bookingId) {
    if (!confirm('Are you sure you want to cancel this booking?')) return;
    const all = getBookings();
    const updated = all.filter(b => b.bookingId !== bookingId);
    saveBookings(updated);

    // Animate out then reload
    const card = document.getElementById('booking-' + bookingId);
    if (card) {
        card.style.transition = 'all 0.3s ease';
        card.style.opacity = '0';
        card.style.transform = 'translateX(40px)';
        setTimeout(() => loadUserBookings(), 350);
    } else {
        loadUserBookings();
    }
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    try {
        const d = new Date(dateStr + 'T00:00:00');
        return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', weekday: 'short' });
    } catch(e) { return dateStr; }
}

// Expose globally
window.loadUserBookings = loadUserBookings;
window.cancelBooking = cancelBooking;
window.getBookings = getBookings;
window.saveBookings = saveBookings;
window.formatDate = formatDate;
