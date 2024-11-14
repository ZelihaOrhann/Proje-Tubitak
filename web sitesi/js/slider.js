function nextSlide(button) {
    const card = button.parentElement;
    const slider = card.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    const imgWidth = images[0].clientWidth;
    const currentTransform = getComputedStyle(slider).transform;
    let translateX = new WebKitCSSMatrix(currentTransform).m41;

    if (Math.abs(translateX) < imgWidth * (images.length - 1)) {
        slider.style.transform = `translateX(${translateX - imgWidth}px)`;
    } else {
        slider.style.transform = 'translateX(0)';
    }
}

function prevSlide(button) {
    const card = button.parentElement;
    const slider = card.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    const imgWidth = images[0].clientWidth;
    const currentTransform = getComputedStyle(slider).transform;
    let translateX = new WebKitCSSMatrix(currentTransform).m41;

    if (translateX < 0) {
        slider.style.transform = `translateX(${translateX + imgWidth}px)`;
    } else {
        slider.style.transform = `translateX(${-(imgWidth * (images.length - 1))}px)`;
    }
}
