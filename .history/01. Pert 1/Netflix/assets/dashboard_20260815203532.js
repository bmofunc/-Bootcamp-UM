const moviesCardList = () => {
    return `<div class="swiper-slide">
                        <div class="movie-card">
                            <span class="topten">
                                TOP <br> 10
                            </span>
                            <span class="recents">Recently Added</span>
                        </div>
                    </div>`; 
}


const moviesContainer = document.getElementById('moviesContainer'); 
moviesContainer.insertAdjacentHTML('afterbegin', moviesCardList()); 



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 6, 
  spaceBetween: 30, 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 2000,
  },
});