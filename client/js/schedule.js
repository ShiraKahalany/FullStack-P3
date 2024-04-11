import { FXMLHttpRequest } from './FXMLHttpRequest.js';

function addStartIndicateToDate(date) {
    const element = document.getElementById(date);
    if (element) {
        const contentDiv = element.querySelector('.day-content');
        if (contentDiv) {
            contentDiv.innerHTML = '<img src="../img/start-icon.png" href="מתחילים!" class="start-icon">';
        }
    }
}

function addStarToDates(dates) {
    dates.forEach(date => {
        const element = document.getElementById(date);
        if (element) {
            const contentDiv = element.querySelector('.day-content');
            if (contentDiv) {
                contentDiv.innerHTML += '<img class="star" src="../img/star.png" alt="כוכב">';
            }
        };
    });
}

function indicateToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const element = document.getElementById(`${year}-${month}-${day}`);
    if (element) {
        element.classList.add('today');
    }

}

var my_family;

window.addEventListener('message', function (event) {
    if (event.data === 'render-yourself') {
        my_family = parent.family;
        console.log("from sche: ", my_family);
        console.log("Message received from the parent: " + event.data); // Message received from parent
        indicateToday();

        if (my_family)
            var start_date = new Date(parent.family.startTime);
        if (start_date) {
            const year = start_date.getFullYear();
            const month = String(start_date.getMonth() + 1).padStart(2, '0');
            const day = String(start_date.getDate()).padStart(2, '0');
            addStartIndicateToDate(`${year}-${month}-${day}`);

        }
        else
            addStartIndicateToDate('2024-03-31');

        var finish_dates_array = [];

        var itemsRequest = new FXMLHttpRequest();
        itemsRequest.open('GET', 'itemsToClean', true);
        itemsRequest.addEventListener('readystatechange', () => {
            if (itemsRequest.readyState == 4 && itemsRequest.status == 200) {
                console.log("from sche: ", itemsRequest.response);
                var items = JSON.parse(itemsRequest.response);
                items.forEach(item => {
                    if (item.finishTime) {
                        finish_dates_array.push(item.finishTime);
                    }
                });
                addStarToDates(finish_dates_array);
            }
            else if (itemsRequest.status === 4 && itemsRequest.status != 200) {
                alert("שגיאה בקבלת המידע מהשרת");
            }
        });
        itemsRequest.send(JSON.stringify(parent.family.family_id));    }
});




// if(family)
//     start_date=family.startTime;
// if(start_date)
//     addStartIndicateToDate(start_date);
// else
//     addStartIndicateToDate('2024-03-31');


//need to get itemToClean from server for this family

//finish_dates_array = arrange all finish date in array

//addStarToDates(finish_dates_array);
