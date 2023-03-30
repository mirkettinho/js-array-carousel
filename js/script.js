
const carouselDiv = document.querySelector(".carousel");

const images = [`img/01.webp`,`img/02.webp`,`img/03.webp`,`img/04.webp`,`img/05.webp`];


for (let i = 0; i < images.length; i++){
    carouselDiv.innerHTML += `<div class="slide"><img src="${images[i]}"></div>`;                                           
}

const allSlides = document.querySelectorAll('.slide');

//  CONTATORE 
let selectedSlide = 0;


allSlides[selectedSlide].classList.add('selected');

const prevArrow = document.querySelector('.previous');
const nextArrow = document.querySelector('.next');

// CLICK RIGHT
nextArrow.addEventListener(`click`,
    function(){
        
        allSlides[selectedSlide].classList.remove('selected');

        selectedSlide++

        allSlides[selectedSlide].classList.add('selected');
    
        if(selectedSlide == allSlides.length -1){
            nextArrow.classList.add('hidden');
        }
        prevArrow.classList.remove('hidden');
    }
);

// CLICK LEFT
prevArrow.addEventListener(`click`,
    function(){
        
        allSlides[selectedSlide].classList.remove('selected');

        selectedSlide--

        allSlides[selectedSlide].classList.add('selected');
    
        if(selectedSlide == 0){
      
            prevArrow.classList.add('hidden');
        }
        
        nextArrow.classList.remove('hidden');
    }
);