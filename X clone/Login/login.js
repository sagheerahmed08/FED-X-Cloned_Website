document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form inputs
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        // Perform login (this example just alerts the values)
        alert("Username: " + username + "\nPassword: " + password);
        // In a real application, you would send these values to a server for validation
    }
});
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
