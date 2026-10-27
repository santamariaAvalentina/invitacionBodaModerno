
document.addEventListener("DOMContentLoaded", () => {
    const portada = document.querySelector("#portada");
    const botonAbrir = document.querySelector("#abrirInvitacion");
    const sobre = document.querySelector(".sobre");
    const libro = document.querySelector("#libro");
    const botonVolver = document.querySelector("#volverPortada");

    if (!portada || !botonAbrir || !sobre || !libro) {
        console.error("No se encontraron todos los elementos de la invitación.");
        return;
    }

    let abierto = false;
    let volviendo = false;

    // Abrir la invitación.
    botonAbrir.addEventListener("click", () => {
        if (abierto || volviendo) return;

        abierto = true;

        botonAbrir.disabled = true;
        botonAbrir.setAttribute("aria-expanded", "true");

        sobre.classList.add("sobre-abierto");
        portada.classList.add("invitacion-abierta");

        libro.inert = false;
        libro.setAttribute("aria-hidden", "false");

        requestAnimationFrame(() => {
            libro.classList.add("abierto");
        });
    });

    // Volver a la portada con la animación de los anillos.
    if (botonVolver) {
        botonVolver.addEventListener("click", () => {
            if (!abierto || volviendo) return;

            volviendo = true;
            botonVolver.disabled = true;

            const pantallaAnillos = document.createElement("div");

            pantallaAnillos.setAttribute("aria-hidden", "true");

            pantallaAnillos.innerHTML = `
                <div style="
                    position: fixed;
                    inset: 0;
                    z-index: 99999;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 18px;
                    background: #fffdf8;
                ">
                    <div style="
                        position: relative;
                        width: 90px;
                        height: 90px;
                    ">
                        <span style="
                            position: absolute;
                            left: 12px;
                            top: 25px;
                            width: 48px;
                            height: 48px;
                            border: 2px solid #b99a62;
                            border-radius: 50%;
                            animation: anilloIzq 1s ease-in-out infinite alternate;
                        "></span>

                        <span style="
                            position: absolute;
                            right: 12px;
                            top: 25px;
                            width: 48px;
                            height: 48px;
                            border: 2px solid #b99a62;
                            border-radius: 50%;
                            animation: anilloDer 1s ease-in-out infinite alternate;
                        "></span>
                    </div>

                    <p style="
                        margin: 0;
                        color: #604b3c;
                        font-family: Montserrat, sans-serif;
                        font-size: 11px;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                    ">Tu Invitación · 2026</p>

                    <style>
                        @keyframes anilloIzq {
                            to {
                                transform: translateX(8px) rotate(-15deg);
                            }
                        }

                        @keyframes anilloDer {
                            to {
                                transform: translateX(-8px) rotate(15deg);
                            }
                        }
                    </style>
                </div>
            `;

            document.body.appendChild(pantallaAnillos);

            window.setTimeout(() => {
                window.location.reload();
            }, 700);
        });
    }
});
