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

// HTML Collection tidak support foreach/map dll -> harus convert 
// Nodelist sudah support foreach/map dll 


// 1. getElementsByTagName return Array --> index
let cara1 = document.getElementsByTagName('h1'); 
// let eljudul = cara1[0]; 
// cara1 = Array.from(cara1); 
// cara1.forEach(item => console.log(item.innerText))
for(let i=0; i<cara1.length; i++) {
    // console.log(cara1[i].innerText);     
}


// 2. getElementsByName return Array --> Index
let cara2 = document.getElementsByName('ini_name_judul')
// console.log(cara2[0])
// cara2.forEach(item => console.log(item.innerText))

// 3. getElementById return tag nya / value nya 
let cara3 = document.getElementById('ini_id_judul2'); 
// console.log(cara3); 



// Recommended
// 4. querySelector -> css -> return tag nya / value nya 
let cara4 = document.querySelector('.ini_class_judul'); 
// console.log(cara4); 

// 5. querySelectorAll -> css -> return array -> index 
let cara5 = document.querySelectorAll('.ini_class_judul'); 
// console.log(cara5[0])
// cara5.forEach(item => console.log(item.innerText))
















const boxs = document.querySelectorAll('.box')
let box2 = boxs[1]; 
console.log(box2.innerHTML)
console.log(box2.innerText)
console.log(box2.dataset.jurusan)

// set attribute
let box1 = boxs[0]; 
box1.setAttribute("data-hapeku", "iphone 17 pro max"); 
box1.setAttribute("data-motorku", "beat karbu"); 
console.log(box1.dataset.hapeku)

// get attribute 
console.log(box1.getAttribute("src"))


// class
box1.classList.add('buscemi');
box1.classList.remove('naruto');  
let apakah_ada = box1.classList.contains('dragon'); 
if(apakah_ada) {
    console.log("ada class dragon")
} else {
    console.log("tidak ada class dragon")
}

box1.classList.toggle('aquabotol'); 
box1.classList.toggle('aquabotol'); 

console.log(box1.classList)







// 
// console.log(eljudul)
// console.log(eljudul.innerHTML)
// console.log(eljudul.innerText)