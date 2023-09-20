let promise = fetch("https://api.quran.com/api/v4/chapters?language=en")

promise.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json();
}).then((value) => {
    console.log(value);
});