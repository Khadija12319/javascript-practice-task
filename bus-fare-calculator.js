let x="student";
let age= 20;

if(x==="children"){
    if(age<10){
        console.log("Bus fair free");
    }
}
else if(x==="student"){
    console.log("Get a 50% discount");
}
else if(x==="senior citizen"){
    if(age>=60){
        console.log("Get a 15% discount");
    }
}
else{
    console.log("Give reguar ticket fare 800tk");
}