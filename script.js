
document.addEventListener('DOMContentLoaded', function () {
    const tablas = document.querySelectorAll('.clientTable2');

    tablas.forEach(tabla => {
        const filas = tabla.querySelectorAll('tbody tr');

        filas.forEach(fila => {
            // --- BLOQUE 1: CANTIDADES <ul class="cantd"> ---
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

            // 🟡 CORREGIDO: Si nroEmbarque es vacío o 'none', lo reemplaza por '1'
            if (nroEmbarque) {
                const textoNro = nroEmbarque.textContent.trim().toLowerCase();
                if (textoNro === '' || textoNro === 'none') {
                    nroEmbarque.textContent = '1';
                }
            }

            // Mostrar lista si hay contenido, y ocultar uniqueEmb si aplica
            if (!hayContenidoCant) {
                ul.style.display = 'none';
            } else {
                ul.style.display = 'block';
                if (uniqueEmb) uniqueEmb.style.display = 'none';
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

const p = document.getElementById('notas');
const textoOriginal = p.textContent;


const textoFormateado = textoOriginal
    .toUpperCase()
    .split(',')
    .map(fragmento => fragmento.trim())
    .join('<br>');


p.innerHTML = textoFormateado;



