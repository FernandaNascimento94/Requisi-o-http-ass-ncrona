function carregarFotosDeCachorros() {
    let galeria = document.getElementById("galeriaDeCachorros");

    for (let i = 0; i < 10; i++) {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    let imgTag = document.createElement("img");
                    imgTag.src = data.message;
                    imgTag.classList.add("fotoDeCachorro"); 
                    galeria.appendChild(imgTag);
                }
            });
    }
    setInterval(atualizarImagemAleatoria, 3000); 
}

function atualizarImagemAleatoria() {
    let imagens = document.querySelectorAll(".fotoDeCachorro");

    if (imagens.length > 0) {
        let idAleatorio = Math.floor(Math.random() * 9); 
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    imagens[idAleatorio].src = data.message; 
                }
            });
    }
}

window.onload = carregarFotosDeCachorros;
