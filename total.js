
const products = [
    {name: 'shampo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 700},
    {name: 'pant', price: 1200}
];

function getShoppingTotla(products){
    let sum = 0;
    for(const product of products){
        sum += product.price;
    }
    return sum;
}

const total = getShoppingTotla(products);
console.log('Total ajke khosabe: ', total);