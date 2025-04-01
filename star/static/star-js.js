document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('[data-stars-count]');

  containers.forEach(container => {
    const count = parseInt(container.dataset.starsCount) || 20;
    const starsHTML = Array(count).fill('<div class="star"></div>').join('');
    container.innerHTML = starsHTML;

    container.querySelectorAll('.star').forEach(star => {
      // Случайные параметры для каждой звезды
      star.style.cssText = `
        --size: ${1 + Math.random() * 3}px;
        --duration: ${3 + Math.random() * 4}s;
        --float-duration: ${10 + Math.random() * 20}s;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 5}s;
      `;
    });
  });
});