const form = document.getElementById('form');
const emailAddress = document.getElementById('email');
const errorText = document.getElementById('error_text');
const errorImg = document.getElementById('error_icon');
let formSubmitted = false; // Variable to track form submission status

// Function to handle form submission
const handleFormSubmit = (e) => {
    e.preventDefault();

    if (emailAddress.value === '') {
        errorText.innerHTML = 'Email Address Required';
        errorImg.classList.add('show-icon');
        emailAddress.focus();
    } else if (emailAddress.value.indexOf('@') < 0) {
        errorText.innerHTML = 'Please Use A Valid Email Address';
        errorImg.classList.add('show-icon');
        emailAddress.focus();
    } else {
        errorImg.classList.remove('show-icon');
        errorText.classList.add('success');
        emailAddress.classList.add('success');

        emailAddress.value = '';
        errorText.innerHTML = 'Successfully Registered';

        // Check if the form has not been submitted before
        if (!formSubmitted) {
            formSubmitted = true;
            setTimeout(() => {
                window.location.reload(); // Refresh the page after a short delay
            }, 500); 
        }
    }
};

// event listener to the form for submission
form.addEventListener('submit', handleFormSubmit);
