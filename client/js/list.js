import { FXMLHttpRequest } from './FXMLHttpRequest.js';


var items=[];

function renderItems(Items, children) {
  // Assuming you have a container element with id "itemsContainer" in your HTML
  const itemsContainer = document.getElementById("itemsGrid");

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

    // Create options for responsible and children
    const responsibleOption = document.createElement("option");
    responsibleOption.value = "0"; // You may want to assign appropriate values
    responsibleOption.textContent = item.responsible;
    select.appendChild(responsibleOption);

    children.forEach((child, index) => {
      const childOption = document.createElement("option");
      childOption.value = index + 1; // You may want to assign appropriate values
      childOption.textContent = child;
      select.appendChild(childOption);
    });

    // Create div for cancel-confirm buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("horizonal-container", "cancel-confirm-div");

    const confirmImg = document.createElement("img");
    confirmImg.src = "/client/img/confirm-icon.png";
    confirmImg.alt = "השלם משימה";
    confirmImg.id = "confirm-btn"; // Note: IDs should be unique in HTML document

    const cancelImg = document.createElement("img");
    cancelImg.src = "/client/img/cancel-icon.png";
    cancelImg.alt = "ביטול";
    cancelImg.id = "cancel-btn"; // Note: IDs should be unique in HTML document

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
        //const ItemsforServer = JSON.parse(fxml.response);

        const ItemsforServer = [{ family_id: 1, itemName: "קומקום", image: "../client/img/נקה ביתך לפסח (5).png", responsible: "שי", finishTime: null },
        { family_id: 1, itemName: "מיקרוגל", image: "../client/img/נקה ביתך לפסח (6).png", responsible: "רון", finishTime: null },
        { family_id: 1, itemName: "תנור", image: "../client/img/נקה ביתך לפסח (7).png", responsible: "רות", finishTime: null },
        { family_id: 2, itemName: "קומקום", image: "../client/img/נקה ביתך לפסח (5).png", responsible: "מוריה", finishTime: null },
        { family_id: 2, itemName: "ספה", image: "../client/img/נקה ביתך לפסח (3).png", responsible: "בן", finishTime: null },
        { family_id: 3, itemName: "קומקום", image: "../client/img/נקה ביתך לפסח (5).png", responsible: "אמה", finishTime: null },
        { family_id: 3, itemName: "מיקרוגל", image: "../client/img/נקה ביתך לפסח (6).png", responsible: "סופיה", finishTime: null },
        { family_id: 4, itemName: "קומקום", image: "../client/img/נקה ביתך לפסח (5).png", responsible: "יעקב", finishTime: null },
        { family_id: 4, itemName: "כיור", image: "../client/img/נקה ביתך לפסח (8).png", responsible: "אמילי", finishTime: null }
        ];

        renderItems(ItemsforServer, parent.family.familyChildren);
        console.log(ItemsforServer);
      }
      else if (fxml.status === 4 && fxml.status != 200) {
        alert("שגיאה בקבלת המידע מהשרת");
      }
    });
    fxml.open('GET', 'itemsToClean', true);
    fxml.send();







  }
});

