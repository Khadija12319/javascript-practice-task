let me=86;
let friend=67;

if(me>80){
    if(friend>=80){
        console.log("Go for a Lunch");
    }
    else if(friend<80 && friend>=60){
        console.log("Good Luck next time friend");
    }
    else if(friend<60 && friend>=40){
        console.log("Unseen Message");
    }
    else{
        console.log("Block friend");
    }
}
else{
    console.log("Go home and sleep and act sad");
}