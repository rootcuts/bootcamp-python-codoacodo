document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const response = await fetch(form.getAttribute("action"), {
            method: "POST",
            headers: {
                "Accept": "application/json"
            },
            body: formData
        });

        const json = await response.json();
        status.innerHTML = json.message;

        // Limpiar el formulario después de enviar
        form.reset();
    });
});
