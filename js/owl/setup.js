$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10, //Alterar margem entre as mini imagens
    nav:true, //Flechas para passar filmes/serie
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5 //quando tela chegar ao 1000px pode adicionar 5 elementos na tela (imagem)
        }
    }
})