// ======= for

const num = []

for(let i =1 ;i <= 10 ;i++){
   num.push(i)
}


console.log(num.join(" "));


// table print

for(let i = 1;i <= 5;i++){
    for(let j = 1;j <= 10;j++){
       // console.log(`${i} * ${j} = ${i*j}`);
    }
}


// break and continue

// for(let i = 1 ; i <= 10;i++){
//     if(i == 5){
//         console.log(`We got the value : ${i}`);
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }


for(let i = 1 ; i <= 10;i++){
    if(i == 5){
        console.log(`We got the value : ${i}`);
        continue;
    }
    console.log(`value of i is ${i}`);
}



