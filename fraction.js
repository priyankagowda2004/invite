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
      let num = this.numerator * f.denominator - f.numerator * this.denominator;
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

function output_result(f1,f2,result)
{
  console.log("%d/%d + %d/%d is %d/%d", f1.numerator,f1.denominator, f2.numerator, f2.denominator, result.numerator, result.denominator);
}

function main()
{
  let f1 = input_fraction();
  let f2 = input_fraction();
  let f3 = f1.sub(f2)
  output_result(f1,f2,f3);
}

main();
