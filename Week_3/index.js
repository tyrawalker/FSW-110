var header = document.createElement("h1")
header.innerHTML = "Hello World"
header.style.textDecorationLine= "underline"
header.style.color= "#50C7C7"
document.body.prepend (header)


for (var i = 0; i <10; i++){
    var header = document.createElement("h1")
    header.innerHTML = "Hello World"
    header.style.textDecorationLine= "underline"
    header.style.color= "#50C7C7"
    document.body.prepend (header)

}

var div = document.createElement("div")
document.body.append(div)

const names = [
    "steve",
    "larry", 
    "joe", 
    "shirley", 
    "steph", 
    "nate", 
    "rick", 
    "emily"
]

var x; 
for (x of names) {
    document.write (x + "<br>"); 
}
