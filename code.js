"use strict";

const input0 = document.querySelector("#input0");

const input1 = document.querySelector("#input1");

const result = document.querySelector(".converted-value");

const reqNumber = document.querySelector(".number");

function decimaltoBinary(n) {
  return n.toString(2);
}

function decimaltohexaDecimal(n) {
  //   console.log(n.toString(16));
  return n.toString(16);
}

function decimaltoOctal(n) {
  return n.toString(8);
}

function binarytodecimal(n) {
  return parseInt(n, 2);
}
function binarytohexdecimal(n) {
  var ans = binarytodecimal(n);
  return decimaltohexaDecimal(ans);
}

function binarytooctal(n) {
  var ans = binarytodecimal(n);
  return decimaltoOctal(ans);
}

function hexatoBinary(n) {
  var ans = "";
  var i = 0;
  while (n[i]) {
    switch (n[i++]) {
      case "0":
        ans += "0000";
        break;
      case "1":
        ans += "0001";
        break;
      case "2":
        ans += "0010";
        break;
      case "3":
        ans += "0011";
        brwak;
      case "4":
        ans += "0100";
        break;
      case "5":
        ans += "0101";
        break;
      case "6":
        ans += "0110";
        break;
      case "7":
        ans += "0111";
        break;
      case "8":
        ans += "1000";
        break;
      case "9":
        ans += "1001";
        break;
      case "A":
      case "a":
        ans += "1010";
        break;
      case "B":
      case "b":
        ans += "1011";
        break;
      case "C":
      case "c":
        ans += "1100";
        break;
      case "D":
      case "d":
        ans += "1101";
        break;
      case "E":
      case "e":
        ans += "1110";
        break;
      case "F":
      case "f":
        ans += "1111";
        break;
      default:
        ans += "\nInvalid hexadecimal digit" + n;
    }
  }
  return ans;
}

function hexadecimaltoOctal(n) {
  var ans = hexatoBinary(n);
  return binarytooctal(ans);
}

function hexadecimaltoDecimal(n) {
  var ans = hexatoBinary(n);
  return binarytodecimal(ans);
}

function octaltoDecimal(n) {
  return parseInt(n, 8);
}
function octaltoBinary(n) {
  var ans = octaltoDecimal(n);
  return decimaltoBinary(ans);
}

function octaltoHexadecimal(n) {
  var ans = octaltoDecimal(n);
  return decimaltohexaDecimal(ans);
}
const callback = function () {
  if (reqNumber.value !== "") {
    if (input0.value === "decimal" && input1.value === "binary") {
      result.innerHTML = decimaltoBinary(Number(reqNumber.value));
    } else if (input0.value === "decimal" && input1.value === "octal") {
      result.innerHTML = decimaltoOctal(Number(reqNumber.value));
    } else if (input0.value === "decimal" && input1.value === "hexadecimal") {
      result.innerHTML = decimaltohexaDecimal(Number(reqNumber.value));
    } else if (input0.value === "binary" && input1.value === "decimal") {
      result.innerHTML = binarytodecimal(reqNumber.value);
    } else if (input0.value === "binary" && input1.value === "octal") {
      result.innerHTML = binarytooctal(reqNumber.value);
    } else if (input0.value === "binary" && input1.value === "hexadecimal") {
      result.innerHTML = binarytohexdecimal(reqNumber.value);
    } else if (input0.value === "octal" && input1.value === "binary") {
      result.innerHTML = octaltoBinary(reqNumber.value);
    } else if (input0.value === "octal" && input1.value === "decimal") {
      result.innerHTML = octaltoDecimal(reqNumber.value);
    } else if (input0.value === "octal" && input1.value === "hexadecimal") {
      result.innerHTML = octaltoHexadecimal(reqNumber.value);
    } else if (input0.value === "hexadecimal" && input1.value === "binary") {
      result.innerHTML = hexatoBinary(reqNumber.value);
    } else if (input0.value === "hexadecimal" && input1.value === "decimal") {
      result.innerHTML = hexadecimaltoDecimal(reqNumber.value);
    } else if (input0.value === "hexadecimal" && input1.value === "octal") {
      result.innerHTML = hexadecimaltoOctal(reqNumber.value);
    } else {
      result.innerHTML = reqNumber.value;
    }
  } else {
    alert("Please Enter a number");
  }
};
document.querySelector(".convertbtn").addEventListener("click", callback);

document.querySelector(".convertbtn").addEventListener("click", () => {
  document.title = `From ${input0.value.toUpperCase()} to ${input1.value.toUpperCase()} is ${
    result.innerHTML
  }`;
});

document.querySelector("#swapbtn").addEventListener("click", () => {
  var temp = input0.value;
  input0.value = input1.value;
  input1.value = temp;
  reqNumber.value = "";
  result.innerHTML = "Getting...";
  document.title = `From ${input0.value.toUpperCase()} to ${input1.value.toUpperCase()} is ${
    result.textContent
  }`;
});
