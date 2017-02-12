/*
Creates a calculator Javascript object that has a functions to add/subtract/multiply/divide. It should allow me to do something like this.
*/

class Calculator{

	constructor(){
	// This is a simple arithmetic calculator.
	// Properties I could imagine it having are multiple calculator modes,
	// such as arithmetic, scientific, and statistical.
	// That doesn't seem relevant to this case, so I'm leaving this empty.
		
	}

	add(number1, number2){

		if(number1 != null && number2 != null){
			return number1 + number2;
		}
		else {

			return null;
		}
	}

	subtract(number1, number2){

		if(number1 != null && number2 != null){
			return number1 - number2;
		}
		else {
			return null;
		}
	}

	multiply(number1, number2){

		if(number1 != null && number2 != null){
			return number1 * number2;
		}
		else {
			return null;
		}
	}

	divide (number1, number2){

		if(number1 != null && number2 != null){
			return number1/number2;
		}
		else {
			return null;
		}
	}

}

console.log("Calculator Tests...");

Calc = new Calculator();

console.log("2 + 2: ", Calc.add(2, 2));// returns 4

console.log("10 - 3: ", Calc.subtract(10, 3)); // returns 7
console.log("10 - (-3): ", Calc.subtract(10, -3)); // returns 13

console.log("2 * 10: ", Calc.multiply(2,10)); // returns 20

console.log("20/10: ", Calc.divide(20,10)); // returns 2
console.log("null/10: ", Calc.divide(null,10)); // returns null


