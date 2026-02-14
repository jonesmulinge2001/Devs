function calculator(num1, num2, operator){
    if(operator === '+') {
        return num1 + num2
    }
    else if(operator === '-') {
        return num1 - num2
    }
    else if(operator === '*') {
        return num1 * num2
    }
    else if(operator === '/') {
        return num1 / num2
    }
    else{
        return 'Invalid operator'
    }
}

// call the function
let result = calculator(23,43, '-')
console.log(result);
