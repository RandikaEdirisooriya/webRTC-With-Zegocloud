function handleRegistration(event) {
    event.preventDefault();

    // Get user input
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const status = "online"; // Assuming the status is online upon registration

    // Basic input validation
    if (!username || !email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Create an object with user information
    const newUser = {
        username: username,
        email: email,
        password: password,
        status: status,
    };

    // Retrieve existing users from localStorage (if any)
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the users array
    users.push(newUser);

    // Save the updated users array back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Save the current user as the "connectedUser" in localStorage
    localStorage.setItem("connectedUser", JSON.stringify(newUser));

    // Redirect to another page (e.g., homepage or dashboard) after registration
    window.location.href = "index.html";
}

// Attach the handleRegistration function to the form's submit event
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", handleRegistration);
