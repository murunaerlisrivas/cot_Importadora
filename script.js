
document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll("ul li");

    listItems.forEach((li) => {
        const text = li.textContent.trim();
        // Si el contenido está vacío, es solo guiones, o solo contiene etiquetas no evaluadas, se elimina
        if (
            text === "" ||
            text.includes("&lt;&lt;") ||
            /^-?\s*-?$/.test(text)
        ) {
            li.remove();
        }
    });
});
