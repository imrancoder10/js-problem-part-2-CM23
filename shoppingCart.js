const products = [
    {quantity: 4 ,name: 'shampo',  price: 300},
    {quantity: 8 ,name: 'chiruni', price: 100},
    {quantity: 5 ,name: 'shirt', price: 700},
    {quantity: 7 ,name: 'pant', price: 1200},
];



function cartTotal(products){
    let sum = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        sum += thisProductCost;
    }
    return sum;
}

const total = cartTotal(products);
console.log(total);