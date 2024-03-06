// for of loop

const arr = ["tufan", "rahul", "Rashi", "riaz"];

for(const value of arr){
    console.log(value);
}

const str = "Hello Tufan "

for(const s of str){
    console.log(s + " ");
}

// ======= maps

const map = new Map() // object
map.set("In" , "India")
map.set("usa", "America")
map.set("fr", "France");

console.log(map);


for(const [key , value] of map){
    console.log(key ,value);
}



const myObj = {
    "game1": "NFS",
    "game2": "Spiderman"
}
// for( const g of myObj){
//     console.log(g);
// }

// for(const [key , value] of myObj){
//     console.log(key ,value);
// }

