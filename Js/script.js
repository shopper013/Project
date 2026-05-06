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
        logo: "../Photo/Logo_MTE.png", 
        title: "สาขาวิชาครุศาสตร์เครื่องกล",
        subtitle: "Mechanical Technology Education",
        images: ["../Photo/MTE3.jpg", "../Photo/MTE2.jpg", "../Photo/MTE4.jpg"],
        description: "หลักสูตรครุศาสตร์อุตสาหกรรมบัณฑิต สาขาวิชาวิศวกรรมเครื่องกล เป็นหลักสูตรที่จัดให้ผู้เรียนมีองค์ความรู้ ทักษะ ทัศนคติ โดยเฉพาะจิตสำ นึกของความเป็นครูช่างด้วยการผสผสานศาสตร์ทางวิชาชีพ การสอนและศาสตร์ทางวิชาชีพวิศวกรรมควบคู่กันไปโดยจัดให้ผู้เรียน เรียนรายวิชพื้นฐานทางวิทยาศาสตร์และรายวิชาทางเทคโนโลยี และถูกบ่มเพาะอย่างเพียงพอเพื่อให้มีคุณธรรม และจริยธรรมในวิชานั้น ผู้เรียนมีความสามารถในการถ่ายทอดและปฏิบัติการสอนวิชาชีพทางวิศวกรรมและเป็นวิทยากรฝึกอบรมใน สถานประกอบการ ด้วยการเลือกใช้กรรมวิธีการสอน/การถ่ายทอด/การฝึกอบรมในสถานศึกษาหรือในโรงงานอุตสาหกรรมได้อย่างเหมาะสม สามารถถ่ายทอดแนวความคิดที่ก่อให้เกิดความสามารถสร้างสรรค์ สามารถคิดเชิงออกแบบ ผลิต พัฒนา และเลือกใช้สื่อการสอนได้อย่างมีประสิทธิภาพแสวงหาเทคโนโลยี สมัยใหม่ซึ่งเชื่อมโยงกับสื่อการสอนต่าง ๆ ตลอดจนการวัดและประเมินผลการสอน/การถ่ายทอด/การฝึกอบรมได้อย่างเป็นระบบรอข้อมูลสาขาวิชา...",
        curriculum: `
            <div class="course-group">
                <span class="course-title">● ปริญญาตรี เทคโนโลยีบัณฑิต (ทล.บ.) 4 ปี</span>
                <ul>
                    <li><i class="fa-solid fa-graduation-cap"></i> สาขาเทคโนโลยีเครื่องกล</li>
                </ul>
            </div>
            <div class="course-group">
                <span class="course-title">● ปริญญาตรี ครุศาสตร์อุตสาหกรรมบัณฑิต (ค.อ.บ.) 5 ปี</span>
                <ul>
                    <li><i class="fa-solid fa-graduation-cap"></i> สาขาครุศาสตร์เครื่องกล</li>
                </ul>
            </div>
            `
    },
    cte: {
        logo: "../Photo/Logo_CTE.png",
        title: "สาขาวิชาครุศาสตร์โยธา",
        subtitle: "Civil Technology Education",
        images: ["../Photo/CTE.png", "../Photo/CTE.png", "../Photo/CTE.png"],
        description: "ทรัพยากรบุคคลที่สำเร็จจากหลักสูตรนี้จะเป็นผู้ที่มีความรู้ความสามารถทางด้านการสอน การถ่ายทอดความรู้ มีทักษะการปฏิบัติงานช่างโยธา และมีความรู้ทางวิศวกรรมโยธา สามารถนำความรู้ไปประยุกต์ใช้กับการประกอบวิชาชีพครู สาขาวิศวกรรมโยธาได้ มีทัศนคติและมีจิตสำนึกที่ดีของความเป็นครูช่าง สามารถที่จะถ่ายทอดความรู้ทั้งภาคทฤษฎีและภาคปฏิบัติให้กับผู้เรียนได้อย่างเป็นระบบ มีความสามารถที่จะค้นคว้าหาความรู้เพิ่มเติมและพัฒนางานวิจัยทางเทคโนโลยีโยธา สามารถที่จะปรับตัวเข้ากับสังคมและสถานการณ์ทั้งปัจจุบันและอนาคตได้",
        curriculum: `
            <div class="course-group">  
                <span class="course-title">● ปริญญาตรี เทคโนโลยีบัณฑิต (ทล.บ.) 4 ปี</span>
                <ul>
                    <li><i class="fa-solid fa-graduation-cap"></i> สาขาเทคโนโลยีโยธา</li>
                </ul>
            </div>
            <div class="course-group">
                <span class="course-title">● ปริญญาตรี ครุศาสตร์อุตสาหกรรมบัณฑิต (ค.อ.บ.) 5 ปี</span>
                <ul>
                    <li><i class="fa-solid fa-graduation-cap"></i> สาขาครุศาสตร์โยธา</li>
                </ul>
            </div>
            `
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
        logo: "../Photo/Logo_PTE.png",
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
        logo: "../Photo/Logo_PPT.png",
        title: "สาขาวิชาเทคโนโลยีการพิมพ์และบรรจุภัณฑ์",
        subtitle: "Printing and Packaging Technology",
        images: ["../Photo/PPT.png", "../Photo/PPT.png", "../Photo/PPT.png"],
        description: "รอข้อมูลสาขาวิชา...",
        curriculum: `<div class="course-group"><span class="course-title">● รอข้อมูลหลักสูตร</span></div>`
    },
    cmm: {
        logo: "../Photo/Logo_CMM.png",
        title: "สาขาวิชาวิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย",
        subtitle: "Computer and Multimedia",
        images: ["../Photo/cmm.png", "../Photo/cmm.png", "../Photo/cmm.png"],
        description: "รอข้อมูลสาขาวิชา...",
        curriculum: `<div class="course-group"><span class="course-title">● รอข้อมูลหลักสูตร</span></div>`
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
//                           SIDEBAR SLIDING INDICATOR
// ===============================================================
document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector('.sidebar-menu');
    const indicator = document.querySelector('.active-indicator');
    if (!sidebar || !indicator) return;

    const activeItem = sidebar.querySelector('li.active');

    function moveIndicator(element) {
        if (!element) return;
        const top = element.offsetTop;
        const height = element.offsetHeight;
        indicator.style.display = 'block';
        indicator.style.height = `${height}px`;
        indicator.style.transform = `translateY(${top}px)`;
    }

    moveIndicator(activeItem);

    const menuItems = sidebar.querySelectorAll('li:not(.divider)');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            moveIndicator(this);
        });
    });
});

// ===============================================================
//                           MAJOR MODAL
// ===============================================================
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
// ===============================================================
//                    ADMIN BUILD ACTIVITY PAGE
// ===============================================================
if (document.getElementById('majorDropdown')) {

/* ── Tab switching ── */
function switchTab(id, btn) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
}

/* ── Checklist Dropdown toggle ── */
function toggleChecklist() {
    const trigger = document.getElementById('majorTrigger');
    const panel   = document.getElementById('majorPanel');
    const isOpen  = panel.classList.contains('open');
    panel.classList.toggle('open', !isOpen);
    trigger.classList.toggle('open', !isOpen);
}

/* ── Update trigger label + re-render section cards ── */
function updateMajors() {
    const checks = document.querySelectorAll('#majorPanel input[type="checkbox"]:checked');
    const names  = Array.from(checks).map(c => c.value);

    const triggerText = document.getElementById('majorTriggerText');
    triggerText.textContent = names.length === 0
        ? '-- เลือกสาขาวิชา --'
        : `เลือกแล้ว ${names.length} สาขา`;

    renderMajorSections(names);
}

/* ── Render one form-card per selected major ── */
function renderMajorSections(names) {
    const container = document.getElementById('majorSectionsContainer');
    container.innerHTML = '';

    names.forEach((majorName, idx) => {
        const uid  = 'major_' + idx;
        const card = document.createElement('div');
        card.className = 'form-card';
        card.setAttribute('data-major', majorName);
        card.innerHTML = `
            <div class="form-card-title">ข้อมูลกิจกรรม ${majorName}</div>

            <div class="field-row full mb-16">
                <div class="field-group">
                    <label>ชื่อกิจกรรม <span class="req">*</span></label>
                    <input type="text" name="name_${uid}" placeholder="ชื่อกิจกรรมสำหรับ ${majorName}">
                </div>
            </div>
            <div class="field-row three mb-16">
                <div class="field-group">
                    <label>จำนวนที่รับสูงสุด <span class="req">*</span></label>
                    <input type="number" name="quota_${uid}" placeholder="เช่น 100" min="1">
                </div>
                <div class="field-group">
                    <label>วันที่เริ่ม <span class="req">*</span></label>
                    <input type="date" name="start_${uid}">
                </div>
                <div class="field-group">
                    <label>วันที่สิ้นสุด <span class="req">*</span></label>
                    <input type="date" name="end_${uid}">
                </div>
            </div>
            <div class="field-row full mb-16">
                <div class="field-group">
                    <label>สถานที่ <span class="req">*</span></label>
                    <input type="text" name="place_${uid}" placeholder="เช่น ตึก S13 ห้อง 301">
                </div>
            </div>
            <div class="field-row full mb-16">
                <div class="field-group">
                    <label>อาจารย์ผู้รับผิดชอบ <span class="req">*</span></label>
                    <input type="text" name="teacher_${uid}" placeholder="ชื่ออาจารย์ผู้รับผิดชอบ">
                </div>
            </div>
            <div class="field-row full mb-16">
                <div class="field-group">
                    <label>รายละเอียดกิจกรรม</label>
                    <textarea name="desc_${uid}" placeholder="อธิบายรายละเอียดกิจกรรม (ไม่บังคับ)" style="min-height:80px;"></textarea>
                </div>
            </div>
            <div class="field-row full">
                <div class="field-group">
                    <label>รูปภาพกิจกรรม <span class="req">*</span></label>
                    <label class="upload-box" for="img_${uid}">
                        <input type="file" id="img_${uid}" accept="image/*" onchange="previewImage(this)">
                        <i class='bx bx-image-add'></i>
                        <p>คลิกเพื่ออัปโหลดรูปภาพ</p>
                        <span>PNG, JPG, WEBP สูงสุด 5MB</span>
                    </label>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

/* ── Image preview for dynamic upload boxes ── */
function previewImage(input) {
    const box = input.closest('.upload-box');
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
            box.innerHTML = `<img src="${e.target.result}" style="max-height:160px; border-radius:8px; object-fit:cover; width:100%;">`;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

/* ── Close checklist panel when clicking outside ── */
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('majorDropdown');
    if (dropdown && !dropdown.contains(e.target)) {
        document.getElementById('majorPanel').classList.remove('open');
        document.getElementById('majorTrigger').classList.remove('open');
    }
});
} // end AdminBuild guard
