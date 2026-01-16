document.addEventListener("DOMContentLoaded", () => {
    const showcaseCards = document.querySelectorAll('.showcase-container');
    const modals = document.querySelectorAll('.modal');
  
    showcaseCards.forEach((card, index) => {
      const modal = modals[index];
      if (!modal) return; // safety check
  
      const closeBtn = modal.querySelector('.close');
  
      card.addEventListener('click', () => {
        modal.style.display = 'flex';
      });
  
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    });
  
    window.addEventListener('click', (e) => {
      modals.forEach(modal => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  });
  





  document.addEventListener("DOMContentLoaded", () => {
    const images = [
      "assets/photo_slides/about_pic.jpg",
      "assets/photo_slides/Photo_02.jpg",
      "assets/photo_slides/Photo_03.jpg",
      "assets/photo_slides/Photo_04.jpg",
      "assets/photo_slides/Photo_05.jpg",
      "assets/photo_slides/Photo_06.jpg"
    ];
  
    let currentIndex = 0;
    const photoElement = document.getElementById("aboutPhoto");
  
    function changeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      photoElement.src = images[currentIndex];
    }
  
    setInterval(changeImage, 1500);
  });
  


