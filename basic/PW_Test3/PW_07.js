let responseTimes = [120, 230, 450, 510, 180, 620];
let SLA_LIMIT = 500
var min=responseTimes[0],max=responseTimes[0],BreachedCount=0,sum=0;
for(let i=1;i<responseTimes.length;i++){
    if(min>responseTimes[i]){
        min=responseTimes[i];
    }
    if(max<responseTimes[i]){
        max=responseTimes[i];
    }
    if(responseTimes[i]>SLA_LIMIT){
        BreachedCount++;
    }
    sum+=responseTimes[i];
}
let average=BreachedCount/responseTimes.length;
console.log(`minimum response time is: ${min} And Max is : ${max} SLA Breaches : ${BreachedCount} Average : ${average.toFixed(2)}`);
