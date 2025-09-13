// church-website/src/scripts/app.js 內容
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel3d');
    if (carousel) {
        const imgs = carousel.querySelectorAll('img');
        const total = imgs.length;
        let curr = 0;

        function updateCarousel() {
            const angle = 360 / total;
            imgs.forEach((img, i) => {
                // 讓每張圖根據目前 carousel 旋轉，正中央的圖會正對前方
                const imgAngle = angle * (i - curr);
                img.style.transform = `rotateY(${imgAngle}deg) translateZ(500px) rotateY(${-imgAngle}deg)`;
                img.classList.toggle('active', i === curr);
            });
        }

        updateCarousel();
        setInterval(() => {
            curr = (curr + 1) % total;
            updateCarousel();
        }, 3000);
    }
});
