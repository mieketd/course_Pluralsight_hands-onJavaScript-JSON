// JavaScript Document
const xhr = new XMLHttpRequest();

xhr.open('GET','data.json', true); //initializes request
xhr.responseType = 'text'; //ensure it's coming in as text


// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState); //returns state value, number between 0 and 4
//     console.log(xhr.status); //status code
//     console.log(xhr.statusText); // status text explaining status code
// }

//fired after value of 4
xhr.onload = function(){
    if(xhr.status === 200){
        let myStuff = JSON.parse(xhr.responseText); //parse takes string and turns into object
        console.log(myStuff);
    } else {
        console.log('error' + xhr.status);
    }
}

xhr.send(); //sends request