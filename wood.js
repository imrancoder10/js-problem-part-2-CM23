/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;
    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

const wood = woodQuantity(1, 5, 2);
// console.log(wood, 'cft');

/**
 * shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 */

function dressPrice(shirtQuantity, pantQuantity, shoeQuantity){
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const shirtTotalPrice = shirtPrice * shirtQuantity;
    const pantTotalPrice = pantPrice * pantQuantity;
    const shoeTotalPrice = shoePrice * shoeQuantity;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
    return totalPrice;

}

const price = dressPrice(2, 0, 1);
console.log(price);