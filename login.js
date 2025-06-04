// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "ypur_API_key",
    authDomain: "yourWebsite.firebaseapp.com",
    projectId: "yourWebsite-e0804",
    storageBucket: "yourWebsite-e0804.appspot.com",
    messagingSenderId: "yourID",
    appId: "yourAppID",
    measurementId: "yourMeasurmentID"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById('logInForward').addEventListener('click', function (e) {
    e.preventDefault();
    if (user !== null) {
        logIn();
      } else {
        alert("The Email/Password is incorrect. \nPlease try again");
      }
    
});

function logIn(){
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Loged in, forwarding to the view page
            window.location.href = 'view.html';
        })
        .catch((error) => {
            // Error in log in
            alert("The Email/Password is incorrect. \nPlease try again");
        });
}
