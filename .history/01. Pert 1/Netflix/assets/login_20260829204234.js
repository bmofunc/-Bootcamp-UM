// alert("Helo")
const i_username = document.querySelector('.c_username'); 
const i_password = document.querySelector('.c_password'); 
const i_login = document.querySelector('.c_login'); 

const i_form  = document.querySelector('form'); 
console.log(i_form)

console.log(i_username)
console.log(i_password)
console.log(i_login)

i_form.addEventListener('submit', function(e) {
    e.preventDefault(); // mengganti perilaku default dari suatu element
})

async function getDataAPI(url) {
  const response = await fetch(url)
  if(response.status == 200) {
      const json = response.json(); 
      return json; 
  }
  return []; 
}

let api = `http://localhost/netflix/api.php?action=`; 
window.onload = async function(e) {
    let link = api + "get_users"; 
    let users = getDataAPI(link); 
    
}



i_login.addEventListener('click', function(e) {
    
})
