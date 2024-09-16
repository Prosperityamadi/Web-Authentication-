const email = document.getElementById("email");
const password = document.getElementById("passwd");

function submit() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("passwd").value;
        if(email && password){
            localStorage.setItem('email', email)
            localStorage.setItem('passwd', password)
            alert("Signup successfully")
        }else{
            alert("Username and password is incorrect")
        }
}
console.log()

function login(){
    const savedemail = localStorage.getItem('email');
    const savedpassword = localStorage.getItem('passwd');
    
    const newloginemail = document.getElementById('loginemail').value;
    const newloginpassword = document.getElementById('loginpasswd').value;
        if(savedemail===newloginemail && savedpassword===newloginpassword){
            alert("You've successfully Logged in");
        }
        else{
            alert("Username and password is incorrect");
        }
}