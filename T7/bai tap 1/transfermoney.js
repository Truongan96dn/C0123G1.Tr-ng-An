function Changemoney() {
  let Amount=document.getElementById("Amount").value;
  let FromA=document.getElementById("From").value;
  let ToA=document.getElementById("To").value;
  let Result;

  if (FromA == "USD"&& ToA == "VND"){
    Result = Amount * 23000 + "  VND";
  }
  else if ( FromA == "VND" && ToA =="USD"){
    Result= Amount/23000 + " USD";
  }
  else {
    Result = " Xin vui long chon lai tien te quy doi";
  }
   document.getElementById("Result").innerHTML=Result;
}

