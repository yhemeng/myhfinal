// 粉丝数据动态增长效果
function animateCounter(element, targetValue, duration) {
    const startValue = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const progress = (currentTime - startTime) / duration;
      const value = Math.floor(startValue + (targetValue - startValue) * progress);

      element.textContent = value;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = targetValue;
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // 页面加载后启动计数器
  window.addEventListener('DOMContentLoaded', () => {
    animateCounter(document.getElementById('bilibili-fans'), 428.8, 1500);
    animateCounter(document.getElementById('weibo-fans'), 253, 1500);
    animateCounter(document.getElementById('douyin-fans'), 355, 1500);
    // animateCounter(document.getElementById('ins-fans'), 85, 1500);
  });