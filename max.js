const disha = 56;
const salman= 95;

if(disha>salman){
    console.log('Disha will get the strawberry.');
}
else{
    console.log('Salman will get the strawberry.');
}

// inside a function
function getMax(num1, num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max = getMax(56, 98);
const max2 = getMax(500, 98);
console.log('max of two is: ', max);
console.log('max of two is: ', max2);