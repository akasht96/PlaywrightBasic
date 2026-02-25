function checkTrangle(a,b,c){
    if(a+b>c && a+c>b && b+c>a){
        if(a===b && b===c){
            console.log("Equilateral Triangle");
        }else if(a===b || b===c || a===c){
            console.log("Isosceles Triangle");
        }else{
            console.log("Scalene Triangle");
        }
    }else{
        console.log("not a valid trangle");
    }
}
checkTrangle(5,5,5);
checkTrangle(5,5,3);
checkTrangle(4,5,6);
checkTrangle(1,5,6);

