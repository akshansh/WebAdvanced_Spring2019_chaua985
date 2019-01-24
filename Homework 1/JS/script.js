//console.log("Hello");


var GreetingContainer; // initialize the variable
GreetingContainer = "This is a new variable"; // the value of the variable

console.log(GreetingContainer);

//alert('Greetings: ' + GreetingContainer);

document.write('<p>' + GreetingContainer + '</p>');


// Creating a function which takes the elements from one array and puts it on the elements of the other array

var arrange = document.getElementsByClassName('msg'); // create a variable that calls the msg elements into the var array

var attributes = ["Green", "Orange", "Purple"];

for (var i = 0; i < attributes.length; i++) {

    for (var i = 0; i < arrange.length; i++) {
        arrange[i].innerHTML = attributes[i];
    }
}