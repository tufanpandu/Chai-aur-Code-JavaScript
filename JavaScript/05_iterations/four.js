const myObj = {
    js: "Javascript",
    cpp: "C++",
    py: "Python",
    rb: "ruby"
}

for(const k in myObj){
    //console.log(k);
    console.log(`${k} :${myObj[k]}`)
}