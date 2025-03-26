function carregarFotosDeCachorros() {
    let galeria = document.getElementById("galeriaDeCachorros");

    for (let i = 0; i < 10; i++) {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    let imgTag = document.createElement("img");
                    imgTag.src = data.message;
                    imgTag.classList.add("fotoDeCachorro"); // Adiciona a classe CSS
                    galeria.appendChild(imgTag);
                }
            });
    }

    // Chama a função para atualizar imagens automaticamente
    setInterval(atualizarImagemAleatoria, 3000); // A cada 5 segundos
}

// Atualiza apenas UMA imagem aleatória
function atualizarImagemAleatoria() {
    let imagens = document.querySelectorAll(".fotoDeCachorro");

    if (imagens.length > 0) {
        let indexAleatorio = Math.floor(Math.random() * imagens.length); // Escolhe uma imagem aleatória
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    imagens[indexAleatorio].src = data.message; // Atualiza apenas essa imagem
                }
            });
    }
}

// Inicia o carregamento das imagens ao abrir a página
window.onload = carregarFotosDeCachorros;
