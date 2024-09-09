/**
 * upto 100: ---> 100
 * more than 101-200: --> 90
 * more than 200:-->70
 */

function discountPrice(quantity){
    if(quantity <= 100){
        const totalPrice = quantity * 100;
        return totalPrice;
    }
    else if(quantity >= 101 && quantity <= 200){
        const totalPrice = quantity * 90;
        return totalPrice;
    }
    else{
        const totalPrice = quantity * 70;
        return totalPrice;
    }
}

const total = discountPrice(150);
console.log('discount price is: ', total);
