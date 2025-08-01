import { mostrarModal, cerrarModal } from "./modal.js";

document.getElementById("survey-form").addEventListener("submit", (event) => {
    event.preventDefault();
    mostrarModal();
});

document.getElementById("close-modal").addEventListener("click", () => {
    cerrarModal();
});

closeBtn.addEventListener('click', cerrarModal)