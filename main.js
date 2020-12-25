// start first JavaScriot program
// console.log("Hello World");
// //<------------------>
// let a=1;
// let b=2;

// const c=a+b;
// console.log(c)

//<------------------>


// let q=307;
// console.log(q)
//<------------------>

// let fname="Nauman";
// let sname="Hassan";

// console.log(fname + " "+ sname +"   " + q)
//<------------------>

//<------------------>
console.log(" ----------------------------------- ")
console.log("|           Assignment              |")
console.log("|     Visa Eligibility Finder       |")
console.log("| Name: NAUMAN HASSAN  Roll# 16767  |")
console.log(" ----------------------------------- ")
console.log("")

const age=55;
let eligible=false;

if (age >=50){
    console.log("You are senior citizen.")
    console.log("Your current age is " + " " + age)
    eligible=true;
    console.log("You are Eligible for VISA")
} else if(age >18){
    console.log("You are young.")
    console.log("Your current age is " + " " + age)
    eligible=true;
    console.log("You are Eligible for VISA")
}else {
    console.log("You are child.") 
    console.log("Your current age is " + " " + age)
    eligible=false;
    console.log("You are not Eligible for VISA")
}

