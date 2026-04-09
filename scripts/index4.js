console.log(studentsInfo);

const btnPrevEl = document.querySelector('.btn-prev');
const btnNextEl = document.querySelector('.btn-next');
const imgCarouselEl = document.querySelector('.img-carousel');

function prevClickHandler() {
    if (currentImageIndex === 0) {
        currentImageIndex = studentsInfo.length - 1;
    } else {
        currentImageIndex--;
    }
    const imgCarouselSrc = studentsInfo[currentImageIndex].image;
    imgCarouselEl.src = imgCarouselSrc;
}

function nextClickHandler() {
    if (currentImageIndex === studentsInfo.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    const imgCarouselSrc = studentsInfo[currentImageIndex].image;
    imgCarouselEl.src = imgCarouselSrc;
}

let currentImageIndex = studentsInfo.length - 1;
const imgCarouselSrc = studentsInfo[currentImageIndex].image;
imgCarouselEl.src = imgCarouselSrc;

btnPrevEl.addEventListener('click', prevClickHandler);
btnNextEl.addEventListener('click', nextClickHandler);
