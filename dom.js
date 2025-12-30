//dom is the part of html body
//dom -document object model
//dom manipulation

//1. html se element select karna
let abcd=document.getElementById("abcd")
console.log(abcd);
console.dir(abcd);

//getElementsByClassName is a array like structure which is called HTMLcollection
let classname=document.getElementsByClassName("classname")
console.log(classname);

//query Selector will select the first element in body so it will select first firsrt h1 in the body
let v1=document.querySelector("h1")
console.dir(v1)

//isme hume array jaisa structure milega jise hum node list kahte hai
document.querySelectorAll("h1")
//hum console.log aur console.dir dona ka use kr skte hai 


//1.1dom manipulation-text badalna
let h1=document.querySelector("h1");
//h1 is like a object and we select the key in object by . and which we want to change we select that key in h1 object
h1.textContent="hello raman kaisi ho";
h1.innerText="helooooo guyss";


//1.2html badalna
//innerHTML hum HTML change krne kai like use krte hai and textContent and inneertex sirf text badlata hai
h1.innerHTML="<i>hey</i>";


//1.3 attribute manipulation
//html tag mai jo tag k ilwa chize likhi hoti hai voh attribute hote hai 
let a=document.querySelector("a");
a.href="https://www.google.com";
//agr hum kisi a tag ko href na de toh by default href page ka hota hia
//element.setAttribute(name,value)
a.setAttribute("href","https://www.google.com");
//isse hum value nikal laite hai
a.getAttribute("href")
//isse hum attribute uda dete hai
a.removeAttribute("href");


//1.4 Dynamic Dom Manipulation
//element create krna body mai jo  nhi hia
let h2=document.createElement("h2");
h2.textContent="hello im created";
//element ko append krna sabse last mai
document.body.append(h2);
//element ko prepand krna sabse pehle 
//document.body.prepend(h2);
//div mai add krdiya 
//document.querySelector("div").appendChild(h2);

//1.5 css ko change krna
let h3=document.querySelector("h3");
h3.style.color="red";
h3.style.backgroundColor="black";
h3.style.fontFamily="Gilroy";
h3.style.textTransform="capitalize";
//h3 pai class lgate hai jise hume already style kr rkha hia css mai
h3.classList.add("hulu")
//h3 se remove krni hai class
h3.classList.remove("hulu");
//toggle agr hati huyi hai tuo lga deta hai and vice versa
h3.classList.toggle("hulu");
