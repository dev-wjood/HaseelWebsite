// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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


document.getElementById('sendEmailToResetPassword').addEventListener('click', function (e) {
    e.preventDefault();
    forgetPassord();
});

function forgetPassord(){
    var email = document.getElementById('emailInput').value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent successfully
            alert("Password reset email sent");
        })
        .catch((error) => {
            // Error occurred while sending the password reset email
            alert("Error sending password reset email");
        });
}
