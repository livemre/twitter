
const registerSection = document.getElementById('registerSection');
registerSection.style.display = "none";

const loginSection = document.getElementById('loginSection');
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

let infoLogin = document.getElementById('infoLogin');
let infoRegister = document.getElementById('infoRegister');


let db = [];


if(localStorage.getItem('users') === null ){
    console.log("Hiç kayıt yok");
}else{
    db = JSON.parse(localStorage.getItem("users"));
}


// login / register bölümlerini aç kapa
loginLink.addEventListener('click',login);
registerLink.addEventListener('click',register);
registerForm.addEventListener('submit',registerInit);
loginForm.addEventListener("submit", loginInit);


function registerInit(){
   
    // imput verilerini alma
    let username = document.getElementById('username').value;
    let mail = document.getElementById('mail').value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;

    let checkMail = db.find(val=> val.mail == mail);
    console.log(checkMail);
    if(checkMail== undefined){

        db.push(
            {
            username: username,
            mail : mail,
            name : name,
            lastname : lastname,
            pssword : password,
            favorites : []
        });
     
        //Kayıt verilerini Local Storage kaydetme.
        localStorage.setItem("users",JSON.stringify(db));

        infoRegister.className ="alert alert-success";
        infoRegister.innerHTML = "Kayıt başarılı. Lütfen giriş yapın."

        registerSection.style.display = "none";
        loginSection.style.display = "block";



     
    }else{

        infoRegister.className ="alert alert-danger";
        infoRegister.innerHTML = "Bu mail adresi ile kayıtlı kullanıcı zaten var."
        
    }
    

    // Veritabanı dizisine user ekleme
    
    // Local storage son verileri alma       
    db = JSON.parse(localStorage.getItem("users"));
    
}

function loginInit(e){
   console.log("Login ");
    console.log(db);

    e.preventDefault();

    
    

    let mailAddress = document.getElementById("loginMail");
    let passwordAddress = document.getElementById("loginPassword");
    console.log(mailAddress.value);
    

    db.forEach(val =>{
        console.log(val);
        console.log(val.mail);

        if(val.mail == mailAddress.value){
            console.log("YES");
            
        }
       
        
        
    })

   let result = db.filter(val =>
        val.mail == mailAddress.value
    );

    console.log("****");
    
    console.log(result);

   let son = result.filter(val => val.pssword == passwordAddress.value);
   

   if(son.length>0){
       console.log("Böyle bir üye var.");
       son.forEach(val =>{
           console.log(val.mail);
           window.location.href="dashboard.html?"+val.mail;
       })
       

       
   }else{

       console.log("Kullanıcı bulunamadı");
       infoLogin.className = "alert alert-danger";
       infoLogin.innerHTML ="Kullanıcı Bulunamadı";
       
       
       
   }
   
    
    


}


function login(){

    registerSection.style.display = "none";
    loginSection.style.display = "block";

}

function register(){
    loginSection.style.display = "none";
    registerSection.style.display = "block";
}



