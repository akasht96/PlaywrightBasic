let max_attempt=5;
let count=1;
let success=false;
do{
    let randomValue=Math.random();
    if(randomValue>0.6){
        console.log(`attempt ${count}: SUCCESS (Response 200 OK) API call PASSED after ${count} attempt(s)`);
        return;
    }
    console.log(`attempt ${count}: Failed (Toimeout/Error)`);
    count++;
}while(count<=max_attempt);