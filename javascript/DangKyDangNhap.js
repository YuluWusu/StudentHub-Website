const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click',()=>
{
    container.classList.add('active');
})

loginBtn.addEventListener('click',()=>{
    container.classList.remove('active');
})

function dangNhap() {
  const username = document.getElementById('tendangnhap').value.trim();
  const password = document.getElementById('matkhau').value.trim();

 if (username === "" || password === "") {
  Swal.fire({
    icon: 'warning',
    title: 'Thiếu thông tin',
    text: 'Vui lòng nhập đầy đủ Tên đăng nhập và Mật khẩu!',
    confirmButtonText: 'Đã hiểu'
  });
  return;
}

  window.location.href = "Trangchu.html";
}

function dangKy(event) {
    event.preventDefault();

    const username = document.getElementById('tendangky').value.trim();
    const email = document.getElementById('emaildangky').value.trim();
    const password = document.getElementById('matkhaudangky').value.trim();

    if (username === "" || email === "" || password === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Thiếu thông tin',
            text: 'Vui lòng nhập đầy đủ Tên đăng nhập, Email và Mật khẩu!',
            confirmButtonText: 'Đã hiểu'
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Đăng ký thành công!',
        text: 'Bạn có thể đăng nhập ngay bây giờ.',
        confirmButtonText: 'Đăng nhập'
    }).then(() => {
        container.classList.remove('active');
    });
}

function quenMatKhau() {
    Swal.fire(
    {
        icon: 'info',
        title: 'Quên mật khẩu?',
        html: `
            <p>Vui lòng nhập email của bạn để đặt lại mật khẩu.</p>
            <input type="email" id="emailQuenMatKhau" class="swal2-input" placeholder="Nhập email của bạn">
        `,
        confirmButtonText: 'Gửi liên kết đặt lại',
        focusConfirm: false,
        preConfirm: () => 
        {
            const email = document.getElementById('emailQuenMatKhau').value.trim();
            if (email === "") 
            {
                Swal.showValidationMessage('Vui lòng nhập email!');
                return false;
            }
            return email;
        }
    })
    .then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Đã gửi!',
                text: 'Liên kết đặt lại mật khẩu đã được gửi tới email của bạn.',
                confirmButtonText: 'Đã hiểu'
            });
        }
    });
}
