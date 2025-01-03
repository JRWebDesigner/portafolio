const title = document.getElementById('title');
const cad = 'JOSUE_MARTIN_MAMANI_AGREDA';

for (let i = 0; i < cad.length; i++) {
    const caracter = cad[i];
    setTimeout(() => {
        title.innerText += caracter;
    }, i * 150);
}