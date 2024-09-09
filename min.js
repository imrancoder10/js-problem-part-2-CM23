const prices = [20000, 50000, 60000, 90000, 12000, 35000];

function getMin(numbers){
    min = numbers[0];
    for(const number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}

const minPrice = getMin(prices);
console.log(minPrice);