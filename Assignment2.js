// Task 1
const cubeNumbers = (numbers) => numbers.map(num => Math.pow(num, 3));

// Task 2
const sumElements = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

// Task 3
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const findPrimeNumbers = (numbers) => numbers.filter(isPrime);

// Task 4
const averageOfSquaredOdds = (numbers) => {
    const oddSquares = numbers.filter(num => num % 2 !== 0).map(num => Math.pow(num, 2));
    return oddSquares.reduce((sum, val) => sum + val, 0) / oddSquares.length;
};

// Task 5
const findLongestString = (strings) => strings.reduce((max, str) => str.length > max.length ? str : max, "");

// Task 6
const capitalizeFirstLetters = (sentence) => sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

// Task 7
const filterPassedStudents = (students) => students.filter(student => student.score >= 60);

// Task 8
const createInstanceCounter = () => {
    let count = 0;
    return () => ++count;
};

// Task 9 
const calculator = (num1, num2, operation) => new Promise((resolve, reject) => {
    switch (operation) {
        case "add":
            resolve(num1 + num2);
            break;
        case "subtract":
            resolve(num1 - num2);
            break;
        case "multiply":
            resolve(num1 * num2);
            break;
        case "divide":
            if (num2 === 0) reject("Division by zero error.");
            else resolve(num1 / num2);
            break;
        default:
            reject("Invalid operation.");
    }
});

// Task 10
const calculateTotalScore = (objects) => {
    let total = 0;
    objects.forEach(obj => total += obj.score);
    return total;
};
