// ===============================================================
//                           LOGIN
// ===============================================================


const container = document.getElementById('container');
const officer = document.getElementById('officer');
const student = document.getElementById('student');


if (officer) {
    officer.addEventListener('click', () => {
        if (container) container.classList.toggle("active");
    });
}

if (student) {
    student.addEventListener('click', () => {
        if (container) container.classList.toggle("active");
    });
}

const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#passwordInput');
if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text': 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
}

// ===============================================================
//                           REGISTER
// ===============================================================

function submitForm(event) {
            event.preventDefault();

            Swal.fire({
                title: 'ลงทะเบียนสำเร็จ!',
                text: 'ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว',
                icon: 'success',
                confirmButtonText: 'ตกลง',
                confirmButtonColor: '#70D0F4',
                allowOutsideClick: false 
            }).then((result) => {
                // เมื่อผู้ใช้กดปุ่ม "ตกลง"
                if (result.isConfirmed) {
                    if (window.opener) {
                    }

                    window.close();
                }
            });
        }

function goLogin(event) {
    event.preventDefault(); // ป้องกันไม่ให้หน้าเว็บกระตุกไปบนสุดเพราะ href="#"
    
    // ลองสั่งปิดหน้าต่างดูก่อน
    window.close();
    
    // ถ้าเบราว์เซอร์ไม่ยอมปิดแท็บ ให้พาผู้ใช้กลับไปที่หน้าเข้าสู่ระบบอัตโนมัติ
    window.location.href = "Activity_FIET_Webpage.html";
}

// ===============================================================
//                           FORMAT
// ===============================================================

function formatIDCard(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 13) value = value.slice(0, 13);

    let formatted = '';
    
    if (value.length > 0) {
        formatted += value.substring(0, 1);
    }
    if (value.length > 1) {
        formatted += '-' + value.substring(1, 5);
    }
    if (value.length > 5) {
        formatted += '-' + value.substring(5, 10);
    }
    if (value.length > 10) {
        formatted += '-' + value.substring(10, 12);
    }
    if (value.length > 12) {
        formatted += '-' + value.substring(12, 13);
    }

    input.value = formatted;
}

function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 10) value = value.slice(0, 10);

    let formatted = '';
    
    if (value.length > 0) {
        formatted = value.substring(0, 3);
    }
    if (value.length > 3) {
        formatted += '-' + value.substring(3, 6);
    }
    if (value.length > 6) {
        formatted += '-' + value.substring(6, 10);
    }

    input.value = formatted;
}

// ===============================================================
//                           HOMEPAGE SIDEBAR
// ===============================================================

const profileMenuBtn = document.getElementById('profileMenuBtn');
const profileSidebar = document.getElementById('profileSidebar');

if (profileMenuBtn && profileSidebar) {
    // Toggle Sidebar on Click
    profileMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        profileSidebar.classList.toggle('show');
    });

    // Close sidebar if clicked outside of it
    document.addEventListener('click', function(e) {
        const container = document.querySelector('.profile-dropdown-container');
        if (container && !container.contains(e.target)) {
            profileSidebar.classList.remove('show');
        }
    });
}