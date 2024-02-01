// **********************  Date and Time  in Javascript *******************************

/* 
 - Date is a Object
 - Javascript data and time defined in miliseconde  since 1 January 1970 UTC .
 - 1000 miliseconds is equal to 1 seconds.
 - We can create Date object in four way.
    Ex- 
      -- new Date();
      -- new Date(miliseconds);
      -- new Date(Date string);
      -- new Date(year,month,day,hours,minutes,second,milisecond);

 - In javascript month are count form 0 to 11 . January as 0 and Decembar as 11.     
*/

let date1 = new Date();
console.log(date1); // output: 2024-01-31T14:28:11.931Z
console.log(date1.toString()); // current date and time -> output:  Wed Jan 31 2024 19:59:09 GMT+0530 (India Standard Time)

// new Date(miliseconds)
let date2 = new Date(0);

console.log(date2); // epoch time output: 1970-01-01T00:00:00.000Z

//ISO Date (International standard)
let date3 = new Date("2024-01-31"); 
console.log(date3);

// only year and month

let date4 = new Date("2024-01");
console.log(date4);

//  sort and loge date format

let date5 = new Date("10/15/1999"); // "MM/DD/YYYY" sort date format
console.log(date5);

let date6 = new Date("10 15 1999"); // "MM DD YYYY" long date format
console.log(date5);


//new Date(year,month,day,hours,minutes,second,milisecond);
let date7 = new Date(2024 , 1 , 31, 8,50,11,0);

console.log(date7);


console.log(Date.now()); // It's return the numeric value corresponding current time 

let time1 = new Date();
console.log(time1.getFullYear()); // get current year

console.log(time1.getMonth()); // get current month accordingly . 0 to 11 Jan to Dec.

console.log(time1.getDate()); // get current  date  from  ( 1 to 31).

console.log(time1.getDay()); // get current day of the week from(0 to 6).

console.log("time" ,time1.getTime());

// Formating a Date
console.log(`${time1.getDate()}/${time1.getMonth()+1}/${time1.getFullYear()}`) ; // month and date give inconsitance length


// Auto Correction
console.log(new Date( 2005 , 1 , 35));



// toLocalString()

let time2 = new Date();

console.log(time2.toLocaleString("default" , {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "2-digit"
})); // Output : Wednesday, 31 January, 2024 at 10:03:26 pm











