// this keyword-- it is a special keyword in javascript
//jaise ki baaki saare keyword ki value unke nature same 
// rehta hai this ki value ya nature badal jaata hai is 
// baat se ki aap usey kaha use kr rhe ho
/*
const { createElement } = require("react");

// global context me this ka value window hota hai
console.log(this); //window

//function context me this ka value bhi window hota hai
function myFunc(){
    console.log(this); //window
}

//method context me this ka value uska object hota hai
// jiske under wo method defined hota hai
//greet is method of myObj
//agr humne method ko arrow function se define kiya hota
//to this ka value window hota
//agr humne method ke andr kisi function ko define kiya hota
//to us function ke andr this ka value window hota
//agr humne es5 method ke andr kisi function ko arrow 
// function tuo uska value object hota jiske under wo 
// method defined hota hai
//arrow function hmesha apne parent se this ka value laita hai
let myObj={
    name: "John",
    greet: function() {
        console.log(this.name); //John
    }
};

//event listener context me this ka value uska element
// hota hai jiske under wo event listener defined hota hai
let button=createElement('button');
button.addEventListener('click', function(){
    console.log(this); //button element
});

//class context me this ka value uska instance hota hai
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}
new Person("Alice", 30); //this ka value Person instance hoga

//call apply bind ke through hum this ka value set k skte hai
let user={
    name: "Bob"
};
function sayHello(greeting){
    console.log(`${greeting}, ${this.name}`);
}
sayHello.call(user, "Hello"); //Hello, Bob
sayHello.apply(user, ["Hi"]); //apply k andr hum sirf 2 parameters bhej skte hai and wo array me hone chahiye
let boundFunc=sayHello.bind(user); //bind ek naya function return krta hai jisme this ka value set hota hai
boundFunc("Hey"); //Hey, Bob
*/


//example
let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],

  init: function () {
    // - binding 'this' ensures 'this' inside submitForm refers to userManager
    form.addEventListener("submit", this.submitForm.bind(this));
  },

  submitForm: function (e) {
    e.preventDefault(); // Browser reload ko rokta hai
    this.addUser();
  },

  addUser: function () {
    // Unique ID (Date.now()) dena zaroori hai remove karne ke liye
    this.users.push({
      id: Date.now(), 
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset();
    this.renderUi();
  },

  // Remove User Functionality
  removeUser: function (id) {
    // - Array filter logic to remove specific user
    this.users = this.users.filter((user) => user.id !== id);
    this.renderUi(); // UI refresh
  },

  renderUi: function () {
    const container = document.querySelector(".users");
    container.innerHTML = "";

    // IMPORTANT: Arrow function (=>) use kiya hai taaki 'this' userManager hi rahe
    this.users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition relative group";

      // Image
      const img = document.createElement("img");
      img.className = "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.photo;
      img.alt = "User Photo";
      card.appendChild(img);

      // Name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = user.username;
      card.appendChild(name);

      // Role
      const userRole = document.createElement("p");
      userRole.className = "text-purple-500 mb-2 font-medium";
      userRole.textContent = user.role;
      card.appendChild(userRole);

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center mb-4";
      desc.textContent = user.bio;
      card.appendChild(desc);

      // Delete Button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Remove";
      deleteBtn.className = "mt-auto bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-red-600 hover:text-white transition-colors";
      
      // - Arrow function ensures 'this' refers to userManager
      deleteBtn.onclick = () => {
        this.removeUser(user.id);
      };
      
      card.appendChild(deleteBtn);
      container.appendChild(card);
    });
  },
};

userManager.init();