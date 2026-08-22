const moviesCardList = (isdetailshow) => {
    let topTenEl = ``;
        
    if(isdetailshow) {
        topTenEl = `<span class="topten">TOP <br> 10</span>`; 
    }

    return `<div class="swiper-slide">
                        <div class="movie-card">
                            ${topTenEl}
                            <span class="recents">Recently Added</span>
                        </div>
                  </div>`; 
}


const moviesContainer = document.getElementById('moviesContainer'); 
let elements = ""; 

for(let i=0; i<10; i++) {
  let result = i % 2 == 0; 
  console.log(result)
  elements = elements + moviesCardList(result);  
}

moviesContainer.insertAdjacentHTML('afterbegin', elements); 



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


const closepopupmovies = document.querySelector('#closepopupmovies'); 
const cardMovies    = document.querySelectorAll('.swiper-slide')
const popupmovies    = document.querySelector('.popup-movies')

cardMovies.forEach(item => {
  item.addEventListener('click', function(e) {
      console.log("Kamu mencet card"); 
      // menampilkan popup 
      popupmovies.classList.remove('hide'); 
  })
})


closepopupmovies.addEventListener('click', function(e) {
     popupmovies.classList.add('hide'); 
})




// Video player 
const video = document.querySelector('video'); 
const videoBtn = document.querySelector("#playBtn"); 
const progress = document.querySelector('#progressBar'); 
const timer    = document.querySelector('#timeDisplay'); 

console.log(video); 
console.log(videoBtn); 
console.log(progress); 
console.log(timer); 

videoBtn.addEventListener('click', function(e) {
    // video.play(); 
    if(video.paused) {
        video.play(); 
        videoBtn.innerHTML = "⏸️  Pause"; 
    } else {
        video.pause(); 
        videoBtn.innerHTML = "▶️ Play";
    }
})

progress.addEventListener('input', function(e) {
    const durasi = (progress.ariaValueMax / 100) * video.duration; 
    video.curren
})