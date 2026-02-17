// الانتظار حتى يتم تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {

    // 1. إضافة تأثير صوتي بسيط عند مرور الماوس على الأزرار (اختياري)
    const buttons = document.querySelectorAll('.ps-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            console.log("User is hovering over: " + button.innerText);
            // هنا يمكنك إضافة صوت "Click" خفيف إذا أردت
        });

        button.addEventListener('click', (e) => {
            // تأثير نبضي (Ripple Effect) عند الضغط
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            button.appendChild(ripples);

            setTimeout(() => {
                ripples.remove();
            }, 1000);
        });
    });

    // 2. رسالة ترحيبية في "الكونسول" لمطوري الهكر (حركة احترافية)
    console.log("%c ALZAEEM PS4 SITE ", "color: #00aaff; font-size: 30px; font-weight: bold; text-shadow: 2px 2px 5px #000;");
    console.log("Welcome to the jailbreak community!");

    // 3. وظيفة لجعل أيقونات التواصل الاجتماعي تفتح في نافذة جديدة
    const socialLinks = document.querySelectorAll('.social-footer a');
    socialLinks.forEach(link => {
        link.setAttribute('target', '_blank');
    });

});

// 4. وظيفة للتنقل بين الأقسام بسلاسة (Smooth Scroll)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
