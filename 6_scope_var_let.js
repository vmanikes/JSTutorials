let iAmGlobal = "some value";

if (true) {
    // iAmLocal is local to this block only
    // if you change let with var the value will be global
    let iAmLocal = "some more value";
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

// Error
console.log(iAmLocal);