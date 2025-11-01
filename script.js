$(document).ready(function(){
    const $menuLateral = $('.menu-lateral');
    const $btnMenu = $('.btn-menu');
    const $btnNavb = $(".btn-nav");
    const $nav = $(".nav");
    const $btnFechar = $(".btn-esconder-nav");

    $('.carrosel').slick({
        autoplay:true,
        speed:800,
        arrows:false,
    });
    
    $('.parent').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
    });
    
    $btnMenu.on('click', function(){
        $menuLateral.toggleClass('ativo');
    });

    $btnNavb.on("click",function(){
        $nav.toggleClass('nav-ativo');
        $btnNavb.toggleClass('btn-nav sumir')
        $btnFechar.css("bottom","130px")
    });
    $btnFechar.on("click",function(){
        $nav.removeClass('nav-ativo');
        $btnFechar.css('bottom','100px')
        $btnNavb.removeClass('btn-nav sumir')
        $btnNavb.toggleClass('btn-nav sumir')
    })

    
    

    $(document).on('click',function(event){
        if ($menuLateral.hasClass('ativo') && !$(event.target).closest($menuLateral).length && !$(event.target).closest($btnMenu).length) {
            $menuLateral.removeClass('ativo');
        }
    });
});