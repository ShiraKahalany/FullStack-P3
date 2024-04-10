import { FXMLHttpRequest } from './FXMLHttpRequest.js';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('delete-family-btn').addEventListener('click', deleteaccount);
    // document.getElementById('backTologin-button').addEventListener('click', backToLogin);
});

document.addEventListener('DOMContentLoaded', function () {
    console.log("parent.family",parent.family); // Log the parent.family object when the DOM is fully loaded
    // Add other initialization code here
});

// const params = new URLSearchParams(window.location.search);
// const familyData = params.get('family');
// const family = JSON.parse(decodeURIComponent(familyData));
// const family =  {
//     family_id: 1,
//     familyName: "קהלני",
//     password: "123456",
//     familyChildren: ["שי", "רון", "רות", "דניאל", "רועי", "שירה", "אופיר"],
//     startTime: null
// }
 var family = parent.family;
 console.log(parent.family);

// console.log(family);
function deleteaccount() {
    console.log("here in delete-account");
    if (family) {
        var request = new FXMLHttpRequest();

        request.open('DELETE', 'families', true);

        const fxml = request.send(JSON.stringify(family));
        // const storedFamilies = getAllFamilies();
        // console.log(storedFamilies);
        if  (fxml.status  == 200){
            alert("נימחקת בהצלחה ");
        };
    }
    // window.location.href = "../html/login.html";
}

const childrenList = document.getElementById('children-list'); //put the children in a list

// Function to render children names
function renderChildren() {
    childrenList.innerHTML = '';
    if (family && family.familyChildren) {
        family.familyChildren.forEach(child => {
            const childLabel = document.createElement('label');
            childLabel.textContent = child;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.addEventListener('click', () => removeChild(child));
            childLabel.appendChild(removeButton);
            childrenList.appendChild(childLabel);
        });
    }
}


// Function to remove a child
function removeChild(childName) {
    const index = family.familyChildren.indexOf(childName);
    if (index !== -1) {
        family.familyChildren.splice(index, 1);
        renderChildren();
        // Send updated family data to the server

        var request = new FXMLHttpRequest();

        request.open('PUT', 'families', true);

        const fxml = request.send(JSON.stringify(family));
        if (fxml.status  == 200){
            alert("עודכן בהצלחה ");
        }
    }
}

// Function to add a new child
document.getElementById('add-child-btn').addEventListener('click', () => {
    const newChildName = prompt('Please enter the name of the new child:');
    if (newChildName) {
        family.familyChildren.push(newChildName);
        renderChildren();
        // Send updated family data to the server
        var request = new FXMLHttpRequest();

        request.open('PUT', 'families', true);

        const fxml = request.send(JSON.stringify(family));
        if (fxml.status  == 200){
            alert("עודכן בהצלחה ");
        }
    }
    }
);

document.addEventListener("DOMContentLoaded", function() {renderChildren(); });


// send the updated family
function updateFamilyData(children_list) {
   family.familyChildren =children_list;
   updateFamily(family);
}





// // Retrieving the familyobj object from localStorage
// const familyObj = JSON.parse(localStorage.getItem('familyObj'));


// const childrenList = familyObj.familyChildren;

// // Function to render children names
// function renderChildren() {
//     childrenList.innerHTML = '';
//     family.familyChildren.forEach(child => {
//         const childLabel = document.createElement('label');
//         childLabel.textContent = child;
//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'X';
//         removeButton.addEventListener('click', () => removeChild(child));
//         childLabel.appendChild(removeButton);
//         childrenList.appendChild(childLabel);
//     });
// }

// // Function to remove a child
// function removeChild(childName) {
//     const index = family.familyChildren.indexOf(childName);
//     if (index !== -1) {
//         family.familyChildren.splice(index, 1);
//         renderChildren();
//         // Send updated family data to the server
//         updateFamilyData();
//     }
// }

// // Function to add a new child
// document.getElementById('add-child-btn').addEventListener('click', () => {
//     const newChildName = prompt('Please enter the name of the new child:');
//     if (newChildName) {
//         family.familyChildren.push(newChildName);
//         renderChildren();
//         // Send updated family data to the server
//         updateFamilyData();
//     }
// });

// // Initial rendering of children
// renderChildren();

// // Function to update family data on the server
// function updateFamilyData() {
//     const request = new FXMLHttpRequest();
//     request.open('PUT', 'your_server_url/updateFamily', true);
//     request.setRequestHeader('Content-Type', 'application/json');
//     request.onreadystatechange = function() {
//         if (request.readyState === 4) {
//             if (request.status !== 200) {
//                 console.error('Error updating family data:', request.statusText);
//                 alert('אירעה שגיאה בעדכון המידע');
//             }
//         }
//     };
//     request.send(JSON.stringify(family));
// }

// // Function to delete family account
// document.getElementById('delete-family-btn').addEventListener('click', () => {
//     const request = new FXMLHttpRequest();
//     request.open('DELETE', 'your_server_url/deleteFamily', true);
//     request.onreadystatechange = function() {
//         if (request.readyState === 4) {
//             if (request.status === 200) {
//                 alert('המשפחה נמחקה בהצלחה');
//                 window.location.href = '../index.html'; // Redirect to index.html
//             } else {
//                 console.error('Error deleting family:', request.statusText);
//                 alert('אירעה שגיאה במחיקת המשפחה');
//             }
//         }
//     };
//     request.send();
// });
