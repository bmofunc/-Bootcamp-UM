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
let vari_7 = [
    {nama: 'deni', umur: 20},
    {nama: 'dena', umur: 22},
] // JSON


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
// ========================================= CARA PEMANGGILAN VARIABLE



// Built in function (String)
let namaKampus    = "Universitas Mandiri"; 
    namaKampus    = namaKampus.replace("Mandiri", "Sendiri");  // buat ngereplace kata
let validasi      = namaKampus.includes('Jono'); // nyari tau ada ga kata di variable tersebut
let namaMahasiswa1 = "Jono andriani putra"; 
    namaMahasiswa2 = namaMahasiswa1.split(' '); 
    namaMahasiswa3 = namaMahasiswa2[1]; 

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
console.log(result); // 15

let bil3 = "5"; 
let bil4 = 10;
let bil5 = "19.5"; 
    bil3 = parseInt(bil3); 
    // bil4 = String(bil4); 
    bil5 = parseFloat(bil5);
let result2 = bil3 + bil4 + bil5; 
console.log(result2); // 15

// Built in function array, object, JSON (array object)
