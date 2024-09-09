const mobiles = [
    {name: 'samsung', price: 20000, camera: '10mp', color: 'black'},
    {name: 'xoami', price: 14000, camera: '12mp', color: 'black'},
    {name: 'Oppo', price: 10000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 2000, camera: '12mp', color: 'black'},
    {name: 'Walton', price: 20500, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 100, camera: '12mp', color: 'black'},
];

// function =======================
function getCheapestPhone(phones){
    let min = phones[0];
   for (const phone of phones){
    if(phone.price < min.price){
        min = phone;
    }
   }
   return min;
}

const cheap = getCheapestPhone(mobiles);
console.log('Cheapest Phone is : ', cheap);

// self work for max price
