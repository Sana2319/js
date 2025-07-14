const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {    // acc -> accumulator = initialValue, currval -> currentValue
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

        // acc: 5 and currval: 1
        // acc: 6 and currval: 2
        // acc: 8 and currval: 3
        // 11
        // if instead of 5 it would be 0:
        // acc: 0 and currval: 1
        // acc: 1 and currval: 2
        // acc: 3 and currval: 3
        // 6

const myTotal = myNums.reduce( (acc, currVal) => acc+currVal, 0)
console.log(myTotal);  // 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);  // 22996