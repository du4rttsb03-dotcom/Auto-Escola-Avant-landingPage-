document.addEventListener("DOMContentLoaded", function () {
    // Primeira função: Botão por ID
    const btn = document.getElementById("btnWhatsapp");
    if (btn) {
        btn.addEventListener("click", function () {
            const phone = "551147074720";
            const message = "Olá! Gostaria de tirar uma dúvida.";
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        });
    }

    // Segunda função: Botão por Classe (Primeiro elemento da lista)
    const btn1 = document.getElementsByClassName("btn-action")[0];
    if (btn1) {
        btn1.addEventListener("click", function () {
            const phone = "551147074720";
            const message = "Olá! Gostaria de tirar uma dúvida.";
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        });
    }
}); // <--- Este aqui fecha o DOMContentLoaded corretamente