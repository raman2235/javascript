//scope--yeh hai ki hum apne cretaed variables and functions kaha tk use krskte hai
//functional scope, global scope, bloack scope

//execution context
//js sabse pehle jaise hi aapka function dekhta hai sabse 
//pehlajo banaata hai execution context, ye ek process hau
//jo ki do different phases main chlta hai, memory phase 
//and doosre ka naam hai execution phase

//in js we follow lexical scoping

//lexical scoping--ki aap kaha pr physucally available ho 
//ye poori traeke se depend krta hai ki aap kya access kr 
//paayoge

//dynamix scoping -- kaha se call kr rhe ho uspe depend 
// krega ki kya value milegi

//closure defination-- closure hite hai functions jo ki 
// kisi parent function k andr ho aur andr vala function 
// return ho rha ho aur returning function use kre parent
// ka function

//yeh sach hai func k khtm hone pai aapke func and uske varaibles
//khtm ho jaate hai, pr abhi bhi closure bnta hai tuo aapka
//function aur uske variables ka ek backlink bnaya jaaata 
// hai aur uska nam hota hai [[environment]]

//--iss se hu private variables bna skte hai

//toast message function
function createToaster(config){

    let parent=document.createElement('div');
    parent.className=`fixed flex flex-col gap-2 p-2
    ${config.positionX==='right'? "right-2": "left-2"}
    ${config.positionY==='top'?"top-2":"bottom-2"}`;
    document.body.appendChild(parent);

    return function (notification){

        let div=document.createElement('div');
        div.className=`inline-block ${config.theme==='dark'?'bg-gray-800 text-white':'bg-white text-black'
        } px-6 py-3 rounded shadow-lg transition-all duration-300`;
       
       div.textContent=notification;
       parent.appendChild(div);
    
        setTimeout(() => {
            div.style.opacity='0';
            setTimeout(() => {
                if(parent.contains(div)){
                    parent.removeChild(div);
               }
            }, 300);
        }, config.duration);
    };
}
let toaster=createToaster({
    positionX: 'right',
    positionY: 'top',
    theme: 'dark',
    duration: 4000
});

toaster("Download started!");
setTimeout(() => {
    toaster("Download in progress...");
}, 2000);
