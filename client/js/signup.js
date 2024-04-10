import { FXMLHttpRequest } from './FXMLHttpRequest.js';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('keep-button').addEventListener('click', keep);
    document.getElementById('backTologin-button').addEventListener('click', backToLogin);
});




function keep(){
    const familyName = document.getElementById('familyName').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
      // Check if any field is empty
      if (!familyName || !password || !confirmPassword || !childrenNames) {
        alert("בבקשה מלא הכל");
        return;
    }


    if (password !== confirmPassword) {
        alert("אימות הסיסמא לא תואם");
        return;
    }

    const familyChildren = document.getElementById('childrenNames').value.split(",").map(name => name.trim());
    const newFamily = {
        family_id: 0, // Function to generate the next family_id
        familyName,
        password,
        familyChildren,
        startTime: new Date() //this day
    }
    console.log(newFamily);

    var request = new FXMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200) {
            alert("נירשמת בהצלחה - נקיון נעים");
            window.location.href = "../html/login.html";
        }
        else if (request.status===4 && request.status != 200) {
            alert("שגיאה בהתחברות");
        }
    });


    request.open('POST', 'families', true);
    request.send(JSON.stringify(newFamily));
   
}


function backToLogin(){
    window.location.href = "../html/login.html";
}