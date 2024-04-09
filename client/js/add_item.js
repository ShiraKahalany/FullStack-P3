
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


