sessionStorage.setItem("name", "raahim");
sessionStorage.getItem("name");
sessionStorage.clear();
sessionStorage.removeItem("name");

window.onstorage = (e) => {
    alert("Changed")
    console.log(e);
}