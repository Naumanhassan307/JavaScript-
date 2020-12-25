//<-------Grade calculator---------->

const marks=90;

let pass=false;
let fail=true;

if (marks >=90){
    pass=true;
    fail=false;
    console.log("Congratulation! You passed your Exam and obtained grade  A+ ")
}else if (marks >=80){
    pass=true;
    fail=false;
    console.log("Congratulation! You passed your Exam and obtained grade  A ")
}else if (marks >=70){
    pass=true;
    fail=false;
    console.log("Congratulation! You passed your Exam and obtained grade  B ")
}else if (marks >=60){
    pass=true;
    fail=false;
    console.log("Congratulation! You passed your Exam and obtained grade  C ")
}else if (marks >=50){
    pass=true;
    fail=false;
    console.log("Congratulation! You passed your Exam and obtained grade  D ")
}else if (marks >=40){
    pass=true;
    fail=false;
    console.log("Congratulation! You passed your Exam and obtained grade  E ")
} else {
    pass=false;
    fail=true;
    console.log("You failed your Exam and obtained grade  F ")
}
