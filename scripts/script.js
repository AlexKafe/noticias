        
        // -- MENSAGEM --
        const overlay = document.getElementById("overlay");
        const message = document.getElementById("msg");
        const closeButton = document.getElementById("closeButton");

        // Exibe a mensagem quando a página é carregada
        window.onload = function() {
            overlay.style.display = "block";
        };

        // Fecha a mensagem quando o botão é clicado
        closeButton.addEventListener("click", function() {
            overlay.style.display = "none";
        });
        //made by Chatgpt : v
        
        // -- SECOES -- 
        const expansivel = document.querySelector('.expansivel');
        const conteudo = expansivel.querySelector('.conteudo');
        const chevron = expansivel.querySelector('.chevron');

        document.querySelectorAll('.expansivel').forEach(function(expansivel) {
        const conteudo = expansivel.querySelector('.conteudo');
        const chevron = expansivel.querySelector('.chevron');

        expansivel.addEventListener('click', function () {
            if (conteudo.style.display === 'none' || conteudo.style.display === '') {
                conteudo.style.display = 'block';
                chevron.style.transform = 'rotate(180deg)';
            } else {
                conteudo.style.display = 'none';
                chevron.style.transform = 'rotate(0deg)';
            }
        });
    });
    //eu love tu chat gpt :)