// Thêm hiệu ứng loading và tương tác
document.addEventListener('DOMContentLoaded', function () {
    // Hiệu ứng cho các category
    const categories = document.querySelectorAll('.essay-category');
    categories.forEach((category, index) => {
        category.style.animationDelay = `${index * 0.1}s`;
        category.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
    });

    // Hiệu ứng cho các essay item
    const essayItems = document.querySelectorAll('.essay-item');
    essayItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05 + 0.5}s`;
        item.style.animation = `fadeInLeft 0.5s ease ${index * 0.05 + 0.5}s forwards`;
    });

    // Thêm hiệu ứng hover cho logo (giống trang chủ)
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

    // Thêm hiệu ứng cho nút sidebar
    const sidebarButtons = document.querySelectorAll('.sidebar-btn');
    sidebarButtons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.textContent.trim();

            // Hiệu ứng nhấp nháy
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Thông báo chức năng
            console.log(`Chức năng: ${buttonText}`);
        });
    });
});