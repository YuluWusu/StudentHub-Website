document.addEventListener('DOMContentLoaded', function() {
  // Hiệu ứng cho các info item
  const info = document.querySelectorAll('.info-item, .info-title-main, .image-prof, .family-title');
  info.forEach((info, index) => {
    info.style.animationDelay = `${index * 0.1}s`;
  });
  // Thêm hiệu ứng hover cho logo
  const logo = document.querySelector('.logo');
  logo.addEventListener('mouseenter', function() {
    this.style.transform = 'rotate(10deg) scale(1.1)';
    this.style.boxShadow = '0 0 30px rgba(100, 100, 255, 0.5)';
  });
  
  logo.addEventListener('mouseleave', function() {
    this.style.transform = 'rotate(0) scale(1)';
    this.style.boxShadow = '0 0 20px rgba(100, 100, 255, 0.3)';
  });
});