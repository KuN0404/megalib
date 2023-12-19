document.addEventListener('DOMContentLoaded', function () {
  const slideImage = document.getElementById('slideImage');
  let currentSlide = 0;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % 2;
    updateSlide();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + 2) % 2;
    updateSlide();
  }

  function updateSlide() {
    if (currentSlide === 0) {
      slideImage.src = '.Assets/slide1.png';
    } else if (currentSlide === 1) {
      slideImage.src = './Assets/slide2.png';
    }
  }

  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  setInterval(nextSlide, 3200);
});
