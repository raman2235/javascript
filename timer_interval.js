//set timeout will call the function just once the time is up
let tm=setTimeout(function(){
    console.log("hello");
},5000)

//cleartimeout will clear the already settimeout
clearTimeout(tm);

//set interval will call the function after every given interval
let ci=setInterval(function(){
    console.log("interval")
},5000);

//cleat interval will clesr thre already set set interval
clearInterval(ci);


//example
let count=0;
let seconds=10;
let progress=document.querySelector(".progress-bar");
let percentText=document.querySelector("#percentText");
let intv=setInterval(function(){
    if(count<=99){
        count++;
        progress.style.width=`${count}%`;
        percentText.textContent=`${count}%`;
    }
    else{
        document.querySelector("h2").textContent="Downloaded";
        clearInterval(intv);
    }
}, (seconds*1000)/100);