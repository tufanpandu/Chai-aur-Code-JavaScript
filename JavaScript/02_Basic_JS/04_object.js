// Object Destructure

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructure:"Hitesh"
}


//course.coursename  ( Not recommanded)

const {coursename, price, courseInstructure} = course

const {courseInstructure: instructure} = course // You can change the name of the object key 

console.log(instructure);

console.log(coursename);

//===================  API (Application Programming Interface)======================



