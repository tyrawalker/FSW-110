var square = document.createElement("div")
square.textContent = "Im a box"
square.style.textAlign = "center"
document.body.prepend (square)

document.querySelector ("div").classList.add ("border")


square.addEventListener("mouseover", function() {
    const rndCol = "#0B25E3";
    square.style.backgroundColor = rndCol;
})

square.addEventListener("mousedown", function () {
    square.style.backgroundColor = "#E30B2C";
})

square.addEventListener ("mouseup", function () {
    square.style.backgroundColor= "#E3DF0B";
})

square.addEventListener ("dblclick", function () {
    square.style.backgroundColor = "#05AB31"; 
})

document.body.addEventListener ("scroll", function () {
    document.body.style.backgroundColor = "#F29807";
})