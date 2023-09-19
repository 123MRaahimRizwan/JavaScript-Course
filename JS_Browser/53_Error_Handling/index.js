setTimeout(() => {
    console.log("Hacking Huzaifa's facebook id... Please wait...");
}, 1000);

// Error handling
try {
    setTimeout(() => {
        // This will not be handled but will throw an error, because settimeout is an asynchronous function therefore it is scheduled to be done later, the try catch block only works with synchronous code
        console.log(Huzaifa)
    }, 1000);
}
catch(error) {
    console.log(error);
}


setTimeout(() => {
    console.log("Fetching Huzaifa's username and email... Please wait...");
}, 2000);
setTimeout(() => {
    console.log("Fetched Huzaifa's facebook id... Please wait...");
}, 3000);
setTimeout(() => {
    console.log("Huzaifa's facebook id has been hacked!");
}, 4000);