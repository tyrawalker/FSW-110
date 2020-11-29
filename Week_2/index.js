var header = document.createElement("h1")
header.textContent = "Welcome to my JS site"
header.style.textAlign = "center"
header.style.textDecorationLine = "underline"
document.body.prepend (header)

var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript"
newP.style.textAlign = "center"
document.body.append (newP)

var list = document.createElement ("ol")
document.body.append (list)

var one = document.createElement("li")
one.textContent = "Thing One"
one.style.textAlign = "center"
document.body.append (one)

var two = document.createElement ("li")
two.textContent = "Thing Two"
two.style.textAlign = "center"
document.body.append (two)

var three = document.createElement ("li")
three.textContent = "Thing Three"
three.style.textAlign = "center"
document.body.append (three)



