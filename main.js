$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    }) 

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endereçoDaNovaImagem = $('#adicionar-imagem').val();
        const novoItem = $('<li style= "display: none"></li>');
        $(`<img src="${endereçoDaNovaImagem}" />`).appendTo(novoItem); // com essa tag 'appendTo' ele pega o elemento e adiciona dentro do li 
        $(`
            <div class= "style-link-img" 
                <a href= "${endereçoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real"
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); // adicionou a imagem no 'li', agora adiciona o 'novoItem' no 'ul'
        $(novoItem).fadeIn(); // função para aparecer a imagem lento
        $('#adicionar-imagem').val(' '); //limpar o conteúdo do formulário
    })
})