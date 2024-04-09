var user_login = false;
var family;

const app = {
    pages: [],
    show: new Event('show'),
    init: function(){
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        })
        
        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'Home', '#home');
        

        app.login_nav();

        //when the back button is clicked
        window.addEventListener('popstate', app.poppin);
    },
    login_nav: function() {
        if(user_login == true) 
        {
            document.querySelector('.active').classList.remove('active');
            document.getElementById('home').classList.add('active');
        }
        else
        {
            document.querySelector('.active').classList.remove('active');
            document.getElementById('login').classList.add('active');
        }
    
    },
    nav: function(ev){
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage)
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
    pageShown: function(ev){
        console.log('Page', ev.target.id, 'just shown');
    },
    poppin: function(ev){
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#' ,'');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        console.log(hash)
        //history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(hash).dispatchEvent(app.show);
    }
}

document.addEventListener('DOMContentLoaded', app.init);

// Add an event listener to listen for messages from the iframe
window.addEventListener('message', function(event) {
    // Check if the message is from the iframe and contains a successful login response
    if (event.source === document.getElementById('login-frame').contentWindow && 'login-successful' in event.data) {
        user_login = true;
        app.login_nav();
        const parts = event.data.split(' ');

        // Extract the value of x from the second part of the split string
        const fam_id = parseInt(parts[1]);
        
        
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
    request.open('GET', fam_id, true);
    // request.setRequestHeader('Content-Type', 'application/json');
    // Send request with family name and password
    request.send();


    family = JSON.parse(request.responseText);
    }
});

const family = {
    family_id:0 ,
    familyName: null,
    password: null,
    familyChildren: [],
    startTime: null
}

const itemToClean = {
    family_id: 0,
    itemName: null,
    image: null,
    responsible: null,
    finishTime: null,
    deleted: false
}


// function fetchData(callback) {
//     const url = 'https://api.example.com/data';
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 callback(null, xhr.responseText);
//             } else {
//                 callback('Error fetching data', null);
//             }
//         }
//     };
//     xhr.open('GET', url, true);
//     xhr.send();
// }

// fetchData(function(error, data) {
//     if (error) {
//         console.error('Error:', error);
//     } else {
//         console.log('Data fetched:', data);
//         // You can process the response here
//     }
// });


// const log = document.querySelector(".event-log");

// document.querySelector("#xhr").addEventListener("click", () => {
//   log.textContent = "";

//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener("loadend", () => {
//     log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
//   });

//   xhr.open(
//     "GET",
//     "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
//   );
//   xhr.send();
//   log.textContent = `${log.textContent}Started XHR request\n`;
// });

// document.querySelector("#reload").addEventListener("click", () => {
//   log.textContent = "";
//   document.location.reload();
// });

