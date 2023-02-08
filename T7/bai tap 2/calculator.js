
function Add() {
  let number1=document.getElementById("numberA").value;
  let number2=document.getElementById("numberB").value;
  let result= Number(number1)+Number(number2);

  document.getElementById("Result").innerHTML= result;
}
function Sub(){
  let number1=document.getElementById("numberA").value;
  let number2=document.getElementById("numberB").value;
  let result=Number(number1)-Number(number2);

  document.getElementById("Result").innerHTML=result;
}
function Mul(){
  let number1=document.getElementById("numberA").value;
  let number2=document.getElementById("numberB").value;
  let result=Number(number1)*Number(number2);

  document.getElementById("Result").innerHTML=result;
}
function Div(){
  let number1=document.getElementById("numberA").value;
  let number2=document.getElementById("numberB").value;
  let result=Number(number1)/Number(number2);

  document.getElementById("Result").innerHTML=result;
}

