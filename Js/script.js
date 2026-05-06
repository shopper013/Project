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

// ===============================================================
//                           MAJOR MODAL (DYNAMIC DATA)
// ===============================================================

const majorData = {
    mte: {
        logo: "../Photo/MTE.png", // ใส่โลโก้จริงๆ ถ้ายมี
        title: "สาขาวิชาครุศาสตร์เครื่องกล",
        subtitle: "Mechanical Technology Education",
        images: ["../Photo/MTE.png", "../Photo/MTE.png", "../Photo/MTE.png"],
        description: "รอข้อมูลสาขาวิชา...",
        curriculum: `<div class="course-group"><span class="course-title">● รอข้อมูลหลักสูตร</span></div>`
    },
    cte: {
        logo: "../Photo/CTE.png",
        title: "สาขาวิชาครุศาสตร์โยธา",
        subtitle: "Civil Technology Education",
        images: ["../Photo/CTE.png", "../Photo/CTE.png", "../Photo/CTE.png"],
        description: "รอข้อมูลสาขาวิชา...",
        curriculum: `<div class="course-group"><span class="course-title">● รอข้อมูลหลักสูตร</span></div>`
    },
    ete: {
        logo: "../Photo/logo_ETE.png",
        title: "สาขาวิชาครุศาสตร์ไฟฟ้า",
        subtitle: "Electrical Technology Education",
        images: ["../Photo/ETE.png", "../Photo/ETE2.png", "../Photo/ETE1.png"],
        description: "หลักสูตรมุ่งผลิตครูผู้สอนสายวิศวกรรม และนักฝึกอบรมในภาคอุตสาหกรรม ที่มีความรู้ ความสามารถและความเชี่ยวชาญ ทั้งด้านทฤษฎีและปฏิบัติ โดยเน้นความเข้มแข็งทางวิศวกรรมไฟฟ้าในสาขาวิชาไฟฟ้ากำลัง สาขาอิเล็กทรอนิกส์ และสาขาคอมพิวเตอร์ บัณฑิตจะได้รับการพัฒนาให้มีทักษะด้านการสอนและการถ่ายทอดความรู้อย่างเป็นระบบ สามารถออกแบบการเรียนรู้ทั้งภาคทฤษฎีและภาคปฏิบัติได้อย่างมีประสิทธิภาพ พร้อมทั้งมีทัศนคติที่ดีและจิตสำนึกแห่งความเป็นครู",
        curriculum: `
            <div class="course-group">
                <span class="course-title">● ปริญญาตรี เทคโนโลยีบัณฑิต (ทล.บ.) 4 ปี</span>
                <ul>
                    <li><i class="fa-solid fa-graduation-cap"></i> สาขาเทคโนโลยีไฟฟ้า</li>
                </ul>
            </div>
            <div class="course-group">
                <span class="course-title">● ปริญญาตรี ครุศาสตร์อุตสาหกรรมบัณฑิต (ค.อ.บ.) 5 ปี</span>
                <ul>
                    <li><i class="fa-solid fa-graduation-cap"></i> สาขาครุศาสตร์ไฟฟ้า (เอกไฟฟ้ากำลัง)</li>
                    <li><i class="fa-solid fa-graduation-cap"></i> สาขาครุศาสตร์ไฟฟ้า (เอกคอมพิวเตอร์)</li>
                    <li><i class="fa-solid fa-graduation-cap"></i> สาขาครุศาสตร์ไฟฟ้า (เอกอิเล็กทรอนิกส์ระบบอัจฉริยะ)</li>
                </ul>
            </div>
        `
    },
    pte: {
        logo: "../Photo/PTE.png",
        title: "สาขาวิชาครุศาสตร์อุตสาหกรรม",
        subtitle: "Production Technology Education",
        images: ["../Photo/PTE.png", "../Photo/PTE.png", "../Photo/PTE.png"],
        description: "รอข้อมูลสาขาวิชา...",
        curriculum: `<div class="course-group"><span class="course-title">● รอข้อมูลหลักสูตร</span></div>`
    },
    ect: {
        logo: "../Photo/ECT.png",
        title: "สาขาวิชาเทคโนโลยีการศึกษาและสื่อสารมวลชน",
        subtitle: "Educational Communications and Technology",
        images: ["../Photo/ECT.png", "../Photo/ECT.png", "../Photo/ECT.png"],
        description: "รอข้อมูลสาขาวิชา...",
        curriculum: `<div class="course-group"><span class="course-title">● รอข้อมูลหลักสูตร</span></div>`
    },
    ppt: {
        logo: "../Photo/PPT.png",
        title: "สาขาวิชาเทคโนโลยีการพิมพ์และบรรจุภัณฑ์",
        subtitle: "Printing and Packaging Technology",
        images: ["../Photo/PPT.png", "../Photo/PPT.png", "../Photo/PPT.png"],
        description: "รอข้อมูลสาขาวิชา...",
        curriculum: `<div class="course-group"><span class="course-title">● รอข้อมูลหลักสูตร</span></div>`
    },
    cmm: {
        logo: "../Photo/cmm.png",
        title: "สาขาวิชาวิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย",
        subtitle: "Computer and Multimedia",
        images: ["../Photo/cmm.png", "../Photo/cmm.png", "../Photo/cmm.png"],
        description: "รอข้อมูลสาขาวิชา...",
        curriculum: `<div class="course-group"><span class="course-title">● รอข้อมูลหลักสูตร</span></div>`
    }
};

function openMajorModal(majorKey) {
    const data = majorData[majorKey];
    if (!data) return;

    // Inject data into HTML elements
    document.getElementById('modal-logo').src = data.logo;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;
    
    document.getElementById('modal-img-1').src = data.images[0];
    document.getElementById('modal-img-2').src = data.images[1];
    document.getElementById('modal-img-3').src = data.images[2];
    
    document.getElementById('modal-description').textContent = data.description;
    document.getElementById('modal-curriculum').innerHTML = data.curriculum;

    // Show modal
    const modal = document.getElementById('major-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeMajorModal() {
    const modal = document.getElementById('major-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scrolling
    }
}

// Close modal when clicking outside of the modal container
document.addEventListener('click', function(e) {
    if (e.target.id === 'major-modal') {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===============================================================
//                           ACTIVITY MODAL (DYNAMIC DATA)
// ===============================================================

const activityData = {
    workshop2: {
        banner: "../Photo/seriesworkshop2.png",
        title: "FIET SERIES WORKSHOP SEASON 2",
        subtitle: "สาขาวิชาที่เปิดรับสมัคร",
        workshops: `
            <!-- Card 1: โยธา -->
            <div class="workshop-card">
                <div class="card-image">
                    <img src="../Photo/CTE.png" alt="โยธา">
                </div>
                <div class="card-body">
                    <div class="workshop-tag">โยธา</div>
                    <h3 class="workshop-name">กิจกรรม เขียนแบบกันไหมจ๊ะคนดี</h3>
                    <div class="workshop-info">
                        <div class="info-item">
                            <i class="fa-regular fa-calendar"></i>
                            <span>28 มีนาคม 2570</span>
                        </div>
                        <div class="info-item">
                            <i class="fa-solid fa-location-dot"></i>
                            <span>คณะศรุศาสตร์อุตสาหกรรมและเทคโนโลยี S13 ชั้น 3</span>
                        </div>
                    </div>
                    <button class="register-btn-workshop" onclick="">สมัคร</button>
                </div>
            </div>

            <!-- Card 2: เครื่องกล -->
            <div class="workshop-card">
                <div class="card-image">
                    <img src="../Photo/MTE.png" alt="เครื่องกล">
                </div>
                <div class="card-body">
                    <div class="workshop-tag">เครื่องกล</div>
                    <h3 class="workshop-name">กิจกรรม EV&Battery หมุดหมายแห่งอนาคต</h3>
                    <div class="workshop-info">
                        <div class="info-item">
                            <i class="fa-regular fa-calendar"></i>
                            <span>28 มีนาคม 2570</span>
                        </div>
                        <div class="info-item">
                            <i class="fa-solid fa-location-dot"></i>
                            <span>คณะศรุศาสตร์อุตสาหกรรมและเทคโนโลยี S13 ชั้น 4</span>
                        </div>
                    </div>
                    <button class="register-btn-workshop" onclick="">สมัคร</button>
                </div>
            </div>
        `
    },
    fietland: {
        banner: "../Photo/fiteland.png",
        title: "กิจกรรม FIET LAND",
        subtitle: "ดินแดนแห่งการเรียนรู้",
        workshops: `
            <div style="text-align: center; padding: 20px; width: 100%;">
                <p>รออัปเดตกิจกรรมย่อย...</p>
            </div>
        `
    }
};

function openActivityModal(activityKey) {
    const data = activityData[activityKey];
    if (!data) return;

    document.getElementById('activity-modal-banner').src = data.banner;
    document.getElementById('activity-modal-title').textContent = data.title;
    document.getElementById('activity-modal-subtitle').textContent = data.subtitle;
    document.getElementById('activity-modal-workshops').innerHTML = data.workshops;

    const modal = document.getElementById('activity-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeActivityModal() {
    const modal = document.getElementById('activity-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('click', function(e) {
    if (e.target.id === 'activity-modal') {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===============================================================
//                           ADMIN SIDEBAR TOGGLE
// ===============================================================

const menuToggle = document.querySelector('.menu-toggle');
const adminSidebar = document.querySelector('.admin-sidebar');

if (menuToggle && adminSidebar) {
    menuToggle.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            // Mobile: Slide in/out
            adminSidebar.classList.toggle('active');
        } else {
            // Desktop: Collapse/Expand
            adminSidebar.classList.toggle('collapsed');
        }
    });

    // Close sidebar on mobile when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!adminSidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                adminSidebar.classList.remove('active');
            }
        }
    });
}

// ===============================================================
//                           SMOOTH PAGE TRANSITIONS
// ===============================================================

const transitionLinks = document.querySelectorAll('.sidebar-menu a, .quick-cards a');
const adminContent = document.querySelector('.admin-content');

if (transitionLinks.length > 0 && adminContent) {
    transitionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetUrl = this.getAttribute('href');
            
            // Proceed only if it's an internal HTML link and not a "#" link
            if (targetUrl && targetUrl !== '#' && targetUrl.endsWith('.html')) {
                // Add fade-out animation
                adminContent.classList.add('fade-out');
                
                // Move active class immediately to show visual feedback
                const parentLi = this.parentElement;
                if (parentLi && parentLi.tagName === 'LI') {
                    document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
                    parentLi.classList.add('active');
                    
                    // Move the indicator
                    if (typeof moveSidebarIndicator === 'function') {
                        moveSidebarIndicator(parentLi);
                    }
                }
                
                // Wait for animation to finish before navigating
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 250); // Matches CSS transition duration slightly less
            }
        });
    });
}

// ===============================================================
//                           SIDEBAR SLIDING INDICATOR
// ===============================================================