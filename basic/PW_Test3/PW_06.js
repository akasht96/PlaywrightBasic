function BugTracker(frequency,impact){
    let severity;
    if(frequency==="always"){
        if(impact==="blocker"){
            severity="P0";
        }else if(impact==="major"){
            severity="P1";
        }else if(impact==="minor"){
            severity="P2";
        }
    }else if(frequency==="often"){
        if(impact==="blocker"){
            severity="P1";
        }else if(impact==="major"){
            severity="P2";
        }else if(impact==="minor"){
            severity="P3";
        }
    }else if(frequency==="rarely"){
        if(impact==="blocker"){
            severity="P2";
        }else if(impact==="major"){
            severity="P3";
        }else if(impact==="minor"){
            severity="P4";
        }
    }
    return severity;
}

let result=BugTracker("always","blocker");
console.log(result);