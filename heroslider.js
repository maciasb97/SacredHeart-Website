export function HeroSlider(){
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Initialize the slider
    function initSlider() {
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Go to a specific slide
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (index + slideCount) % slideCount;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Reset auto slide timer
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', function() {
        nextSlide();
        resetInterval();
    });
    
    prevBtn.addEventListener('click', function() {
        prevSlide();
        resetInterval();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            goToSlide(index);
            resetInterval();
        });
    });
    
    // Initialize the slider
    initSlider();
}