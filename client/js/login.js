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
    // request.onreadystatechange = function () {
    //     if (request.readyState == 4 && request.status == 200) {
    //         console.log("yesssssss");
    //         const families = JSON.parse(request.response);
    //         console.log(families);
    //         // Do something with the received data here
    //     }
    // };

    request.open('GET', 'families', true);
    const fxml = request.send();
    console.log("from login:",fxml);
    // console.log("yes",modifiedRequest.response);
    const storedFamilies = fxml.response;
    const family = storedFamilies.find(family => family.familyName === familyName) || null;
    // window.family__id = family.family_id;
    if(family==null){
        alert("שם המשפחה אינו קיים");
        return;
    }
    if (family && family.password === password) {
        // Dispatch a custom event indicating successful login
        // const loginEvent = new CustomEvent('userLoggedIn');
        // console.log("here in dispatchEvent");
        // window.dispatchEvent(loginEvent);
        // Redirect or perform actions after successful login
        
        parent.user_login =true;
        parent.family = family;
        //user_family_id = parent.family.family_id;
        console.log("user_login:",parent.user_login,"user_family_id:",parent.family);
        //window.location.href = "../html/list.html?family=" + encodeURIComponent(JSON.stringify(family));
        window.parent.postMessage('login-successful', '*');
        //console.log('login successful');
    } else {
        alert("הסיסמא שגויה או שם המשפחה אינו קיים");
    }
            
}

function showSignup() {
    var iframe = parent.document.getElementById("login-frame");
    iframe.src = "html/signup.html";
    
}


