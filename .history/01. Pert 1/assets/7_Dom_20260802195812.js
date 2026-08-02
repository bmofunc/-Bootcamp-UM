// Validasi popup
// ================================================================================
// Prompt, Alert, Confirm
    
// 1. Popup warning 
// alert("Helo world"); 

// 2. Prompt (Inputan) return value..  
// const nama = prompt("Masukan nama: ");
// alert("Nama saya adalah: " + nama)

// // 3. Confirm (validasi true/false atau confirm/no)
// const result = confirm("Apakah kamu mahasiswa?"); 
// if(result == true) {
//     alert("kamu adalah mahasiswa")
// } else {
//     alert("kamu bukan mahasiswa")
// }
// ================================================================================

// DOM (Document object modeling)
// 1. getElementsByTagName
// 2. getElementsByName
// 3. getElementById
// 4. querySelector
// 5. querySelectorAll

// 1. getElementsByTagName return Array --> index
let judul = document.getElementsByTagName('h1'); 
console.log(judul)
let eljudul = judul[0]; 

// 
console.log(eljudul)
console.log(eljudul.innerHTML)
console.log(eljudul.innerText)