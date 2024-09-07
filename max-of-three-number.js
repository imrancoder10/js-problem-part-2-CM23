const jim = 56;
const tim = 89;
const kim = 68;
if(jim > tim && jim > kim){
    console.log('Jim is boss.');
}
else if(tim > jim && tim > kim){
    console.log('Tim is the boss.');
}
else{
    console.log('Kim is the boss.');
}

// Inside function

function maxOfThree (num1, num2, num3){
   if(num1 > num2 && num2 > num3){
    return num1;
   }
   else if(num2 > num1 && num2 > num3){
    return num2;
   }
   else {
    return num3;
   }
}

const largestNumber = maxOfThree(25, 500, 90);
// console.log(largestNumber);


// Who is max in more number..............
const max = Math.max(12, 15, 90);
// console.log(max);