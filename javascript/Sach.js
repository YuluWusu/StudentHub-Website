// Thêm hiệu ứng loading cho trang sách
document.addEventListener('DOMContentLoaded', function () {
    // Hiệu ứng cho các card sách
    const books = document.querySelectorAll('.book');
    books.forEach((book, index) => {
        book.style.animationDelay = `${index * 0.1}s`;
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

    // Hiệu ứng cho nút
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
        });

        btn.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    }

    // Hiệu ứng click cho các card sách
    books.forEach(book => {
        book.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});