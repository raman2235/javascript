//localStorage- browser k andr data store krna jo ki 
// browser bnd hone pr bhi delete nhi hoga
//we can not store any thing else properly in loccalstroage except string ,it will automatically converted to string
//we can store it ussing JSON.stringify
//we can get this data using JSON.parse in its real form
//it stores data ~5mb

//sessionStorage-it stores data temporarily , mtlb ki
//  jb tab bnd ho jata hai data chla jata hai
//it stores data ~5mb

//cookies- yeh bhi data store krta  hai and aapke data
//  browser ke cookies naam ki propertymai save hota hai
//  and ye cookie conccet kam data ya light data k liye 
// use hota hai
//cookies mai jo bhi data store krege wo data page reload pai automatically backend server par jayega
//it stores ~4kb data

//1.1localStorage -> how to store data
localStorage.setItem("name","raman");

//1.2localStorage-> how to fetch data
let datas=localStorage.getItem("name");

//1.3localStorage-> remove item
localStorage.removeItem("name");

//1.4localStorage -> update data (it uses setitem if name is not there it makes make and if it there it overwrites it)
localStorage.setItem("name","ramandeep")

//2.1sessionStorage->how to store data
sessionStorage.setItem("phone","7523487444232")

//2.2sessionStorage->how to fetch data;
sessionStorage.getItem("phone");

//2.3sessionStorage->hwo to remove item
sessionStorage.removeItem("phone")

//2.4sessionStorage->how to clear data
sessionStorage.clear();

//3 cookies-how to set cookie
document.cookie="email=@deepraman.com";

//get cookie
document.cookie();

//to get the users display theme light or dark
//window.matchMedia('(prefers-color-scheme:dark)')
//if matches is truw the theme is dark otherwise light