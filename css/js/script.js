// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Find the contact form in the document
    const contactForm = document.getElementById('contactForm');
    
    // If the contact form exists on the page, add a submit event listener
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the form's default submission behavior
            event.preventDefault(); 
            
            // Get the HTML element where we will display messages
            const formMessage = document.getElementById('form-message');

            // Get the values from the form fields and trim any whitespace
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple validation: check if any field is empty
            if (name === '' || email === '' || message === '') {
                // If validation fails, show an error message
                formMessage.textContent = 'Please fill out all fields before submitting.';
                formMessage.style.color = 'red';
            } else {
                // If validation passes, show a success message
                formMessage.textContent = 'Thank you! Your message has been sent.';
                formMessage.style.color = 'green';
                
                // Clear all the form fields
                contactForm.reset();

                // Optional: Hide the success message after a few seconds
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 5000); // 5000 milliseconds = 5 seconds
            }
        });
    }
});