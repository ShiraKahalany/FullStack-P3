import { FXMLHttpRequest } from './FXMLHttpRequest.js';
var family;

window.addEventListener('message', function(event) {
    if (event.data === 'render-yourself')
    {
        family = parent.family;
        console.log("familyfromFamily",family);
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti().then(() => jsConfetti.addConfetti());
        const childrenList = document.getElementById('children-list'); //put the children in a list
        renderChildren();

        document.getElementById('delete-family-btn').addEventListener('click', deleteaccount);
        // console.log(family);
        function deleteaccount() {
            console.log("here in delete-account");
            if (family) {
            var request = new FXMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState == 4 && request.status == 200) {
                    alert("נימחקת בהצלחה ");
                    window.parent.postMessage('login-successful', '*');
                }
                else if (request.status===4 && request.status != 200) {
                    alert("שגיאה בהתחברות");
                }
            });
            request.open('DELETE', 'families', true);
            request.send(JSON.stringify(family));
            }
          
        }

        // Function to render children names
        function renderChildren() {
            console.log("im in reenderchildren");
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
                updateFamilyData(family.familyChildren);
            }
        }

        // Function to add a new child
        document.getElementById('add-child-btn').addEventListener('click', () => {
            const newChildName = prompt('Please enter the name of the new child:');
            if (newChildName) {
                family.familyChildren.push(newChildName);
                renderChildren();
                updateFamilyData(family.familyChildren);
            }
            }
        );

        // send the updated family
        function updateFamilyData(children_list) {
            family.familyChildren =children_list;
            console.log("updatefamily",family);
            //    updateFamily(family);
            var request = new FXMLHttpRequest();
            request.addEventListener('readystatechange', () => {
            if (request.readyState == 4 && request.status == 200) {
                alert("עודכן בהצלחה");
            }
            else if (request.status===4 && request.status != 200) {
                alert("שגיאה בהתחברות");
            }
            });
            request.open('PUT', 'families', true);
            request.send(JSON.stringify(family));
        }

}
});