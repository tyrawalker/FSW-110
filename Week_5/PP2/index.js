var fname = document.travelerInfo.fname.value; 
var lname = document.travelerInfo.lname.value; 
var age = document.travelerInfo.age.value; 
var location = document.travelerInfo.age.value; 
var diet = document.travelerInfo.diet.value; 

document.travelerInfo.submit.addEventlistener("onclick", function(){
    alert (fname + lname + age + location + diet);
} )
 

