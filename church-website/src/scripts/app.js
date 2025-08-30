document.addEventListener('DOMContentLoaded', () => {

    const slideshowImages = [
        "assets/IMG_1563.JPG",
        "assets/IMG_1564.JPG",
        "assets/IMG_1565.JPG"
    ];
    let slideshowIndex = 0;
    const slideshowDiv = document.querySelector('.background-slideshow');
    function showNextSlide() {
        slideshowDiv.style.backgroundImage = `url('${slideshowImages[slideshowIndex]}')`;
        slideshowIndex = (slideshowIndex + 1) % slideshowImages.length;
    }
    if (slideshowDiv) {
    showNextSlide();
    setInterval(showNextSlide, 5000);
    }
});