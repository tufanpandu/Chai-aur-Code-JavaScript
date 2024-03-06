// reduce()

const myNums = [4,5,7,8]

const myTotal = myNums.reduce( (accumelater , currentValue)=>{
    console.log(`Accumelater: ${accumelater} and Current value : ${currentValue}`);

    return accumelater + currentValue;
}, 0)

console.log(myTotal);


const shoppingCart = [
    {
        course: "CSS",
        price: 499
    },
    {
        course: "JS",
        price: 699
    },
    {
        course: "DSA",
        price: 4999
    },
    {
        course: "System Design",
        price: 1499
    }
]


const totalCart =  shoppingCart.reduce((accumelater , currentValue) => accumelater + currentValue.price, 0);


console.log(totalCart);