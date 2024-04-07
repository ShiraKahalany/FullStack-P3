document.addEventListener('DOMContentLoaded', () => {
    const cancelBtns = document.querySelectorAll('.cancel-btn');

    cancelBtns.forEach(btn => {
      btn.addEventListener('click', () => {
      console.log('cancel button clicked');
      });
    });
  });