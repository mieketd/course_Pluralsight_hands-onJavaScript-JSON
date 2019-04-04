// JavaScript Document
let theData1 = '{"first":"Mieke", "last":"ten Dam", "city":"Rijssen"}';
let myObj = JSON.parse(theData1);

// console.log(myObj);

// document.getElementById('message').innerHTML = myObj.city;

let theData2 = '{"Jane":{"age":"29", "degree":{"AAS":"VMI", "BA":"UVA"}}, "Jim":{"age":"49", "degree":"MA"}}';
let myObj2 = JSON.parse(theData2);
console.log(myObj2);
document.getElementById('message').innerHTML = myObj2.Jane.degree.BA;
