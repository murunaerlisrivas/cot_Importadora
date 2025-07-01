
document.addEventListener('DOMContentLoaded', function () {
    const tablas = document.querySelectorAll('.clientTable2');

    tablas.forEach(tabla => {
        const filas = tabla.querySelectorAll('tbody tr');

        filas.forEach(fila => {
            // ----- BLOQUE 1: lista <ul> de cantidades (cant1..10) -----
            const ul = fila.querySelector('ul');
            const liItems = ul?.querySelectorAll('li[class^="cant"]') || [];
            const uniqueEmb = fila.querySelector('p.uniqueEmb');

            let hayContenidoCant = false;

            liItems.forEach(li => {
                const texto = li.textContent.trim();
                if (texto === '' || texto.startsWith('-') || texto.startsWith(' -')) {
                    li.style.display = 'none';
                } else {
                    li.style.display = 'list-item';
                    hayContenidoCant = true;
                }
            });

            if (!hayContenidoCant) {
                ul.style.display = 'none';
            } else {
                ul.style.display = 'block';
                if (uniqueEmb) uniqueEmb.style.display = 'none';
            }

            // ----- BLOQUE 2: lista <ul class="prices"> según valor unitario -----
            const unitarioP = fila.querySelector('p.unitario');
            const pricesUl = fila.querySelector('ul.prices');
            const priceItems = pricesUl?.querySelectorAll('li') || [];

            const unitarioTexto = unitarioP?.textContent.trim() || '';
            let hayPrecioValido = false;

            priceItems.forEach(li => {
                const texto = li.textContent.trim();
                if (texto === '' || texto.startsWith('-') || texto.startsWith(' -')) {
                    li.style.display = 'none';
                } else {
                    li.style.display = 'list-item';
                    hayPrecioValido = true;
                }
            });

            if (unitarioTexto === '' && hayPrecioValido) {
                pricesUl.style.display = 'block';
            } else {
                pricesUl.style.display = 'none';
            }
        });
    });
});


