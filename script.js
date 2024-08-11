var sideNavBar=document.querySelector(".side-navbar")
    
function showNav(event){
    sideNavBar.style.display="block"
}
function hideNav(event){
     sideNavBar.style.display="none"
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the input values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send('service_fmt0ies', 'template_rnxpxgv', {
        from_name: name,
        from_phone: phone,
        from_email: email,
        message: message,
    })
    .then(function(response) {
       alert('Your message has been sent successfully!');
    }, function(error) {
       alert('Failed to send your message, please try again later.');
    });
});

