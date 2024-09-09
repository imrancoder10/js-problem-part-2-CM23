const heights = [65, 98, 64, 58, 76, 44, 100];

function getMax(numbers){
    let max = numbers[0];
    for(const number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max;
}

const max = getMax(heights);
// console.log(max);


function lowerSize(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(number < min){
            min = number;
        }
    }
    console.log(min);
}

smallest = [58, 59, 74, 67, 86, 90, 14];
lowerSize(smallest);