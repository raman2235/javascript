//sync js--aisa code jo line by line execute hota hai
//async js--aisa code jo jb chlne k liye ready ho tb chlta hai, baki code ko block nhi krta

//callback function--jb koi kaam complete ho jata hai tb call hota hai
//callback function example
//ek function ki agr hum ek function ko argument me pass
//krte hain to use callback function kehte hain
function profilelekraao(username, callback){
    console.log("fecting profile for " + username);
    setTimeout(() => {
        callback({_id: "123", username, age: 26, email: "kuchbhi@.com"});
    }, 1500);
}
function saarePosts(userid, callback){
    console.log("Fetching posts for user id: " + userid);
    setTimeout(() => {
        callback({_id:userid, posts: ["post1", "post2", "post3"]});
    }, 1500);
}
profilelekraao("rahul", function(profile){
    console.log(profile);
    saarePosts(profile._id,function(posts){
        console.log(posts);
    });
});
//callback hell--jb hum multiple callbacks ko nested kr dete hain
//to code samajhne me mushkil hota hai


//promise--ek object jo future me kisi value ko represent krta hai
//aap ik promise bnate ho jo ki do states main se ek me jaa skta hai: and wo ya resolve hota hai ya reject hota hai
//promise example
let pr=new Promise((resolve, reject) => {
    setTimeout(() => {
        let rn=Math.floor(Math.random()*10);
        if(rn>5){
            resolve("resolved with:" + rn);
        } else {
            reject("rejected with:" + rn);
        }
    }, 2000);
});
//jb tk promise resolve ya reject nhi hota tab tk voh pending state me rehta hai uske baad fulfilled ya rejected hota hai
//promise ko handle krne k liye hum .then() aur .catch() methods ka use krte hain
//jb promise resolve hota hai to .then() method call hota hai
//jb promise reject hota hai to .catch() method call hota hai
pr.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Error: " + error);
});


//async/await--ek syntax jo promises ko handle krna easy bnata hai
//async function hamesha promise return krta hai
//await keyword sirf async function ke andar hi use ho skta hai
//try...catch block ka use krke hum errors ko handle kr skte hain
async function abcd(){
    try {
        let result = await pr;  
        console.log("Async/Await Result: " + result);
    } catch (error) {
        console.log("Async/Await Error: " + error);
    }           
}
abcd();