async function weatherDetails() {
  let dehliWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dehli Weather");
    }, 2000);
  });

  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Bangalore Weather");
    }, 5000);
  });

  //   dehliWeather.then(alert);
  //   bangaloreWeather.then(alert);

  console.log("Fetching dehli weather please wait...");
  let dehliW = await dehliWeather;
  console.log("Fetched dehli weather" + dehliW)
  console.log("Fetching bangalore weather please wait...");
  let bangaloreW = await bangaloreWeather;
  console.log("Fetched bangalore weather" + bangaloreW)
  return [dehliW, bangaloreW];
//   Async await always returns a promise
}

console.log("Welcome to weather control room!");
let details = weatherDetails();
details.then((value) => {
    console.log(value);
})
