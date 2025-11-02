$(document).ready(function(){
    // Seleciona os elementos do DOM e os armazena em variáveis para uso posterior
    const $menuLateral = $('.menu-lateral');
    const $btnMenu = $('.btn-menu');
    const $btnNavb = $(".btn-nav");
    const $nav = $(".nav");
    const $btnFechar = $(".btn-esconder-nav");
    const $btnInicio = $(".btn-inicio");
    const $pageWrapper = $(".page-wrapper");

    // Inicializa o carrossel principal com autoplay
    $('.carrosel').slick({
        autoplay:true,
        speed:800,
        arrows:false,
    });
    
    // Inicializa os carrosséis de grid de filmes/séries
    $('.parent').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
    });
    
    // Evento de clique no botão de menu para abrir/fechar o menu lateral
    $btnMenu.on('click', function(){
        $menuLateral.toggleClass('ativo');
    });
    
    // Evento de clique no botão da barra de navegação inferior para mostrá-la
    $btnNavb.on("click",function(){
        $nav.toggleClass('nav-ativo');
        $btnNavb.toggleClass('btn-nav sumir')
        $btnFechar.css("bottom","130px")
    });

    // Evento de clique no botão 'X' para esconder a barra de navegação inferior
    $btnFechar.on("click",function(){
        $nav.removeClass('nav-ativo');
        $btnFechar.css('bottom','100px')
        $btnNavb.removeClass('btn-nav sumir')
        $btnNavb.toggleClass('btn-nav sumir')
    })
    
    // Evento de clique no botão "Início" para transição de página
    $btnInicio.on('click', function(){
        $pageWrapper.css('transform','translateX(100%)');
        setTimeout(function() { 
            window.location.href = "index.html";
        }, 600); 
    })

    // Evento de clique no documento para fechar o menu lateral se clicar fora dele
    $(document).on('click',function(event){
        if ($menuLateral.hasClass('ativo') && !$(event.target).closest($menuLateral).length && !$(event.target).closest($btnMenu).length) {
            $menuLateral.removeClass('ativo');
        }
    });
});