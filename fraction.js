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




const prompt=require('prompt-sync')();
class Fraction
  {
    constructor(numerator,denominator)
    {
      this.numerator=numerator;
      this.denominator=denominator;
    }
    add(f)
    {
      let den = this.denominator * f.denominator;
      let num = ((this.numerator * f.denominator) * (f.numerator * this.denominator));
      let g = gcd(num,den);
      console.log(g);
      return new Fraction(num/g,den/g);
    }
  }
function gcd(a, b)
{
    let t=0;
    console.log(a,b)
    while (b != 0)
      {
        t = b
        b = a % b
        a = t
        console.log(a,b,t);
      }
    return a;
}
function input_fraction()
{
    let numerator = parseInt(prompt("enter the numerator of the fraction: "));
    let denominator = parseInt(prompt("enter the denominator of the fraction: "));
  return new Fraction(numerator,denominator);
}
// function main()
// {
//   let a1,a2,b1,b2;
//   [a1,b1,a2,b2]=input();
//   let fraction=add(a1,b1,a2,b2);
//   console.log("the addition of two fraction is %d/%d",fraction.numerator,fraction.denominator);

function output_result(f1,f2,result)
{
  console.log("%d/%d * %d/%d is %d/%d", f1.numerator,f1.denominator, f2.numerator, f2.denominator, result.numerator, result.denominator);
}

function main()
{
  let f1 = input_fraction();
  let f2 = input_fraction();
  let f3 = f1.add(f2)
  output_result(f1,f2,f3);
}

main();
