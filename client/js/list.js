import { FXMLHttpRequest } from './FXMLHttpRequest.js';

window.addEventListener('message', function(event) {
  if (event.data === 'render-yourself')
  {
    console.log("Message received from the parent: " + event.data); // Message received from parent
    const searchInput = document.getElementById('searchInput');
    const items = document.querySelectorAll('.item');
    
    searchInput.addEventListener('input', function() {
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
          const Items = JSON.parse(fxml.response);
          console.log(Items);
        }
        else if (fxml.status===4 && fxml.status != 200) {
            alert("שגיאה בקבלת המידע מהשרת");
        }
    });
    fxml.open('GET', 'itemsToClean', true);
    fxml.send();
    
  }
});

