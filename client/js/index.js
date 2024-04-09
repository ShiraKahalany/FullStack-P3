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
        window.addEventListener('popstate', app.poppin);
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
    manual_nav: function(currentPage){
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

window.app = app;

document.addEventListener('DOMContentLoaded', app.init);

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

