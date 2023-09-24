const menuEmail = document.querySelector('.navbar-email'); //Tomamos la etiqueta por su clase
const desktopMenu = document.querySelector('.desktop-menu'); //Tomamos la etiqueta por su clase
const mobileMenu = document.querySelector('.mobile-menu'); //Tomamos la etiqueta por su clase
const menuHamIcon = document.querySelector('.menu'); //Tomamos la etiqueta por su clase para mobil
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart'); //Tomamos la etiqueta por su clase para mobil
const aside = document.querySelector('.product-detail'); //Tomamos la etiqueta por su clase para mobil
const cardsContainer = document.querySelector('.cards-container'); //Tomamos la etiqueta por su clase para mobil

menuEmail.addEventListener('click', toggleDesktopkMenu); // llamamos la fncion al hacer clic
menuHamIcon.addEventListener('click', toggleMobileMenu); // llamamos la fncion al hacer clic
menuCarritoIcon.addEventListener('click', toggleCarritoAside); // llamamos la fncion al hacer clic

function toggleDesktopkMenu() {

    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive'); //toggle agrega o quita la clase css segun si la tiene o no
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive'); //toggle agrega o quita la clase css segun si la tiene o no
}

function toggleCarritoAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed = desktopMenu.classList.contains('inactive');

    if (!isMenuDesktopClosed) {
        desktopMenu.classList.add('inactive');
    }

    //si mobile open esta open hay que cerrarlo
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); //toggle agrega o quita la clase css segun si la tiene o no

}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> 

      */

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
    
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);