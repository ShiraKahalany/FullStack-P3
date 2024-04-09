import { FXMLHttpRequest } from './FXMLHttpRequest.js';
import { app } from "../index.html";

function login() {
    var familyName = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var request = new FXMLHttpRequest();
    request.readystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                // Handle successful response
                var response = JSON.parse(request.responseText);
                // Check if the response indicates successful login
                if (response.success) {
                    // Redirect to family.html or perform any other action
                    console.log("sucess");
                } else {
                    // Display error message to the user
                    alert("שם המשתמש או הסיסמא שגויים או שיש בעיה בשרת :(");
                }
            } else {
                // Handle request error
                console.error("Error: " + request.status);
            }
        }
    };
    // Open connection
    request.open('GET', familyName, true);
    // request.setRequestHeader('Content-Type', 'application/json');
    // Send request with family name and password
    request.send();
    var familyobj = JSON.parse(request.responseText);
   
    //const familyName = familyobj.familyName;

    if (familyobj.password === password) {
        // window.location.href = "../html/family.html";
    } else {
        alert("Invalid family name or password!");
    }


    // Storing the familyobj object in localStorage
    localStorage.setItem('familyObj', JSON.stringify(familyobj));

    
}
