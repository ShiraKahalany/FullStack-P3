import { FXMLHttpRequest } from './FXMLHttpRequest.js';

// document.getElementById('login-button').addEventListener('click', login());
// document.getElementById('signup-button').addEventListener('click', showSignup());

// Attach event listeners after the DOM has loaded
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-button').addEventListener('click', login);
    document.getElementById('signup-button').addEventListener('click', showSignup);
});

function login() {
    const familyName = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the inputs are not empty
    if (familyName.trim() === '' || password.trim() === '') {
        alert("אנא מלאו את כל השדות"); // Display an alert if any input is empty
        return;
    }

    var request = new FXMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            const families = JSON.parse(request.responseText);
            console.log(families);
            // Do something with the received data here
        }
    };

    // Open connection
    request.open('GET', 'families', true);
    request.send();

    
    // var params = "id=1&name=John"; // Parameters to be sent in the request body

    // xhr.open("PUT", url, true);
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//זה בעצם אומר לשרת איזה סוג נתונים הועבר. הפרמטר השני שאת רואה מסמל את הסוג"id=1&name=John" של הנתון הזה 

    // xhr.onreadystatechange = function () {
    // if (xhr.readyState == 4 && xhr.status == 200) {
    //     console.log(xhr.responseText);
    // }
    // };

    // xhr.send(params);
}

function showSignup() {
    var iframe = parent.document.getElementById("login-frame");
    iframe.src = "html/signup.html";
}
