//fetch api to get data from server
//fetch api ek built-in web API hai jo ki asynchronous requests bhejne ke liye use hoti hai
//fetch api promise-based hai, iska matlab hai ki ye asynchronous operations ko handle krta hai
//fetch api ka basic syntax
//fetch(url, options)
//url--jahan se data lana hai
//options--ek optional object jisme request ka method, headers, body wagairah specify kr skte hain
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(function(response) {
    //response ko json me convert krna
    return response.json();
})
.catch(function(error) {
    console.log("Error fetching data: " + error);
})
.then(function(data) {
    console.log("Fetched Data: ", data);
});

//get -- data retrieve krne ke liye
//post -- data bhejne ke liye
//put -- data update krne ke liye
//delete -- data delete krne ke liye


//get request example
fetch('https://jsonplaceholder.typicode.com/posts/2')
.then(function(response) {
    return response.json();     
})
.then(function(data) {
    console.log("GET Response Data: ", data);
})
.catch(function(error) {
    console.log("Error in GET request: " + error);
});

//POST request example
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
})
.then(function(response) {
    return response.json(); 
})
.then(function(data) {
    console.log("POST Response Data: ", data);
})
.catch(function(error) {
    console.log("Error in POST request: " + error);
});

//status codes
//200-299: Success
//400-499: Client Errors
//500-599: Server Errors

//form submission using fetch api
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    fetch("url", {
        method: 'POST',
        body: JSON.stringify({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })  
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        console.log("Form Submission Response: ", data);
    })
    .catch(function(error) {
        console.log("Error in form submission: " + error);
    }); 
});