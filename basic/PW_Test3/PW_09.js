function userLogin(attempts) {

    // const → fixed credentials & threshold
    const VALID_USERNAME = "admin@testingacademy.com";
    const VALID_PASSWORD = "Test@123";
    const MAX_ATTEMPTS = 3;

    // var → global-style counters
    var totalAttempts = 0;
    var wrongAttempts = 0;
    var accountLocked = false;

    let index = 0; // let → loop variable

    do {

        if (accountLocked === true) {
            console.log("Account is locked. No further attempts allowed.");
            break;
        }

        let username = attempts[index].username;
        let password = attempts[index].password;

        totalAttempts++;

        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            console.log(`Attempt ${totalAttempts}: Login Successful`);
            wrongAttempts = 0; // reset consecutive failures
            break;
        } else {
            wrongAttempts++;
            console.log(`Attempt ${totalAttempts}: FAILED (${wrongAttempts}/3)`);

            if (wrongAttempts >= MAX_ATTEMPTS) {
                accountLocked = true;
                console.log("Account Blocked due to 3 consecutive failed attempts.");
            }
        }

        index++;

    } while (index < attempts.length);

    if (accountLocked === false) {
        console.log("Account Status: ACTIVE");
    } else {
        console.log("Account Status: LOCKED");
    }
}


// Simulated login attempts array
let loginAttempts = [
    { username: "admin@testingacademy.com", password: "wrong1" },
    { username: "admin@testingacademy.com", password: "wrong2" },
    { username: "admin@testingacademy.com", password: "wrong3" },
    { username: "admin@testingacademy.com", password: "Test@123" }
];

userLogin(loginAttempts);