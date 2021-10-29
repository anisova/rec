const slider = document.querySelector('.slider-container');
let mySwiper;
function mobileSlider() {
	if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 2,
			spaceBetween: 10,
			loop: true,
			slideClass: 'amba__card',	
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },  

		});
		slider.dataset.mobile = 'true';
	}
	if (window.innerWidth > 600) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}
mobileSlider()
window.addEventListener('resize', () => {
	mobileSlider();
});



const swiper = new Swiper('.slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slideToClickedSlide: true,
    slidesPerView: 2,
    spaceBetween: 30,
    slideClass:'slide',
    wrapperClass:'slider__wrap',    
    
    // If we need pagination   
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },  
    
  });

const swiperPrev = document.querySelector('.swiper-button-next1');
const swiperNext = document.querySelector('.swiper-button-prev1');
swiperPrev.addEventListener('click', () => {
  swiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
  swiper.slideNext();
})