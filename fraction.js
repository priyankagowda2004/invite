const prompt=require('prompt-sync')();
//class unit fraction
//Addition ,Subraction,Multiplication, Division.
function calculate() {
  const num1 = parseInt(prompt("Enter numerator of first fraction:"));
  const den1 = parseInt(prompt("Enter denominator of first fraction:"));
  const num2 = parseInt(prompt("Enter numerator of second fraction:"));
  const den2 = parseInt(prompt("Enter denominator of second fraction:"));

  const addResult = addFractions(num1, den1, num2, den2);
  const subResult = subtractFractions(num1, den1, num2, den2);
  const mulResult = multiplyFractions(num1, den1, num2, den2);
  const divResult = divideFractions(num1, den1, num2, den2);

  console.log(`Addition: ${addResult}`);
  console.log(`Subtraction: ${subResult}`);
}

function addFractions(num1, den1, num2, den2) {
  const resultNum = num1 * den2 + num2 * den1;
  const resultDen = den1 * den2;
  return simplifyFraction(resultNum, resultDen);
}

function subtractFractions(num1, den1, num2, den2) {
  const resultNum = num1 * den2 - num2 * den1;
  const resultDen = den1 * den2;
  return simplifyFraction(resultNum, resultDen);
}
function simplifyFraction(num, den) {
  const gcd = findGCD(num, den);
  const simplifiedNum = num / gcd;
  const simplifiedDen = den / gcd;
  return `${simplifiedNum}/${simplifiedDen}`;
}

function findGCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
}


calculate();
