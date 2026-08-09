// alert("Helo")

const i_username = document.querySelector('.c_username'); 
const i_password = document.querySelector('.c_password'); 
const i_login = document.querySelector('.c_login'); 

console.log(i_username)
console.log(i_password)
console.log(i_login)
i_login.addEventListener('click', function(e) {
    // 1. Mencegah form reload bawaan browser (kalau button ada di dalam <form>)
    e.preventDefault(); 

    let ius = i_username.value; 
    let ips = i_password.value; 

    // ADMIN
    if(ius === "ADMIN" && ips === "ADMIN1234") {
        alert("Login Berhasil");
        // 2. Tulis URL dengan benar (tanpa tanda tanya '?')
        window.location.href = "dashboard.html"; 
    } 
    // USER (Catatan: di kode awalmu 'USEr' huruf 'r'-nya kecil, disesuaikan)
    else if(ius === "USER" && ips === "USER1234") {
        alert("Login Berhasil");
        window.location.href = "dashboard.html";
    }
    else {
        alert("Username/Password Invalid");
    }
});
