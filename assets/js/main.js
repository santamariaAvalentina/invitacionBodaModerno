
document.addEventListener("DOMContentLoaded", () => {
    const portada = document.querySelector("#portada");
    const botonAbrir = document.querySelector("#abrirInvitacion");
    const sobre = document.querySelector(".sobre");
    const libro = document.querySelector("#libro");

    if (!portada || !botonAbrir || !sobre || !libro) {
        console.error(
            "No se encontraron todos los elementos de la invitación."
        );
        return;
    }

    let abierto = false;

    botonAbrir.addEventListener("click", () => {
        if (abierto) return;

        abierto = true;
        botonAbrir.disabled = true;
        botonAbrir.setAttribute("aria-expanded", "true");

        sobre.classList.add("sobre-abierto");
        portada.classList.add("invitacion-abierta");

        libro.inert = false;
        libro.setAttribute("aria-hidden", "false");

        // Activa simultáneamente el giro de ambas mitades.
        requestAnimationFrame(() => {
            libro.classList.add("abierto");
        });
    });
});
