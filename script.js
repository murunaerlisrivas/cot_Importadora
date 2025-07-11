
document.addEventListener('DOMContentLoaded', function () {
    const tablas = document.querySelectorAll('.clientTable2');

    tablas.forEach(tabla => {
        const filas = tabla.querySelectorAll('tbody tr');

        filas.forEach(fila => {
            const ul = fila.querySelector('ul.cantd');
            const liItems = ul?.querySelectorAll('li[class^="cant"]') || [];
            const uniqueEmb = fila.querySelector('p.uniqueEmb');
            const nroEmbarque = fila.querySelector('span.nroEmbarque');

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


            let valorNro = '';
            if (nroEmbarque) {
                valorNro = nroEmbarque.textContent.trim().toLowerCase();
                if (valorNro === '' || valorNro === 'none') {
                    nroEmbarque.textContent = '1';
                    valorNro = '1';
                }
            }
            const nro = parseInt(valorNro, 10);
            const debeMostrarUniqueEmb = valorNro === '' || isNaN(nro) || nro < 2;

            if (debeMostrarUniqueEmb) {
                if (uniqueEmb) uniqueEmb.style.display = 'block';
                if (ul) ul.style.display = 'none';
            } else {
                if (uniqueEmb) uniqueEmb.style.display = 'none';
                if (ul) ul.style.display = hayContenidoCant ? 'block' : 'none';
            }

            // --- BLOQUE 2: PRECIOS <ul class="prices"> ---
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

document.addEventListener('DOMContentLoaded', function () {
    const elementosNotas = document.querySelectorAll('.notas_space');

    elementosNotas.forEach(el => {
        const textoOriginal = el.textContent;

        const fragmentos = textoOriginal
            .split(',')
            .map(f => f.trim().toUpperCase());

        el.innerHTML = ''; // Limpia contenido

        fragmentos.forEach((texto, index) => {
            const span = document.createElement('span');
            span.textContent = texto;
            el.appendChild(span);
            if (index < fragmentos.length - 1) {
                el.appendChild(document.createElement('br'));
            }
        });
    });
});



