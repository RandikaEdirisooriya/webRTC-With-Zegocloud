function handleLogin(event) {
    event.preventDefault();

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists and the password matches
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Save the logged-in user in localStorage
        localStorage.setItem('connectedUser', JSON.stringify(user));

        // Redirect to another page after successful login
        window.location.href = 'index.html';
    } else {
        // Show an alert if the login fails
        alert('Login or password is incorrect');
    }
}

// Attach the handleLogin function to the form's submit event
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", handleLogin);
