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