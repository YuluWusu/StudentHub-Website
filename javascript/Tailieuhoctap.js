// Thêm hiệu ứng loading cho trang tài liệu học tập
document.addEventListener('DOMContentLoaded', function () {
    // Hiệu ứng cho các card tài liệu
    const documents = document.querySelectorAll('.document1, .document2, .document3, .document4, .document5, .document6');
    documents.forEach((doc, index) => {
        doc.style.animationDelay = `${index * 0.1}s`;
    });

    // Hiệu ứng cho các danh mục
    const categories = document.querySelectorAll('.Community-Platform, .Creation-Tool, .Find-Answers, .Job-Tool, .Learning-Tool, .Marketplace');
    categories.forEach((category, index) => {
        category.style.animationDelay = `${index * 0.1 + 0.3}s`;
    });

    // Thêm hiệu ứng hover cho logo (giống trang chủ)
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', function () {
        this.style.transform = 'rotate(10deg) scale(1.1)';
        this.style.boxShadow = '0 0 30px rgba(100, 100, 255, 0.5)';
    });

    logo.addEventListener('mouseleave', function () {
        this.style.transform = 'rotate(0) scale(1)';
        this.style.boxShadow = '0 0 20px rgba(100, 100, 255, 0.3)';
    });

    // Hiệu ứng click cho các card tài liệu
    documents.forEach(doc => {
        doc.addEventListener('click', function () {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Hiệu ứng cho nút new page
    const newPages = document.querySelectorAll('.newpage1, .newpage2, .newpage3, .newpage4, .newpage5');
    newPages.forEach(newPage => {
        newPage.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            alert('Thêm trang mới!');
        });
    });
});