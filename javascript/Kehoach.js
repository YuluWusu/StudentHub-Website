// Kehoach.js
document.addEventListener('DOMContentLoaded', function() {
    // Hiệu ứng cho các panel chính
    const panels = document.querySelectorAll('.thanhtrai, .noidung-chinh, .thanhphai');
    panels.forEach((panel, index) => {
        panel.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Hiệu ứng cho các ngày trong tuần
    const days = document.querySelectorAll('.ngay');
    days.forEach((day, index) => {
        day.style.animationDelay = `${index * 0.05 + 0.3}s`;
    });
    
    // Hiệu ứng cho sự kiện sắp tới
    const events = document.querySelectorAll('.su-kien');
    events.forEach((event, index) => {
        event.style.animationDelay = `${index * 0.08 + 0.5}s`;
    });
    
    // Hiệu ứng cho các kế hoạch
    const plans = document.querySelectorAll('.kehoach-item');
    plans.forEach((plan, index) => {
        plan.style.animationDelay = `${index * 0.06 + 0.7}s`;
    });
    
    // Hiệu ứng cho thống kê
    const stats = document.querySelectorAll('.so-lieu-item');
    stats.forEach((stat, index) => {
        stat.style.animationDelay = `${index * 0.06 + 0.9}s`;
    });
    
    // Hiệu ứng cho kế hoạch quan trọng
    const priorities = document.querySelectorAll('.kehoach-uu-tien');
    priorities.forEach((priority, index) => {
        priority.style.animationDelay = `${index * 0.08 + 1.1}s`;
    });
});