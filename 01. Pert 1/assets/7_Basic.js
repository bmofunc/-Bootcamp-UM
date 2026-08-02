/* ==========================================================================
    1. Variable dijavascript = UNTYPE, Selain Javascript = TYPE
    2. Mempunyai tipe data
*/

/* SELAIN JAVASCIPRT (TYPE)
// C++
int x = 5; 
    x = "5"; error
// C#
string nama = "jono"; 
// C#
char jeruk = 'J'; 
*/


// Javascript (UNTYPE) bisa diisi dengan value apapun
// Var   = Deklrasikan variable (bisa dideklrasikan ulang)
// Let   = Deklrasikan variable (tidak bisa dideklrasikan ulang tapi bisa diisi ulang varablenya)
// Const = Deklrasikan variable (tidak bisa dideklarasikan ulang dan tidak bisa diisi ulang variablenya)

// Case 1
var x = 5; 
var y = "jono";
var z = "J";
    x = "10"; 

// console.log(x); // Nampilin terminal 
// console.log(y);
// console.log(z);

// Case 2 
var mahasiswa = "joni"; 
var mahasiswa = "deni"; 
// console.log("Nama mahasiswa " + mahasiswa); 

let mahasiswa2 = "jona"; 
// let mahasiswa2 = "dena"; error
    mahasiswa2 = "dena"; 
// console.log(mahasiswa2); 

const mahasiswa3 = "jerry"; 
// const mahasiswa3 = "jendi"; error
    // mahasiswa3 = "jendi"; error 
// console.log(mahasiswa3)
// ==========================================================================



// ========================================= CARA PEMANGGILAN VARIABLE
// int (5), char ('A'), string ("Andi"), boolean true/false, array [], object {}
// Cara cara bikin variable di javascript
let vari_0 = 50.5; // float
let vari_1 = 50;   // int
let vari_2 = 'A';  // char
let vari_3 = "Andi";  // string
let vari_4 = true;  // boolean
let vari_5 = [75, 'B', "Deni", false, "Dena"];        // array
// Index Array Position dimulai dari 0 --> [0,1,2,3,4]

let vari_6 = {nama: "tom", umur: 19, npm: 36} // object {key: value}
let vari_7 = [ // Array
    {nama: 'deni', umur: 20}, // Object
    {nama: 'dena', umur: 22},
];
// JSON (Javascript object notation)


// Cara pangggil sebuah variable
// console.log(vari_0); 
// console.log(vari_1); 
// console.log(vari_2); 
// console.log(vari_3); 
// console.log(vari_4); 
// console.log(vari_5);
// console.log(vari_5[2]); // cara pemanggilan array (menggunakan index)
// console.log(vari_6); 
// console.log(vari_6.umur); // cara pemanggilan object menggunakan key 
// console.log(vari_7[1].umur); // Cara pemanggilan JSON 
// ========================================= CARA PEMANGGILAN VARIABLE



// Built in function (String)
// let namaKampus    = "Universitas Mandiri"; 
//     namaKampus    = namaKampus.replace("Mandiri", "Sendiri");  // buat ngereplace kata
// let validasi      = namaKampus.includes('Jono'); // nyari tau ada ga kata di variable tersebut
// let namaMahasiswa1 = "Jono andriani putra"; 
//     namaMahasiswa2 = namaMahasiswa1.split(' '); 
//     namaMahasiswa3 = namaMahasiswa2[1]; 

// console.log(namaKampus); 
// console.log(validasi); 
// console.log(namaKampus.includes('Jono')); 
// console.log(namaMahasiswa1)
// console.log(namaMahasiswa2)
// console.log(namaMahasiswa3)
// console.log(namaMahasiswa2.join('||')) // buat ngegabung array

// Built in function (int, float)
let bil1 = 5; 
let bil2 = 10; 
let result = bil1 + bil2; 
// console.log(result); // 15

let bil3 = "5"; 
let bil4 = 10;
let bil5 = "19.5"; 
    bil3 = parseInt(bil3); 
    // bil4 = String(bil4); 
    bil5 = parseFloat(bil5);
let result2 = bil3 + bil4 + bil5; 
// console.log(result2); // 15

// Built in function array, object, JSON (array object)
let arrs_1 = ["apel","jeruk","anggur"];

// Array 
// Push, pop, shift, Length, ||  (foreach, findIndex, find, map, sort) 
arrs_1.push(10); // Push (menambah objek baru di akhir index array) 
arrs_1.push(14); 
arrs_1.pop();    // Pop (Menghapus objek baru di akhir index array)
arrs_1.pop();
arrs_1.shift();  // Shift (buat menghapus objek baru di awal index array)
arrs_1.push(15); 
let panjangArray = arrs_1.length; 
// console.log(arrs_1); 
// console.log(panjangArray); 

// Object 
let objs_2 = {nama: "tom", umur: 19, npm: 36} // object {key: value}
// console.log(objs_2); 
const listKey = Object.keys(objs_2); 
const listVal = Object.values(objs_2); 
// console.log(listKey); 
// console.log(listVal); 
// listVal.forEach(item => console.log(item)); 
// console.log(typeof("bimo")); 


// Destructuring (Object / Array)
const {nama, umur, npm} = objs_2; 
// console.log(nama)


let arrs_2 = ["apel","jeruk","anggur"];
const [buah1, buah2, buah3] = arrs_2; 
// console.log(buah1); 
// console.log(buah2); 
// console.log(buah3); 
// ======================================================================

// IF ELSE 
// OR  (||) AND (&&)
// OR   = Kondisi apabila salah satunya benar = TRUE 
// AND  = Kondisi semuanya harus benar        = TRUE

// OR   --- TRUE || FALSE || false || false ===> TRUE 
// AND  --- TRUE && FALSE && TRUE           ===> FALSE

// ==   --  SAMA DENGAN 
// !=   --  TIDAK SAMA DENGAN 
//  <   --  KURANG DARI 
// <=   --  KURANG DARI SAMA DENGAN
// >    --  KURANG DARI SAMA DENGAN
// >=   --  KURANG DARI SAMA DENGAN

let buah5 = "jeruk";
let buah6 = "jeruk";  
let numb5 = 50; 
let numb6 = 100; 

// Case 1
// if(buah5 == buah6) { // benar
//     console.log(buah5 + " Sama dengan " + buah6);  
// } else {
//     console.log(buah5 + " Tidak Sama dengan " + buah6); 
// }

// Case 2 (OR)
// KONDISI PERTAMA = TRUE 
// KONDISI KEDUA   = FALSE 
// TRUE
// if(buah5 == buah6 || numb5 > numb6) { // benar
//     console.log("OR BENER NIH"); 
// } else {
//     console.log("OR SALAH NIH"); 
// }

// // Case 3 (AND)
// // KONDISI PERTAMA = TRUE 
// // KONDISI KEDUA   = FALSE 
// // FALSE
// if(buah5 == buah6 && numb5 > numb6) { // benar
//     console.log("AND BENER NIH"); 
// } else {
//     console.log("AND SALAH NIH"); //
// }


// // CASE 4 (if else)
// let nilaiMhs = 60; 
// let grade = "";

// if(nilaiMhs >= 0 && nilaiMhs <= 50) { // true, false  => FALSE
//     grade = "C"; 
// } else if(nilaiMhs >= 51 && nilaiMhs <= 70) { // true, true => TRUE
//     grade = "B"; 
// } else {
//     grade = "A"; 
// }

// // Alternatif selain if else 
// switch(nilaiMhs) {
//     case 60: {
//         grade = "C"; 
//         break; // selesain
//     }
//     case 50: {
//         grade = "B"; 
//         break;
//     }
// }

// console.log(grade); 


// let increment = 0; 
// increment++; // 1
// increment++; // 2
// increment++; // 3
// console.log(increment); 

// FOR LOOP 
// for(let i=0; i<=5; i++) {
//     console.log(i); // 0 1 2 3 4
// }

// for(let i=0; i<=50000; i++) {
//     if(i == 3) {
//         console.log("AKU ADA DI 3")
//         break; 
//     } else {
//         console.log("AKU GA MASUK KRITERIA"); 
//     }
// }

// WHILE LOOP 
// let cond1 = true; 
// let muterLapangan = 0; 

// // while itu akan dijalanin selama kondisinya TRUE 
// while(cond1) { 
//     muterLapangan++; // 1 2 3
//     if(muterLapangan == 3) cond1 = false; 

//     console.log(muterLapangan); 
// }

// FUNCTION (kumpulan proses dalam 1)

// case 1
function kalkulator() {
    console.log("Halo kalkulator")
    console.log("=")
    console.log("==============")
    console.log("==============\n")
}
// kalkulator(); 

// case 2
function kalkulator2(n1, n2) {
    console.log("nilai 1: " + n1);
    console.log("nilai 2: " + n2);
    let result = n1 + n2; 
    console.log("Result: " + result); 
}
// kalkulator2(19, 20);

// case 3 Return 
function masak(adonan) {
    let result = ""; 
    if(adonan == "telur") {
        result = "DONAT"; 
    } else if(adonan == "tepung") {
        result = "PISANG"; 
    }
    
    return result; // dibalikin / dianterin lagi hasil jadinya
} 
// let res = masak("telur"); 
// console.log(res);
// console.log(masak("tepung")); 


// ARROW FUNCTION
const pertambahan1 = () => {

}

// basic function / function biasa
function pertambahan2() {

}

// arrow function 
const infoUM = () => {
    console.log("INFO UM")
    console.log("=")
    console.log("=")
    console.log("=========")
}

const namaMahasiswa = (nama, umur) => {
    console.log(nama)
    console.log(umur)
}

const masak2 = (adonan) => {
    return "KUE"; 
}



// infoUM(); 
// namaMahasiswa("Jesi", 19); 
// console.log(masak2("TEPUNG")); 


// ARRAY (foreach, findIndex, find, filter, map, sort, reduce)


let students = ["Dina", "Indra", "Maulidya", "Yupi", "Maulidya"]; // start dari index 0

// For loop / Foreach Untuk Menampilkan data didalam array 
// cara tampilin menggunakan for loop 
// for(let i=0; i<students.length; i++) {
//     console.log(students[i])
// }

// while loop 




// // 1. Cara 1
// students.forEach((val) => {
//     // console.log(ind)
//     console.log(val)
// })
// console.log("\n"); 


// // // 2. Cara 2
// const tampil = (nama) => {
//     console.log(nama)
// }
// students.forEach(item => tampil(item))

// console.log("\n"); 

// function tampil2(nama) {
//     console.log(nama)
// }
// students.forEach(item => tampil2(item)); 



// find Index (buat mencari nilai index dari suatu value)
// let indexBerapa = students.findIndex(item => item == "Yupi"); 
// console.log(indexBerapa)

// // find (untu mencari sebuah data tapi hanya mengembalikan 1 nilai (partial scan))
// let dataBerapa = students.find(item => item == "Maulidya"); 
// console.log(dataBerapa)
// if(dataBerapa != undefined) {
//     console.log("data nya ada"); 
// } else {
//     console.log("data nya tidak ada"); 
// }

// // filter (untuk mencari semua data dalam 1 array (full scan))
// let datasBerapa = students.filter(item => item == "Maulidya"); 
// console.log(datasBerapa); 

// // Map (sama  kaya foreach cuman dia bisa memodifikasi sebuah nilai)
// let libNumber1 = [50,1,15,8,7]; 
// let libNumber2 = [50,1,15,8,7]; 
// let resultsNumb = libNumber1.map(item => {
//     let result = item * 5; 
//     return result 
// })

// console.log(resultsNumb)

// // Sort (untuk mengurutkan sebuah data dari yg terkecil sampai yang terbesar)
// let resultSort1 = libNumber1.sort((a,b) => a-b); // ascending
// let resultSort2 = libNumber2.sort((a,b) => b-a); // dessending
// console.log(resultSort1); 
// console.log(resultSort2); 

// let api_data = [
//     {nama: 'jono', umur: 19, kampus: 'um'},
//     {nama: 'maulidya', umur: 22, kampus: 'um'},
//     {nama: 'indra', umur: 23, kampus: 'um'},
// ]
// // console.log(api_data);
// api_data.forEach(item => {
//     let nama = item.nama; 
//     let umur = item.umur; 
//     let kampus = item.kampus; 
//     console.log(nama); 
//     console.log(umur); 
//     console.log(kampus); 
// })


// Reduce 
// let listNumber = [5,10,15]; 
// console.log(listNumber); 
// let summary = listNumber.reduce((initvar, item) => initvar + item, 0);  // initvar = 0
// console.log(summary); 

// Loop 1 
// Init_var = 0 
// item     = 5 
// Result   = 0 + 5 = 5

// Loop 2
// Init_var = 5
// item     = 10
// Result   = 5 + 10 = 15; 


// Loop 3
// Init_var = 15
// item     = 15
// Result   = 30; 





// TRY CATCH (buat menangkan sebuah error / exception)
// try {
//     let i = undefined; 
//     let v = 2; 
//     let r = i/v; 
//     console.log(test); // error 
// } catch(ex) {
//     console.log("ada error")
// }

// // Codingan
// console.log("test"); 


// // CLASS
// class Card {
//     getCardName() {
//         console.log("Menammpilkan kartu")
//     }
// }

// const kartu1 = new Card(); 
// console.log(kartu1.getCardName()); 



// Rest Parameter (...)
// function universitas(nama, tahun, ...mahasiswas) {
//     console.log(nama)
//     console.log(tahun)
//     console.log(mahasiswas); 
//     // mahasiswas.forEach(item => console.log(item))
//     // let results = mahasiswas.map(item => item * 5); 
//     // console.log(results); 
// }
// universitas("universitas mandiri", 1990, 1,2,3,4,5,6,7,8,910, 11,12, 13,1000, 2000)




// Fetch Async Await



async function getDataApi() {
    const response = await fetch('https://api.tvmaze.com/singlesearch/shows?q=girls')
    if(response.status == 200) {
        const json = response.json(); 
        return json
    } 
    return undefined; 
}

let apiData = await getDataApi(); 
console.log(apiData)
let id = apiData.id; 
let name = apiData.name; 
let languange = apiData.languange; 
let network = apiData.network; 
console.log(id)
console.log(name)
console.log(network)
console.log(languange)

// let apidata = await getDataApi(); 
// console.log(apidata); 







// DOM (Website)