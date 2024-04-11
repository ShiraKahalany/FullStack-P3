import { FXMLHttpRequest } from './FXMLHttpRequest.js';


var items=[];

function renderItems(Items, children) {
  // Assuming you have a container element with id "itemsContainer" in your HTML
  const itemsContainer = document.getElementById("itemsGrid");

  itemsContainer.innerHTML = '';


  // <div class="item">
  //     <img src="/client/img/item4.png" alt="מקרר">
  //     <span>מקרר</span>
  //     <div class="overlay">
  //       <div class="content">
  //           <h4>אחראי:</h4>
  //         <select  class="glowing-border">
  //           <option value="1">אורי</option>
  //           <option value="2">דני</option>
  //           <option value="3">מוישי</option>
  //         </select>
  //         <div class="horizonal-container cancel-confirm-div">
  //         <img src="/client/img/confirm-icon.png" alt="השלם משימה" id="cancel-btn"></img>
  //         <img src="/client/img/cancel-icon.png" alt="ביטול" id="cancel-btn"></img>
  //       </div>
  //       </div>
  //     </div>
  //   </div>
  // Iterate over each item in the Items array
  Items.forEach(item => {
    if(item.finishTime === null) {
    // Create a new div element for the item
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    // Create an img element for the item image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.itemName;

    // Create a span element for the item name
    const itemNameSpan = document.createElement("span");
    itemNameSpan.textContent = item.itemName;

    // Create a div element for the overlay
    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay");

    // Create a div element for the overlay content
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");

    // Create a h4 element for the responsible text
    const responsibleHeader = document.createElement("h4");
    responsibleHeader.textContent = "אחראי:";

    // Create a select element for responsible selection
    const select = document.createElement("select");
    select.classList.add("glowing-border");


    const responsibleOption = document.createElement("option");
responsibleOption.value = item.responsible; // You may want to assign appropriate values
responsibleOption.textContent = item.responsible;
select.appendChild(responsibleOption);

    children.forEach((child, index) => {
      const childOption = document.createElement("option");
      childOption.value = child; // You may want to assign appropriate values
      childOption.textContent = child;
      select.appendChild(childOption);
    });

        // Add event listener to select element
        select.addEventListener('change', function(event) {

          // update child responsible for item

          item.responsible = event.target.value;

          var updateRequestResponsible = new FXMLHttpRequest();
          updateRequestResponsible.addEventListener('readystatechange', () => {
            if (updateRequestResponsible.readyState == 4 && updateRequestResponsible.status == 200) {
              console.log("Item updated successfully");
            }
            else if (updateRequestResponsible.status === 4 && updateRequestResponsible.status != 200) {
              alert("שגיאה בעדכון האחראי");
            }
          });
          updateRequestResponsible.open('PUT', 'itemsToClean', true);
          updateRequestResponsible.send(JSON.stringify(item));

          
          console.log("Selected option changed");
          console.log("Selected value:", event.target.value);
      });

    // Create div for cancel-confirm buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("horizonal-container", "cancel-confirm-div");

    const confirmImg = document.createElement("img");
    confirmImg.src = "/client/img/confirm-icon.png";
    confirmImg.alt = "השלם משימה";
    confirmImg.id = "confirm-btn"; // Note: IDs should be unique in HTML document
      confirmImg.addEventListener('click', function(event) {
        // update finish time for item

        var now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            item.finishTime =  `${year}-${month}-${day}`;
            console.log("finish time:", item.finishTime);

        var updateRequest = new FXMLHttpRequest();
        updateRequest.addEventListener('readystatechange', () => {
          if (updateRequest.readyState == 4 && updateRequest.status == 200) {
            


            console.log("Item updated successfully");
            alert("כל הכבוד! המשימה הושלמה בהצלחה")
          }
          else if (updateRequest.status === 4 && updateRequest.status != 200) {
            alert("שגיאה בעדכון המשימה");
          }
        });
        updateRequest.open('PUT', 'itemsToClean', true);
        
        updateRequest.send(JSON.stringify(item));


        console.log("Confirm button clicked");
            }      );


    const cancelImg = document.createElement("img");
    cancelImg.src = "/client/img/cancel-icon.png";
    cancelImg.alt = "ביטול";
    cancelImg.id = "cancel-btn"; // Note: IDs should be unique in HTML document

    cancelImg.addEventListener('click', function(event) {
      // delete item from list

      var deleteRequest = new FXMLHttpRequest();
      deleteRequest.addEventListener('readystatechange', () => {
        if (deleteRequest.readyState == 4 && deleteRequest.status == 200) {
          console.log("Item deleted successfully");
          alert("המשימה בוטלה בהצלחה")
        }
        else if (deleteRequest.status === 4 && deleteRequest.status != 200) {
          alert("שגיאה בביטול המשימה");
        }
      });
      deleteRequest.open('DELETE', 'itemsToClean', true);
      deleteRequest.send(JSON.stringify(item));
      console.log("Cancel button clicked");
    });

    // Append elements to respective parents
    buttonsDiv.appendChild(confirmImg);
    buttonsDiv.appendChild(cancelImg);

    contentDiv.appendChild(responsibleHeader);
    contentDiv.appendChild(select);
    contentDiv.appendChild(buttonsDiv);

    overlayDiv.appendChild(contentDiv);

    itemDiv.appendChild(img);
    itemDiv.appendChild(itemNameSpan);
    itemDiv.appendChild(overlayDiv);

    itemsContainer.appendChild(itemDiv);
  }
  });

  items = document.querySelectorAll('.item');
}


window.addEventListener('message', function (event) {
  if (event.data === 'render-yourself') {
    console.log("Message received from the parent: " + event.data); // Message received from parent
    const searchInput = document.getElementById('searchInput');
    items = document.querySelectorAll('.item');

    searchInput.addEventListener('input', function () {
      const searchTerm = this.value.trim();

      items.forEach(item => {
        const textContent = item.querySelector('span').textContent.trim();
        if (textContent.includes(searchTerm)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });


    var fxml = new FXMLHttpRequest();
    fxml.addEventListener('readystatechange', () => {
      if (fxml.readyState == 4 && fxml.status == 200) {

        const ItemsforServer = JSON.parse(fxml.response);



        renderItems(ItemsforServer, parent.family.familyChildren);
        console.log(ItemsforServer);
      }
      else if (fxml.status === 4 && fxml.status != 200) {
        alert("שגיאה בקבלת המידע מהשרת");
      }
    });
    fxml.open('GET', 'itemsToClean', true);
    fxml.send(JSON.stringify(parent.family.family_id));







  }
});

