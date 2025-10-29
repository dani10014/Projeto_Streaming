$(document).ready(function(){
    const $menuLateral = $('.menu-lateral');
    const $btnMenu = $('.btn-menu');

    $('.carrosel').slick({
        autoplay:true,
        speed:800,
        arrows:false,
    });
    
    $('.parent').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:true,
    });
    
    $btnMenu.on('click', function(){
        $menuLateral.toggleClass('ativo');
    });

    $(document).on('click',function(event){
        if ($menuLateral.hasClass('ativo') && !$(event.target).closest($menuLateral).length && !$(event.target).closest($btnMenu).length) {
            $menuLateral.removeClass('ativo');
        }
    });
});