document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;

    // Simulate an API call
    setTimeout(function() {
        document.getElementById('message').innerText = 'If this email address exists, you will receive a password reset link shortly.';
    }, 1000);
});
document.getElementById('forgotPassword').addEventListener('click', function() {
    alert("Forgot Password functionality is not implemented yet.");
});
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 document.getElementById('forgotPassword').addEventListener('click', function() {
    alert("Forgot Password functionality is not implemented yet.");
});