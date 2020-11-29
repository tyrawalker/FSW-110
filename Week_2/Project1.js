var header = document.createElement("h1")
header.textContent = "Wierd World of Javascript"
header.style.textAlign = "center"
header.style.textDecorationLine = "underline"
document.body.prepend (header)

var nav = document.createElement ("navbar")
nav.style.display= "flex"
nav.style.alignContent= "space between"
document.body.prepend (nav)

var link1 = document.createElement ("a")
link1.textContent= "DOM"
link1.href= "https://coursework.vschool.io/javascript-dom-manipulation/"
document.body.prepend (link1)

var link2 = document.createElement ("a")
link2.textContent = "scrimba"
link2.href= "https://scrimba.com/scrim/cZn78RS7?pl=pVLNeuV"
document.body.prepend (link2)

var link3 = document.createElement ("a")
link3.textContent = "daily planet"
link3.href= "https://coursework.vschool.io/daily-planet-editor/"
document.body.prepend (link3)

var threeThings = document.createElement ("p")
threeThings.textContent= "Here are three things about javascript"
document.body.append (threeThings)

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

var feet = document.createElement ("footer")
feet.textContent = "Good Bye For Now"
feet.textAlign = "center"
document.body.append (feet)