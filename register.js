// Import the functions from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var confirmedPasswordInput = document.getElementById('confirmedPasswordInput');

document.getElementById('SignUpButton').addEventListener('click', function (e) {
    if (isValidEmail(emailInput.value)) {
        passwordInput.setCustomValidity("");

        if (isStrongPassword(passwordInput.value)) {
            if (confirmedPasswordInput.value === passwordInput.value) {
                e.preventDefault();
                signUp();
            } else {
                confirmedPasswordInput.setCustomValidity("Confirmation password is not match the entered password");
            }
        } else {
            passwordInput.setCustomValidity("Password must have at least 8 characters and include at least one symbol (!@#$%^&*)");
        }
    } else {
        emailInput.setCustomValidity("Make sure that your email is a valid email.");
    }
});


function isValidEmail(email) {
    var emailForm = /^[a-zA-Z][^\s@]+@[^\s@]+\.[^\s@]+[a-zA-Z]+$/;

    return emailForm.test(email);
}

function isStrongPassword(password) {
    var passwordForm = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    return passwordForm.test(password);
}


function signUp() {
    createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
        .then((userCredential) => {
            // Signed up 
            alert("User registered successfully! \nYou can log In now.");
            window.location.href = 'login.html';
        })
        .catch((error) => {
            alert("Failed to register. \nMake sure that your email has not been registered before.");
        });
}


