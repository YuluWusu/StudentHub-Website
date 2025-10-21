document.addEventListener('DOMContentLoaded', function() {
  // Hiệu ứng cho các info item
  const info = document.querySelectorAll('.info-item, .info-title-main, .image-prof');
  info.forEach((info, index) => {
    info.style.animationDelay = `${index * 0.1}s`;
  });
  
  const cards = document.querySelectorAll('.course-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1 + 0.6}s`;
  });
  
  // Hiệu ứng cho các cột ngày trong thời khóa biểu
  const dayColumns = document.querySelectorAll('.day-column');
  dayColumns.forEach((column, index) => {
    column.style.animationDelay = `${index * 0.1 + 1.2}s`;
  });
  
  // Hiệu ứng cho các phần còn lại (đã đổi tên class)
  const otherElements = document.querySelectorAll('.calendar-container, .assignments-box, .notes-box, .drive-box, .bookmarks-box, .goals-box');
  otherElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1 + 2}s`;
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