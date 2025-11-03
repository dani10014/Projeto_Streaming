$(document).ready(function(){
    // Seleciona os elementos do DOM e os armazena em variáveis para uso posterior
    const $menuLateral = $('.menu-lateral');
    const $btnMenu = $('.btn-menu');
    const $btnNavb = $(".btn-nav");
    const $nav = $(".nav");
    const $btnFechar = $(".btn-esconder-nav");
    const $pageWrapper = $(".page-wrapper");
    const $btnFilmes = $(".btn-filmes");
    const $btnInicio = $(".btn-inicio");
    const $btnSeries = $(".btn-series");
    const $btnAnimacoes = $(".btn-animacoes");
    const $btnAnimes = $(".btn-animes");
    const $btnMinhaLista = $(".btn-favoritos");

    // --- Funções Reutilizáveis ---

    /**
     * Anima a transição de página e redireciona após um tempo.
     * @param {string} url - A URL para redirecionar.
     * @param {string} direction - A direção da animação ('-100%' para esquerda, '100%' para direita).
     */
    function navigateTo(url, direction) {
        $pageWrapper.css('transform', `translateX(${direction})`);
        setTimeout(function() {
            window.location.href = url;
        }, 600);
    }

    // --- Inicializações ---

    // Inicializa o carrossel principal com autoplay
    if ($('.carrosel').length) {
        $('.carrosel').slick({
            autoplay: true,
            speed: 800,
            arrows: false,
        });
    }

    // Inicializa os carrosséis de grid de filmes/séries
    if ($('.parent').length) {
        $('.parent').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
        });
    }

    // --- Manipuladores de Eventos (Event Handlers) ---

    // Evento de clique no botão de menu para abrir/fechar o menu lateral
    $btnMenu.on('click', function(){
        $menuLateral.toggleClass('ativo');
    });

    // Evento de clique no botão da barra de navegação inferior para mostrá-la
    $btnNavb.on("click", function(){
        $nav.toggleClass('nav-ativo');
        $btnNavb.toggleClass('btn-nav sumir');
        $btnFechar.css("bottom", "130px");
    });

    // Evento de clique no botão 'X' para esconder a barra de navegação inferior
    $btnFechar.on("click", function(){
        $nav.removeClass('nav-ativo');
        $btnFechar.css('bottom', '100px');
        $btnNavb.addClass('btn-nav').removeClass('sumir');
    });

    // Eventos de clique para transição de página
    $btnFilmes.on('click', () => navigateTo("filmes.html", "-100%"));
    $btnInicio.on('click', () => navigateTo("index.html", "100%"));
    $btnSeries.on('click', () => navigateTo("series.html", "-100%"));
    $btnAnimacoes.on('click', () => navigateTo("animacoes.html", "-100%"));
    $btnAnimes.on('click', () => navigateTo("animes.html", "-100%"));
    $btnMinhaLista.on('click', () => navigateTo("favoritos.html", "-100%"));
    
    // Evento de clique no documento para fechar o menu lateral se clicar fora dele
    $(document).on('click', function(event){
        if ($menuLateral.hasClass('ativo') && !$(event.target).closest($menuLateral).length && !$(event.target).closest($btnMenu).length) {
            $menuLateral.removeClass('ativo');
        }
    });
});