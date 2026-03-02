var userCount=1;

const USER_COUNT=8;
const roles=["admin","editor","viewer","tester","manager"];
for(let i=0;i<USER_COUNT;i++){

    let id="USR-"+String(userCount).padStart(4,"0");

    let name="TestUser"+userCount;
    let email="TestUser"+userCount+"testingacademy.com";
    let inactive=userCount%3===0?"INACTIVE":"ACTIVE";
    let role=roles[i%roles.length];
    console.log({UserID: id, Name : name, Email : email, Role : role,Inactive:inactive});
    userCount++;
}