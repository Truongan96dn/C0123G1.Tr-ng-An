function doSth() {
  // P là số tiền gốc
  // n là số tháng gửi
  // A là lãi xuất kép nhận được
  let P = +prompt(" nhap vao so tien gui ban dau");
  let n = +prompt(" nhap vao so thang da gui");
  switch (n){
    case 1:
      var A = (P * Math.pow((1 + 2 / 1200), n)) - P;
      console.log(" lai xuat ban nhan duoc la : " + A);
      break;
    case 2:
    case 3:
    case 4:
      var A = (P * Math.pow((1 + 5 / 1200), n)) - P;
      console.log(" lai xuat ban nhan duoc la : " + A);
      break;
    case 5:
    case 6:
      var A = (P * Math.pow((1 + 7 / 1200), n)) - P;
      console.log(" lai xuat ban nhan duoc la : " + A);
      break;
    case 7:
    case 8:
    case 9:
      var A = (P * Math.pow((1 + 8 / 1200), n)) - P;
      console.log(" lai xuat ban nhan duoc la : " + A);
      break;
    case 10:
    case 11:
    case 12:
      var A = (P * Math.pow((1 + 9 / 1200), n)) - P;
      console.log(" lai xuat ban nhan duoc la : " + A);
      break;
    default:
      console.log(" xin vui long lien he ngan hang de biet them chi tiet");
  }
}
