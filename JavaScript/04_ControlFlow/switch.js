const month = 5

switch (month) {
    case 1: 
        console.log("January");
        break;
    case 2:
        console.log("February"); 
        break;
    case 3:
        console.log("March");  
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
    case 8: // We can group the case     
        console.log("July");
        break;
    default:
        console.log("We don't have any month")
}