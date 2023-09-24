const menuEmail = document.querySelector('.navbar-email'); //Tomamos la etiqueta por su clase
const desktopMenu = document.querySelector('.desktop-menu'); //Tomamos la etiqueta por su clase
const menuHamIcon = document.querySelector('.menu'); //Tomamos la etiqueta por su clase para mobil
const mobileMenu = document.querySelector('.mobile-menu'); //Tomamos la etiqueta por su clase para mobil

menuEmail.addEventListener('click', toggleDesktopkMenu); // llamamos la fncion al hacer clic
menuHamIcon.addEventListener('click', toggleMobileMenu); // llamamos la fncion al hacer clic

function toggleDesktopkMenu(){
    desktopMenu.classList.toggle('inactive'); //toggle agrega o quita la clase css segun si la tiene o no
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive'); //toggle agrega o quita la clase css segun si la tiene o no
}