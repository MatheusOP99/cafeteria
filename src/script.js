// Função para verificar quando mostrar/ocultar o botão
var isBtnVisible = false; // Adicionamos uma variável para controlar a visibilidade do botão

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var btnScrollTop = document.getElementById("btn-scroll-top");

    var shouldShowBtn = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20);

    if (shouldShowBtn && !isBtnVisible) {
        btnScrollTop.style.display = "block";
        isBtnVisible = true;
    } else if (!shouldShowBtn && isBtnVisible) {
        btnScrollTop.style.display = "none";
        isBtnVisible = false;
    }
}

// Função para fazer a animação de scroll até o topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
