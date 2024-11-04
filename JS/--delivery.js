let carrinho = document.querySelector(".carrinho");

document.querySelector("#cart").onclick = () => {
    let menuresponsivo = document.querySelector(".menu-responsivo")
    carrinho.classList.toggle('active');

    formulario.classList.remove('active')

    menuresponsivo.classList.remove('active');
}

let formulario = document.querySelector(".login-form");

document.querySelector("#login").onclick = () => {
    let menuresponsivo = document.querySelector(".menu-responsivo")
    formulario.classList.toggle('active')

    carrinho.classList.remove('active');

    menuresponsivo.classList.remove('active');
}



var swiper = new Swiper(".home-slider", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    grabCursor: true, // Correção aqui
    loop: true,
    centeredSlides: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//menu responsivo //

let menuresponsivo = document.querySelector(".menu-responsivo");
document.querySelector("#menu").onclick = () => {
    let carrinho = document.querySelector(".carrinho");
    let formulario = document.querySelector(".login-form");

    menuresponsivo.classList.toggle('active');
    carrinho.classList.remove('active');
    formulario.classList.remove('active');
   

}




window.onscroll = () => {
    let menuresponsivo = document.querySelector(".menu-responsivo")
    carrinho.classList.remove('active')
    formulario.classList.remove('active')
    formulario.classList.remove('active')
    menuresponsivo.classList.remove('active');

}

let verModal = document.querySelector('.menu-modal-container');
let verModalBox = verModal.querySelector('.menu-modal');

document.querySelectorAll(".menu .box").forEach(menu =>{
    menu.onclick = () => {
        verModal.style.display = 'flex';
        let nome = menu.getAttribute('data-name');

        verModalBox.forEach(vizualizar => {
                let chamada = vizualizar.getAttribute('data-target');
                if(nome ==chamada){
                    vizualizar.classList.add('active')
                }
            }
        ) 
    }
})


verModal.querySelector("#fecha").onclick = () => {
         verModal.style.display = 'none';
         verModalBox.forEach(fecha => {
            fecha.classList.remove('active')
         });
};
