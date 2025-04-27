document.addEventListener('DOMContentLoaded', function() {

    // --- Animação de Texto Rolante Infinito --- 
    const scrollingTextElements = document.querySelectorAll('.scrolling-text');

    scrollingTextElements.forEach(element => {
        const span = element.querySelector('span');
        if (span) {
            const content = span.innerHTML;
            // Duplica o conteúdo para criar o efeito infinito contínuo
            // Ajuste o número de repetições se necessário para preencher larguras maiores
            let repeatedContent = '';
            for (let i = 0; i < 5; i++) { // Repete 5 vezes, ajuste conforme necessário
                repeatedContent += content + '&nbsp;&nbsp;&nbsp;'; // Adiciona espaço entre repetições
            }
            span.innerHTML = repeatedContent;
        }
    });

    // --- Funcionalidade da Carta Clicável e Modal --- 
    const letterContainer = document.getElementById('letterContainer');
    const letterModal = document.getElementById('letterModal');
    const closeButton = document.getElementById('closeButton');
    const envelope = document.getElementById('envelope'); // Elemento do envelope

    if (letterContainer && letterModal && closeButton && envelope) {
        // Abrir a carta
        letterContainer.addEventListener('click', () => {
            letterModal.classList.add('show');
        });

        // Fechar a carta clicando no botão X
        closeButton.addEventListener('click', () => {
            letterModal.classList.remove('show');
        });

        // Fechar a carta clicando fora do papel (no fundo escuro)
        letterModal.addEventListener('click', (event) => {
            // Verifica se o clique foi no fundo do modal, não no papel da carta
            if (event.target === letterModal) {
                letterModal.classList.remove('show');
            }
        });
    }

    // --- Opcional: Controle de Música --- 
    const backgroundMusic = document.getElementById("backgroundMusic");
    const toggleMusicButton = document.getElementById("toggleMusic");

    if (backgroundMusic && toggleMusicButton) {
        // Tenta tocar a música automaticamente (pode ser bloqueado pelo navegador)
        // Nota: Autoplay com som geralmente requer interação do usuário primeiro.
        // Vamos iniciar pausado e deixar o usuário clicar.
        // backgroundMusic.play().catch(error => {
        //     console.log("Autoplay bloqueado pelo navegador:", error);
        // });

        toggleMusicButton.addEventListener("click", () => {
            if (backgroundMusic.paused) {
                backgroundMusic.play().catch(error => {
                    console.error("Erro ao tocar música:", error);
                    // Informar ao usuário que não foi possível tocar (ex: alert ou mensagem na tela)
                });
                toggleMusicButton.textContent = "Pausar Música";
            } else {
                backgroundMusic.pause();
                toggleMusicButton.textContent = "Tocar Música";
            }
        });
    }

    // --- Opcional: Animação de Corações Caindo --- 
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw"; // Posição horizontal aleatória
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duração aleatória (2-5s)
        heart.style.opacity = Math.random() * 0.5 + 0.3; // Opacidade aleatória (0.3 a 0.8)
        heart.style.fontSize = Math.random() * 15 + 10 + "px"; // Tamanho aleatório (10px a 25px)
        heart.innerHTML = "❤️"; // Ou use um caractere de coração ou imagem
        document.body.appendChild(heart);

        // Remove o coração depois que a animação termina + um pequeno buffer
        setTimeout(() => {
            heart.remove();
        }, 5000); // Tempo um pouco maior que a duração máxima da animação (2+3=5s)
    }

    // Cria corações em intervalos regulares
    // Descomente a linha abaixo para ativar os corações
    setInterval(createHeart, 500); // Ajuste o intervalo (em ms) conforme desejado (500ms = 0.5s)

    // Adicione o CSS correspondente para a classe .heart no arquivo style.css

});

