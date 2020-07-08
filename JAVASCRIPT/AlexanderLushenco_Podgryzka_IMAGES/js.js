const images = document.querySelectorAll('img');


const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}


function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        console.log(myImgSingle.intersectionRatio);
        if (myImgSingle.intersectionRatio > 0) {
            loadImage(myImgSingle.target);
        }
    });
}

function loadImage(image) {
    image.src = image.getAttribute('data');
}

const observer = new IntersectionObserver(handleImg, options);


images.forEach(img => {
    observer.observe(img);
});