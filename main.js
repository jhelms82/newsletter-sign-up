const email = document.getElementById('email');
let form = document.getElementById('form');
const errorElement = document.getElementById('error')
const success = document.getElementById('success-box')
let box = document.querySelector(".box")
let hideMe = document.querySelector(".hide-me")



form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const empty = document.forms["form"]["email"].value;
    let error = document.getElementById("error")
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let email = document.getElementById('email')

    if(empty == '' || empty == null || !email.value.match(validRegex)){
        //Throw error
        error.innerHTML = "Email is invalid"
        email.style.backgroundColor= '#efd6d6';
        email.style.border= '1px solid hsl(4, 100%, 67%)';
        placeholder.style.color = 'hsl(4, 100%, 67%)'

    } else if (email.value.match(validRegex)) {

    
        box.style.display = "none";
        hideMe.style.display = "flex";


    }
})


function goBack(){
    let email = document.getElementById('email')
    box.style.display = "flex";
    hideMe.style.display = "none"

;}

