//global variables
let carousel = document.querySelectorAll(".carousel__card");
let carouselArrowLeft = document.querySelector(".carousel__arrow--left");
let carouselArrowRight = document.querySelector(".carousel__arrow--right");
let carouselCurrent = 0;

//carousel
carouselReset = () => {
    for (let i = 0; i < carousel.length; i++) {
        carousel[i].style.display = "none";
    }
}

carouselStartSlide = () => {
    carouselReset();
    carousel[0].style.display = "block";
}

carouselSlideLeft = () => {
    carouselReset();
    carousel[carouselCurrent - 1].style.display = "block";
    carouselCurrent--;
}

carouselSlideRight = () => {
    carouselReset();
    carousel[carouselCurrent + 1].style.display = "block";
    carouselCurrent++;
}

carouselArrowLeft.addEventListener("click", () => {
    if (carouselCurrent === 0) {
        carouselCurrent = carousel.length;
    }
    carouselSlideLeft();
});

carouselArrowRight.addEventListener("click", () => {
    if (carouselCurrent === carousel.length - 1) {
        carouselCurrent = -1;
    }
    carouselSlideRight();
});

carouselSlideAuto = () => {
    carouselReset();
    carousel[carouselCurrent + 1].style.display = "block";
    carouselCurrent++;
}

setInterval(() => {
    if (carouselCurrent === carousel.length - 1) {
        carouselCurrent = -1;
    }
    carouselSlideRight();
}, "4000");

carouselStartSlide();

// mobile nav sidebar
openNav = () => {
    document.getElementById("myNav").style.width = "200px";
}

closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
}

// animated navbar item underline
slidebar = (e) => {
    let element = e.target;
    let mouse = e.offsetX;
    let fullWidth = e.target.offsetWidth;
    let midWidth = (fullWidth / 2);
    if (mouse < midWidth) {
        element.classList.add('to-right');
        element.classList.remove('to-left');
    } else {
        element.classList.remove('to-right');
        element.classList.add('to-left');
    }
}

// trending carousel on mobile infinite animation copy
let trendingCardWrapper = document.querySelector(".trending__card--wrapper").cloneNode(true);
let trending = document.querySelector(".trending__card--carousel").appendChild(trendingCardWrapper);
