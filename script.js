$(document).ready(function(){
    const $menuLateral = $('.menu-lateral');
    const $btnMenu = $('.btn-menu');

    $('.carrosel').slick({
        autoplay:true,
        speed:800,
        arrows:false,
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