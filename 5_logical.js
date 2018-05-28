// && AND
// || OR

let isVerified = true;
let isLoggedIn = true;
let isValid = false;

if (isVerified && isLoggedIn) {
    console.log("OK")
}
else if (isLoggedIn || isValid) {
    console.log("NOT OK");
}