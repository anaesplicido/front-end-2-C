const menuHambButton = document.querySelector(".menu-hamb-button")
const navBar = document.querySelector(".navbar")

menuHambButton.addEventListener("click", () => {
    navBar.classList.toggle("show")
    menuHambButton.classList.toggle("isOpen")
})