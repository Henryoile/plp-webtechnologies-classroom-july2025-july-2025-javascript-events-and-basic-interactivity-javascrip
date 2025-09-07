// =======================
// Dark/Light Mode Toggle
// =======================
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// =======================
// Counter Feature
// =======================
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
let counterValue = 0;

incrementBtn.addEventListener("click", () => {
    counterValue++;
    counterDisplay.textContent = counterValue;
});

// =======================
// FAQ Collapse/Expand
// =======================
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle("show");
    });
});

// =======================
// Form Validation
// =======================
const form = document.getElementById("registerForm");
const nameInput = document.getElementById("studentName");
const emailInput = document.getElementById("email");
const walletInput = document.getElementById("wallet");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const walletError = document.getElementById("walletError");
const formSuccess = document.getElementById("formSuccess");

// Regex patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const walletPattern = /^0x[a-fA-F0-9]{40}$/;

form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop form from submitting
    let valid = true;

    // Validate name (only letters and spaces)
    if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
        nameError.textContent = "Name must contain only letters.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate email
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate wallet address
    if (!walletPattern.test(walletInput.value)) {
        walletError.textContent = "Wallet must start with 0x followed by 40 hex characters.";
        valid = false;
    } else {
        walletError.textContent = "";
    }

    // Success message
    if (valid) {
        formSuccess.textContent = "Credential registered successfully ✅";
        form.reset();
        setTimeout(() => {
            formSuccess.textContent = "";
        }, 3000);
    }
});
