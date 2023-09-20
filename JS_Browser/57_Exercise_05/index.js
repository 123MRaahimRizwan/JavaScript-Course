const hackerProgram = async () => {
    let username = prompt("Enter Username");
    let site = prompt("Enter the site for which this username is available");

    let initial = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Initializing Hack Program...");
        }, 1000);
    })

    let hackUsername = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hacking ${username}... ${username} found...`);
        }, 2000);
    })

    let hackSite = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Connecting to ${site}...`);
        }, 3000);
    })

    let hacked = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hacked ${username} found on ${site}...`);
        }, 4000);
    })

    const sleep = async (seconds) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(seconds);
            }, seconds * 1000);
        })
    }
    
    let init = await initial;
    let name = await hackUsername;
    let hsite = await hackSite;
    let hack  = await hacked;
    let array = [init, name, hsite, hack]
    
    let h = document.getElementById("hacker");
    for (let i = 0; i <array.length; i++) {
        await sleep(0.5)
        h.innerHTML = h.innerHTML + array[i] + "<br>";
        
    }
}

hackerProgram();
