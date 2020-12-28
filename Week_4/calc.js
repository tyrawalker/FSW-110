

document.addEventListener('DOMContentLoaded', init, false)
document.getElementById("add").addEventListener ("click", function () {
    var result1 = document.createElement("div")
    result1.textContent = function(num1, num2){
    num1 + num2
}
document.getElementById ("addition").append(result1)
})