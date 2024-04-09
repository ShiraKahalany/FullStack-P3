document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-image');
  
    images.forEach(image => {
      image.addEventListener('click', () => {
        const isSelected = image.classList.contains('selected');
  
        images.forEach(img => img.classList.remove('selected'));
  
        if (!isSelected) {
          image.classList.add('selected');
        }
      });
    });
  });