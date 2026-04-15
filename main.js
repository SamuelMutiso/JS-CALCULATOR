// ill now create an empty array so that eacg calculation is stored as an object
let calculationHistory = [];

// this add to history fucntipn will help build the object and push it to the array
function addToHistory(num1, num2, operator, result) {
    const calculation = {
        operand: num1,
        operand: num2,
        operator: operator,
        result: result
    };
    calculationHistory.push(calculation);
}
// now we creating the arithmetic functions
function add( num1, num2) {
    const result = num1 + num2;
    addToHistory(num1, num2, "+", result);
    return result;
}

// we now creating the subtraction function
function subtract(num1, num2) {
    const result = num1 - num2;
    addToHistory(num1, num2, "-", result);
    return result; }

// we now creating the multpilication function function
function multiply(num1, num2) {
    const result = num1 * num2;
    addToHistory(num1, num2, "*", result);
    return result;
}
// now creating the division function
function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    const result = num1/num2
    addToHistory(num1, num2, "/", result);
    return result;
}

// displaying the history of your calculations
function displayHistory () {
    if (calculationHistory.length === 0) {
        console.log("No stored calculations.");
    } else {
        console.log("Calculation History:");
        calculationHistory.forEach((item, index) => {
            console.log(`${index + 1}: ${item.operand1} ${item.operator} ${item.operand2} = ${item.result}`);
        } )
    }
}

// Testing if the calculator work 
console.log(" Calculator Test Drive ");

// Testing addition
add(7, 5); 

// Testing multiplication
multiply(6, 9);

// Testing division
divide(50, 9);

// Testing history display
displayHistory();