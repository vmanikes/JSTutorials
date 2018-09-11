try {
    throw "TOO big";
}

catch (err) {
    console.log("ERROR")
    console.log(err);
}

finally {
    console.log("Complete")
}

