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

function indicateToday()    {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const element = document.getElementById(`${year}-${month}-${day}`);
    if (element) {
        element.classList.add('today');
    }

}

indicateToday();

var start_date=null;

// if(family)
//     start_date=family.startTime;
// if(start_date)
//     addStartIndicateToDate(start_date);
// else
//     addStartIndicateToDate('2024-03-31');


//need to get itemToClean from server for this family

//finish_dates_array = arrange all finish date in array

//addStarToDates(finish_dates_array);
