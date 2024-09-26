document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('booking-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        // Send the form data to Formspree
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Your request has been sent successfully!'); // Just success message without URL
                form.reset(); // Clear the form fields
            } else {
                alert('There was a problem with your submission. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem with your submission. Please try again.');
        });
    });
});
