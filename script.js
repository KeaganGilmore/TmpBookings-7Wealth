document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userEmail = document.getElementById('user_email').value;
    const meetingType = document.getElementById('meeting_type').value;
    const bookingDate = document.getElementById('booking_date').value;

    fetch('https://7a4a-41-114-29-118.ngrok-free.app/book_mhtteeting', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_email: userEmail,
            meeting_type: meetingType,
            booking_date: bookingDate
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('responseMessage').textContent = 'Error: ' + data.error;
            document.getElementById('responseMessage').style.color = 'red';
        } else {
            document.getElementById('responseMessage').textContent = 'Success: ' + data.message;
            document.getElementById('responseMessage').style.color = 'green';
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = 'Error: ' + error.message;
        document.getElementById('responseMessage').style.color = 'red';
    });
});
