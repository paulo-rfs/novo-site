const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao) {

    let curtiu = false;

    botao.addEventListener("click", function() {

        const numero = botao.querySelector("span");

        if (curtiu === false) {
            numero.textContent = 1;
            curtiu = true;
        } else {
            numero.textContent = 0;
            curtiu = false;
        }

    });

});