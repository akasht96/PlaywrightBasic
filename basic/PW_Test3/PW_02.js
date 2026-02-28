const testResult=["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passCount=0;
let failCount=0;
let skipCount=0;
let totalTest=testResult.length;
for(let i=0;i<testResult.length;i++){
    if(testResult[i]==="pass")
        passCount++;
    if(testResult[i]==="fail")
        failCount++;
    if(testResult[i]==="skip")
        skipCount++;
}

let passRate=(passCount/totalTest)*100;
let verdict;
if(failCount === 0)
    verdict="ready for release";
else if (failCount <= 2)
    verdict="review"
else if(failCount >2)
    verdict="block release"
console.log(`Total Tests : ${totalTest} Passed : ${passCount} Failed : ${failCount}
     Skipped : ${skipCount} Pass Rate : ${passRate} VERDICT : ${verdict}`);