/**
 * first 100 --> 100
 * 101 To 200 --> 90
 * above 200 -->70
 */
function layeredDiscount(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if(quantity <= 100){
        const totalPrice = quantity * first100Price;
        return totalPrice;
    }
    else if(quantity >= 101 && quantity <= 200){
       const quantitySub = quantity-100;
       const totalSubPrice = quantitySub * second100Price;
    //    console.log(totalSubPrice);
       const totalFirstPrice = (quantity-quantitySub) * first100Price;
        const total = totalFirstPrice + totalSubPrice;
        return total
    }
    else{
        const quantitySub = quantity-200;
       const totalSubPrice = quantitySub * above200Price;
    //    console.log(totalSubPrice);
       const totalFirstPrice = (quantity-quantitySub-100) * first100Price;
    //    console.log(totalFirstPrice);
       const totalSecondPrice = (quantity-quantitySub-100) * second100Price;
    //    console.log(totalSecondPrice);
        const total = totalFirstPrice + totalSecondPrice + totalSubPrice;
        return total

    }
}


const total = layeredDiscount(202);
console.log(total);
