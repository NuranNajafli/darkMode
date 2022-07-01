let btn = document.getElementById("btn")
let par = document.getElementById("par")
let check = window.localStorage.getItem("darkmode");

if (check == null) {
    window.localStorage.setItem("darkmode", "0");

}
if (check == "1") {
    document.body.classList.add("dark");
    par.classList.add("paragraph")
}
btn.addEventListener("click", () => {
    if (window.localStorage.getItem("darkmode") == "1") {
        document.body.classList.remove("dark");
        par.classList.remove("paragraph")
        window.localStorage.setItem("darkmode", "0");
    } else {
        document.body.classList.add("dark");
     par.classList.add("paragraph")

        window.localStorage.setItem("darkmode", "1");
    }
})

