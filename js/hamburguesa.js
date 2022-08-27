/*Menu hamburguesa*/
const nav_ul_hbtn = document.querySelector(".nav-ul-hbtn");
const nav_ul = document.querySelector(".nav-ul");

nav_ul_hbtn.addEventListener("click", () => {
    nav_ul.classList.toggle("nav-ul-hbtn_v");

//     if (nav_ul.classList.contains("nav-ul-hbtn_v")) {
//         nav_ul_hbtn.setAttribute ("aria-label", "Cerrar menú")
//     } else {
//         nav_ul_hbtn.setAttribute ("aria-label", "Abrir menú");
//     }
});