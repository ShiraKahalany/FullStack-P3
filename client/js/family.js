const family = {
    familyName: "קהלני",
    password: "123456",
    familyChildren: ["שי", "רון", "רות", "דניאל", "רועי", "שירה", "אופיר"],
    itemsToClean: [
        { itemName: "מקרר", image: "../client/img/נקה ביתך לפסח (9).png", responsible: null, finishTime: null },
        { itemName: "מיטה", image: "../client/img/נקה ביתך לפסח (2).png", responsible: null, finishTime: null },
        { itemName: "ספה", image: "../client/img/נקה ביתך לפסח (3).png", responsible: null, finishTime: null },
        { itemName: "ארון", image: "../client/img/נקה ביתך לפסח (4).png", responsible: null, finishTime: null }
    ],
    startTime: null
}

const childrenList = document.getElementById('children-list');

// Function to render children names
function renderChildren() {
    childrenList.innerHTML = '';
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

// Function to remove a child
function removeChild(childName) {
    const index = family.familyChildren.indexOf(childName);
    if (index !== -1) {
        family.familyChildren.splice(index, 1);
        renderChildren();
    }
}

// Function to add a new child
document.getElementById('add-child-btn').addEventListener('click', () => {
    const newChildName = prompt('Please enter the name of the new child:');
    if (newChildName) {
        family.familyChildren.push(newChildName);
        renderChildren();
    }
});

// Initial rendering of children
renderChildren();
