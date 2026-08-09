// alert("Helo")

const i_username = document.querySelector('.c_username'); 
const i_password = document.querySelector('.c_password'); 
const i_login = document.querySelector('.c_login'); 

console.log(i_username)
console.log(i_password)
console.log(i_login)


i_login.addEventListener('click', function(e) {
    let ius = i_username.value; 
    let ips = i_password.value; 

    if(ius == "ADMIN" && ips == "ADMIN1234") {
        alert("Hore berhasil login")
    } else {
        alert("Username/Password Invalid");
    }

    console.log(ius); 
    console.log(ips); 
})
