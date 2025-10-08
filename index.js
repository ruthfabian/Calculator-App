let num1 = 8
let num2 = 2
let num3 = ""
let result = document.getElementById("sum-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
  num3 = num1 + num2
  result.textContent = num3
  console.log(num3)
}

function subtract() {
  num3 = num1 - num2
  result.textContent = num3
  console.log(num3)
}

function  divide(){
  num3 = num1 / num2
  result.textContent = num3
  console.log(num3)
}

function multiply(){
  num3 = num1 * num2
  result.textContent = num3
  console.log(num3)
}



