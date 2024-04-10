import { FXMLHttpRequest } from './FXMLHttpRequest.js';
var family;
window.addEventListener('message', function(event) {
  if (event.data === 'render-yourself')
  {
    family = parent.family;
    console.log("the family from additem:",family);


    const images = [
      '../img/item1.png',
      '../img/item2.png',
      '../img/item3.png',
      '../img/item4.png',
      '../img/item5.png',
      '../img/item6.png',
      '../img/item7.png',
      '../img/item8.png',
    ]

    var index = 0;
    var selectedImage;

    if (index === 0) {
      document.getElementById('left-arrow').style.display = 'none';
    }

    if (index === images.length - 3) {
      document.getElementById('right-arrow').style.display = 'none';
    }

    document.getElementById('left-arrow').addEventListener('click', () => { index--; goGalleryItems(); });
    document.getElementById('right-arrow').addEventListener('click', () => { index++; goGalleryItems(); });

    function goGalleryItems() {
      if (index !== 0) {
        document.getElementById('left-arrow').style.display = 'block';
      }
      else {
        document.getElementById('left-arrow').style.display = 'none';
      }

      if (index === images.length - 3) {
        document.getElementById('right-arrow').style.display = 'none';
      }
      else {
        document.getElementById('right-arrow').style.display = 'block';
      }
      const gallery = document.querySelector('.photo-gallery');
      gallery.innerHTML = ''; // Clear existing content

      // Create and append new image elements
      [index, index + 1, index + 2].forEach(index => {
        const img = document.createElement('img');
        img.src = images[index];
        img.alt = `Image ${index + 1}`;
        img.className = 'gallery-image';
        img.addEventListener('click', () => {
          selectedImage = index;
          document.querySelectorAll('.selected').forEach(img => img.classList.remove('selected'));
          img.classList.add('selected');

        }  );     
        gallery.appendChild(img);
      });

    }

    goGalleryItems();


    // const params = new URLSearchParams(window.location.search);
    // const familyData = params.get('family');
    // const family = JSON.parse(decodeURIComponent(familyData));

  

    function populateResponsibleOptions() {
    const itemResponsibleSelect = document.getElementById('item-responsible');

    // Clear existing options
    itemResponsibleSelect.innerHTML = '';

    // Create and append options for each child
    family.familyChildren.forEach(child => {
        const option = document.createElement('option');
        option.text = child;
        itemResponsibleSelect.add(option);
    });
    }
    populateResponsibleOptions();

    function buildItemObject() {
      const itemName = document.getElementById('itemName').value;
      const selectedImageSrc = selectedImage !== undefined ? images[selectedImage] : "../img/default-item-image.png";
      const responsibleIndex = document.getElementById('item-responsible').selectedIndex;
      const responsible = family.familyChildren[responsibleIndex];
      const finishTime = null;

      const newItem = {
          family_id: family.family_id,
          itemName: itemName,
          image: selectedImageSrc,
          responsible: responsible,
          finishTime: finishTime
      };

      console.log("new item:", newItem);
      return newItem;
    }

    document.getElementById('add-item-btn').addEventListener('click', function() {
      const newItem = buildItemObject();
      console.log(newItem);
      var request = new FXMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState == 4 && request.status == 200) {
                alert("הפריט הוסף בהצלחה ");
            }
            else if (request.status===4 && request.status != 200) {
                alert("שגיאה בהתחברות");
            }
        });
        request.open('POST', 'itemsToClean', true);
        request.send(JSON.stringify(newItem));
      // addItemToClean(newItem);
      // window.location.href = "./DBud.html?family=" + encodeURIComponent(JSON.stringify(family));
    });

    }
});