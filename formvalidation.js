let nm = document.querySelector("#name");
let form = document.querySelector("form");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    if(nm.value.length<=2){
        document.querySelector("#hide").style.display="initial";
        document.querySelector("small").style.color="red";
    }else{
        document.querySelector("#hide").style.display="none";
    }

    const emailregex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{8,}$/;
    let emailans=emailregex.test(email.value);
    let passwordans=passwordregex.test(password.value);
    if(!emailans){
        document.querySelector("#emailclass").style.display="initial";
        document.querySelector("#emailerror").style.color="red";
    }
    if(!passwordans){
        document.querySelector("#pasclass").style.display="initial";
        document.querySelector("#passworderror").style.color="red";
    }

});
//regex - we write it form gpt
//const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//regex.test(document.querySelector("#email"))

//.value is always used to get value from the input