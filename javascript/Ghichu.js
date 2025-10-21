//Ghichu.js
document.addEventListener('DOMContentLoaded', function() {
    // Hiệu ứng cho các panel chính
    const panels = document.querySelectorAll('.thanhtrai,.panel-title,.ghichu');
    panels.forEach((panel, index) => {
        panel.style.animationDelay = `${index * 0.1}s`;
    });
    

    const days = document.querySelectorAll('.noidung, .note-form');
    days.forEach((day, index) => {
        day.style.animationDelay = `${index * 0.05 + 0.3}s`;
    });
    

    const events = document.querySelectorAll('.danh-sach-ghi-chu');
    events.forEach((event, index) => {
        event.style.animationDelay = `${index * 0.08 + 0.5}s`;
    });
    
    const plans = document.querySelectorAll('.muc-ghi-chu');
    plans.forEach((plan, index) => {
        plan.style.animationDelay = `${index * 0.06 + 0.7}s`;
    });
    

    const stats = document.querySelectorAll('.thanhphai');
    stats.forEach((stat, index) => {
        stat.style.animationDelay = `${index * 0.06 + 0.9}s`;
    });
    
});