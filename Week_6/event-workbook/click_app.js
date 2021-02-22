// make the box disapear when the user clicks it

const divBox = document.querySelector(".red-box");

divBox.addEventListener("click", function(e){
    e.target.style.display = "none";
    document.querySelector("h3").append(" all gone");
})

