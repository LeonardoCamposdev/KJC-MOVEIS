const btnMobile = document.querySelector(".btn-mobile");

function ativarMenu(event){
    const nav = document.querySelector(".nav");
    const headerMenu = document.querySelector(".header-menu");
    nav.classList.toggle("active");
    headerMenu.classList.toggle("active");
}

btnMobile.addEventListener("click", ativarMenu);