export function mostrarModal() {
    const modal = document.getElementById("modal-success");
    modal.classList.remove("hidden");
}

export function cerrarModal() {
    const modal = document.getElementById("modal-success");
    modal.classList.add("hidden");
}
