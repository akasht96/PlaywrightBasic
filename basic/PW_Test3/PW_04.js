let isPresent=true;
let isDisplayed=true;
let isEnabled=false;

if(isPresent && isDisplayed && isEnabled){
    console.log("READY");
}else if(isPresent && isDisplayed && !isEnabled){
    console.log("DISABLED");
}else if(isPresent && !isDisplayed){
    console.log("HIDDEN");
}else if(!isPresent){
    console.log("NOT FOUND");
}

let severity= !isPresent?"CRITICAL":(!isDisplayed || !isEnabled)?"WARNING":"OK";
console.log(severity);
