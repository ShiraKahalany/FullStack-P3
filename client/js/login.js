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
    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200) {
            console.log("from login:",request.response);
            // console.log("yes",modifiedRequest.response);
            const storedFamilies = JSON.parse(request.response);
            const family = storedFamilies.find(family => family.familyName === familyName) || null;
            // window.family__id = family.family_id;
            if(family==null){
                alert("שם המשפחה אינו קיים");
                return;
            }
            if (family && family.password === password) {
                
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
        else if (request.status===4 && request.status != 200) {
            alert("שגיאה בהתחברות");
        }
    });


    request.open('GET', 'families', true);
    request.send();

            
}

function showSignup() {
    var iframe = parent.document.getElementById("login-frame");
    iframe.src = "html/signup.html";
    
}


