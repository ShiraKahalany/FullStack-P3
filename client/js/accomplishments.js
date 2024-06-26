import { FXMLHttpRequest } from "./FXMLHttpRequest.js";

function SetFourBoy() {

let values = [
    { id: "smart-boy", n: 0, man: "" },
    { id: "evil-boy", n: 0, man: "" },
    { id: "stupid-boy", n: 0, man: "" },
    { id: "dont-now-how-to-ask-boy", n: 0, man: "" }
];

// Update elements with dynamic values
values.forEach(value => {
    const boy = document.getElementById(value.id);
    boy.querySelector('h2').textContent = `${value.n} פריטים`;
    boy.querySelector('span').textContent = value.man;
});

// Change the value of "N" for a specific boy
function changeNValue(boyId, newValue) {
    const value = values.find(value => value.id === boyId);
    if (value) {
        value.n = newValue;
        const boy = document.getElementById(boyId);
        boy.querySelector('h2').textContent = `${newValue} פריטים`;
    }
}

function changeMANValue(boyId, newValue) {
    const value = values.find(value => value.id === boyId);
    if (value) {
        value.man = newValue;
        const boy = document.getElementById(boyId);
        boy.querySelector('h2').textContent = `${newValue} פריטים`;
    }
}


var my_family = parent.family;

var fourboyRequest = new FXMLHttpRequest();
fourboyRequest.open('GET', 'itemsToClean', true);
fourboyRequest.send(JSON.stringify(my_family.family_id));

fourboyRequest.onreadystatechange = function () {
    if (fourboyRequest.readyState == 4 && fourboyRequest.status == 200) {
        console.log("from accom: ",JSON.parse(fourboyRequest.response));
    }

}

}



window.addEventListener('message', function(event) {
    if (event.data === 'render-yourself')
    {
        my_family = parent.family;
        console.log("from accom: ",my_family);
        console.log("Message received from the parent: " + event.data); // Message received from parent
        SetFourBoy();
    }
  });

