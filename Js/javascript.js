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
    slideImage.src = `/MEGALIB/Assets/slide${currentSlide + 1}.png`;
  }

  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  setInterval(nextSlide, 3200);
});
