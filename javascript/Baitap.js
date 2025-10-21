// Thêm hiệu ứng loading và tương tác
document.addEventListener('DOMContentLoaded', function () {
    // Hiệu ứng cho các category
    const categories = document.querySelectorAll('.exercise-category');
    categories.forEach((category, index) => {
        category.style.animationDelay = `${index * 0.1}s`;
        category.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
    });

    // Hiệu ứng cho các exercise item
    const exerciseItems = document.querySelectorAll('.exercise-item');
    exerciseItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05 + 0.5}s`;
        item.style.animation = `fadeInLeft 0.5s ease ${index * 0.05 + 0.5}s forwards`;
    });

    // Thêm hiệu ứng hover cho logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function () {
            this.style.transform = 'rotate(10deg) scale(1.1)';
            this.style.boxShadow = '0 0 30px rgba(100, 100, 255, 0.5)';
        });

        logo.addEventListener('mouseleave', function () {
            this.style.transform = 'rotate(0) scale(1)';
            this.style.boxShadow = '0 0 20px rgba(100, 100, 255, 0.3)';
        });
    }
});