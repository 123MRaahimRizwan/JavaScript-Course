let cardContainer = document.getElementById("cardContainer");
let url = "https://kontests.net/api/v1/all";
let response = fetch(url);

response
  .then((value) => {
    return value.json();
  })
  .then((contests) => {
    console.log(contests);
    ihtml = "";
    for (item in contests) {
      console.log(contests[item]);
      ihtml += `<div class="card mx-2 my-4" style="width: 22rem;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Programming_code.jpg/1200px-Programming_code.jpg" class="card-img-top" alt="image">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-title">Status is: ${contests[item].status}</p>
          <p class="card-text">Starts at: ${contests[item].start_time}</p>
          <p class="card-text">Ends at: ${contests[item].end_time}</p>
          <p class="card-text">Hosted by: ${contests[item].site}</p>
          <p class="card-text">Duration: ${Math.round(
            contests[item].duration / 86400,
            1
          )} days</p>
          <a href="${
            contests[item].url
          }" class="btn btn-primary my-2">Visit this Contest</a>
        </div>
      </div>`;
    }
    cardContainer.innerHTML = ihtml;
  });

//  ======= Notes app [Remaining question of the practice set] =======

let n = localStorage.getItem("note");
alert(`Your note is ${n}`);
let note = prompt("Enter your note");
if (note) {
  localStorage.setItem("note", note);
}
let c = confirm("Do you want to delete your note?");
if (c) {
    localStorage.removeItem("note");
    alert("Your note has been deleted successfully");
}
