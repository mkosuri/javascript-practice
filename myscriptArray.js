// 
function myFunction(){
  var myArray = new Array("apples", "oranges", "pears", "watermelons","ball");
alert(Array.isArray(myArray)); 
alert(myArray[0]);
alert(myArray);
var stringtoarray = myArray.toString();
alert(typeof myArray);
alert(typeof stringtoarray);
 
alert(myArray.join('|'));
 
myArray.splice(2, 0, "cashew");
 for replace Add AND replace
myArray.splice(2, 1, "Scott Shriner")
myArray = myArray.sort();

console.log( myArray.slice(0,2));


Dom Maniplation 
var elements = document.getElementById("maincontent");
console.log("NodeType:", elements.innerHTML);
console.log(maincontent);
var list = document.getElementsByTagName("ul")[0].childNodes.length; //doubt not working of 1
alert(typeof list);

var list = document.getElementsByTagName("p").length;
console.log(list);
var newheading_one = document.createElement("h1");
var newheading_two = document.createElement("h2");
var newheading_two = document.createElement("h2");

alert("checking dom elements");
// To append the text to above one
newheading_one.innerHTML = "This is heading one";
newheading_two.innerHTML = "This is heading two";

document.getElementById("dom_maniplation").appendChild(newheading_one);
document.getElementById("dom_maniplation").appendChild(newheading_two);


}

