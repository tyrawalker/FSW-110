

document.addEventListener('DOMContentLoaded', init, false)

document.getElementById("add").addEventListener ("click", function () {
    var result1 = document.createElement("div")
    result1.textContent = function(num1, num2){
    document.getElementById("num1") + document.getElementById("num2")
}
document.getElementById ("addition").append(result1)
})

document.getElementById("sub").addEventListener ("click", function () {
    var result2 = document.createElement("div")
    result2.textContent = function(num3, num4){
    document.getElementById("num3") - document.getElementById("num4")
}
document.getElementById ("subtraction").append(result2)
})

document.getElementById("mul").addEventListener ("click", function () {
    var result3 = document.createElement("div")
    result3.textContent = function(num5, num6){
    document.getElementById("num5") * document.getElementById("num6")
}
document.getElementById ("mulitply").append(result3)
})