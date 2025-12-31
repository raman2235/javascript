//browser mai page pr koi bhi action krne se event raise ho jayega
//like mouse ko move krna , click krna ,screen pai kuch v krna ik event hai
//koi action ka reaction is event handling

//1. adding event listeners in elements
let h5=document.querySelector("h5");
h5.addEventListener("click",function(){
    h5.style.color="red";
})

let p=document.querySelector("p");
function clickfun(){
    p.style.color="green";
}
p.addEventListener("click",clickfun)

p.addEventListener("dblclick",function(){
    p.style.backgroundColor="brown";
})

//2. removing event listener
p.removeEventListener("click",clickfun);

//some common event listner
//1.click - already done above
//2.dblclick - already done
//3. input
let inp=document.querySelector("input");
inp.addEventListener("input",function(evt){
    console.log(evt.data);
})

//4. change - yeh tb chlta hai jb koi input select ya textareas main koi change ho jaye
let sel=document.querySelector("select")
let selectionn=document.querySelector("#selectionn");
sel.addEventListener("change",function(dets){
    console.log(dets.target.value);
    selectionn.textContent=`${dets.target.value} Device Selected`;
})

//5.keydown
let keydowns=document.querySelector("#keydowns");
window.addEventListener("keydown",function(dets){
    if(dets.key===" "){
        keydowns.textContent="SPC";
    }
    else{
        keydowns.textContent=`${dets.key}`;
    }
})

//6. mouseover
let mousee=document.querySelector("#mousee")
mousee.addEventListener("mouseover",function(){
    mousee.style.backgroundColor="green";
})
//7.mouseout
mousee.addEventListener("mouseout",function(){
    mousee.style.backgroundColor="brown";
})
//8.mousemove
window.addEventListener("mousemove", function(dets) {
    console.log(dets.clientX, dets.clientY);
    mousee.style.top = dets.clientY + "px";
    mousee.style.left = dets.clientX + "px";
})


//example
let form=document.querySelector("form");
let main=document.querySelector(".main");

form.addEventListener("submit",function(dets){
    //this will prevent the page to reload
    dets.preventDefault();

    let inputs=document.querySelectorAll("input");

    let card=document.createElement("div")
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img=document.createElement("img");
    img.src=inputs[0].value;

    let h3=document.createElement("h3");
    h3.textContent=inputs[1].value;
    
    let h5=document.createElement("h5");
    h5.textContent=inputs[2].value;

    let p=document.createElement("p");
    p.textContent=inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    inputs.forEach(function(inp){
        if(inp.type!=="submit"){
            inp.value="";
        }
    })
})


//event object
//the details of the event is called event object like dets in our function

//target
//jispai event ho rha hai

//event bubbling
//jispe event aayega agr uspr listener nhi hua tuo humara
//  event uske parent par listner dhoondega, aur aisa krte
//  krte upr ki trf move kreg
/* main div
    nav div
       links
        button
*/         
//jaise ab event button pai aaya pr uspr listner nhi hai tuo voh uske parent pai chla jayeganav div pai
//aur uska chl jayega fr voh apne parent pai jayega uska chlayega and aisa hota rhega html tag tk


//event capturing
//yeh opposite hai event bubbling ka
//jb bhi hum koi event krtr hai tuo jo event flow hau voh do phases mai chltahai
//phase 1: event top element se neeche ki taraf aayega
//phase 2: event raised element se parent ki taraf jayega
//pehle event 1 hoti hi but by default voh off rehti hai, agr hum capture phase on krde tuo phase 1 pehle hoga

//pehle capture phase chlta hai fr bubbling
//elememt.addEventListener("event",function(){},true) -- capture phase on
