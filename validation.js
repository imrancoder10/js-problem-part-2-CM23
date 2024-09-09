function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a number.'
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply('5', '8');
// console.log(result);

// =====================================================

function fullName(first, second){
    if(typeof first !== 'string'){
        return 'Please first name provide a string.';
    }
    else if(typeof second !== 'string'){
        return 'Please second name provide a string.';
    }

    const full = first + ' ' + second;
    return full;
}

const full = fullName('imran',"9");
// console.log(full);

// ========================================================


function getPrice(product){
   if(typeof product !== 'object'){
    return 'Please provide an object.';
   }
    const price = product.price;
    return price;
}

// const price = getPrice({Name: 'Imran Hossain', price: 35, color: 'blue'});
const price = getPrice(5);
// console.log(price);


function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return 'Please provide an array.';
    }
    const second = numbers[1];
    return second;
}

// const second = getSecond({name: 'imran', roll: 120, teacher: 'Bangla'});
const second = getSecond([25, 23, 26, 55]);
console.log(second);