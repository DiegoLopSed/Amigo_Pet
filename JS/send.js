// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío del formulario para pruebas
        alert("¡Formulario enviado con éxito!");
        form.reset(); // Limpia los campos del formulario después del envío
    });
});
