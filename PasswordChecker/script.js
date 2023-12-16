const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// An array of password requirements with corresponding 
// regular expressions and index of the requirement list item
const requirements = [
    { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least one number
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
]

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // Check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Updating class and icon of requirement item if requirement matched or not
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

eyeIcon.addEventListener("click", () => {
    // Toggle the password input type between "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // Update the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});

// This JavaScript code is a simple implementation for handling password input and providing visual feedback on whether the entered password meets certain requirements. It uses regular expressions to define the password requirements and updates the UI accordingly. Additionally, there is an eye icon that allows the user to toggle between showing and hiding the password.

// Here's a breakdown of the code:

// Password Requirements:

// 1. Minimum length of 8 characters
// 2. At least one number
// 3. At least one lowercase letter
// 4. At least one special character (not alphanumeric)
// 5. At least one uppercase letter

// Event Listeners:

// The keyup event on the password input triggers a function that checks the entered password against each requirement using regular expressions. It then updates the corresponding visual feedback (icon and class) for each requirement.

// The click event on the eye icon toggles the visibility of the password by changing the input type between "password" and "text." It also updates the eye icon class to reflect the current state (visible or hidden).

// Visual Feedback:

// The code updates the visual feedback for each password requirement using classes and icons. A green checkmark indicates that a requirement is met, while a red circle indicates that it is not.
// Eye Icon:

// The eye icon allows the user to toggle between showing and hiding the password. The icon changes based on the current visibility state.
// Note: The code assumes that the Font Awesome icon classes used (fa-solid, fa-check, fa-circle, fa-eye, fa-eye-slash) correspond to valid icon classes in a Font Awesome library.

// This code provides a user-friendly way to enforce and display password requirements in real-time. If used in a production environment, it's important to ensure server-side validation of passwords as well, as client-side validation can be manipulated.