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

const moviesCardList2 = (dataapi) => {
    // console.log(dataapi)
    let judul = dataapi.show.name; 
    let id     = dataapi.show.id; 
    let topten = "";
    if(dataapi.show.network) {
        topten = `<span class="topten">${dataapi.show.network.name}</span>`;
    } 

    let gambar = dataapi.show.image.medium; 
  
  return `<div class="swiper-slide" data-idfilmku="${id}">
                        <div class="movie-card" style="background-image:url('${gambar}')">
                            ${topten}
                            <span class="recents">Recently Added</span>
                        </div>
                  </div>`; 

        

}


const moviesContainer = document.getElementById('moviesContainer'); 
let elements = ""; 

 
const closepopupmovies = document.querySelector('#closepopupmovies'); 
// const cardMovies    = document.querySelectorAll('.swiper-slide')
const popupmovies    = document.querySelector('.popup-movies')

// cardMovies.forEach(item => {
//   item.addEventListener('click', function(e) {
//     //   console.log("Kamu mencet card"); 
//       // menampilkan popup 
//       popupmovies.classList.remove('hide'); 
//   })
// })


// Event Bubbling  (element yg membutuhkan pengambilan data yg cukup lama)
document.addEventListener('click', async function(e) { // input 
    // console.log("kesini"); 
    let element = e.target; 
    console.log(element)
    if(element.classList.contains('swiper-slide')) {
        popupmovies.classList.remove('hide'); 
        let id = element.dataset.idfilmku; 
        let link = `https://api.tvmaze.com/shows/${id}`;     
        let detail_film = await getDataAPI(link); 
        let title = detail_film.name; 
        let description = detail_film.summary; 
        let image = detail_film.image.original; 
        
        // memperkecil ruang lingkup 
        let popup_judul = popupmovies.querySelector('h1'); 
        let popup_description = popupmovies.querySelector('.descriptions p'); 
        let popup_detail = popupmovies.querySelector('.detail'); 

        console.log(popup_judul); 
        console.log(popup_description); 
        console.log(popup_detail); 

        popup_judul.innerHTML = title; 
        popup_description.innerHTML = description; 
        
    }

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
    const durasi = (progress.value / 100) * video.duration; 
    video.currentTime = durasi; 
})

video.addEventListener('timeupdate', function(e) {
    let currTime = video.currentTime; 
    let duration = video.duration; 
    let percenta = (currTime/duration) * 100; 
    progress.style.background = `linear-gradient(to right, red ${percenta}%, silver 0%)`; 
    timer.innerHTML = `${formatDetik(currTime)} / ${formatDetik(duration)}`; 
})

function formatDetik(value) {
    const menit = Math.floor(value / 60); 
    const detik = Math.floor(value % 60); 
    return `${menit}:${detik < 10 ? '0' : ''}${detik}`; 
}


const closeVideo = document.querySelector('.closeVideo'); 
const playerContainer = document.querySelector('.player-container'); 
const playvideocontainer = document.querySelectorAll('.playvideocontainer'); 

playvideocontainer.forEach(item => {
  item.addEventListener('click', function(e) {
      playerContainer.classList.remove('hide'); 
      popupmovies.classList.add('hide'); 
  })
})



closeVideo.addEventListener('click', function(e) {
    playerContainer.classList.add('hide'); 
    video.pause(); 
})



// API 

async function getDataAPI(url) {
  const response = await fetch(url)
  if(response.status == 200) {
      const json = response.json(); 
      return json; 
  }
  return []; 
}

let global_url = "https://api.tvmaze.com/search/shows?q=girls"; 
let api_data = []; 
window.onload = async function(e) {
   api_data  = await getDataAPI(global_url); 
   console.log(api_data)
   
   // Cara Baru 
   if(api_data.length > 0) {
      let elements = api_data.map(item => moviesCardList2(item)).join('');  
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


 
   }
}



// Cara Lama 
// for(let i=0; i<10; i++) {
//   let result = i % 2 == 0; 
//   console.log(result)
//   elements = elements + moviesCardList(result);  
// }

// moviesContainer.insertAdjacentHTML('afterbegin', elements);






