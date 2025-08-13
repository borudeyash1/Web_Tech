/*
1.js
Handles registration form submission:
- Shows a nice confirmation message on submit
- Sends data to backend for MongoDB storage (assumes backend API at /api/register)
*/

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Gather form data
        const data = {
            prn: document.getElementById('prn').value.trim(),
            name: document.getElementById('name').value.trim(),
            rollno: document.getElementById('rollno').value.trim(),
            email: document.getElementById('email').value.trim(),
            address: document.getElementById('address').value.trim()
        };

        // Optional: Basic validation
        if (!data.prn || !data.name || !data.rollno || !data.email || !data.address) {
            alert('Please fill all fields.');
            return;
        }

        // Send data to backend API
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Show confirmation message
                showConfirmation('Registration successful! Thank you for registering.');
                form.reset();
            } else {
                const err = await response.text();
                showConfirmation('Registration failed: ' + err, true);
            }
        } catch (error) {
            showConfirmation('Error connecting to server. Please try again later.', true);
        }
    });

    // Helper to show confirmation message
    function showConfirmation(message, isError = false) {
        let msgDiv = document.getElementById('confirmation-message');
        if (!msgDiv) {
            msgDiv = document.createElement('div');
            msgDiv.id = 'confirmation-message';
            msgDiv.style.margin = '20px 0';
            msgDiv.style.padding = '15px';
            msgDiv.style.borderRadius = '8px';
            msgDiv.style.fontSize = '1.1em';
            msgDiv.style.textAlign = 'center';
            document.getElementById('container').appendChild(msgDiv);
        }
        msgDiv.textContent = message;
        msgDiv.style.background = isError ? '#ffdddd' : '#ddffdd';
        msgDiv.style.color = isError ? '#a00' : '#070';
        msgDiv.style.border = isError ? '1px solid #a00' : '1px solid #070';
    }
});