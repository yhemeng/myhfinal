 // 筛选功能实现
 document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function () {
      const category = this.dataset.category;
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      document.querySelectorAll('.video-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });