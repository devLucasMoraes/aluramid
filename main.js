
const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0

for (contador =0 ;contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]

    const idSom = `#som_${instrumento}`
    tecla.onclick = function () {
        tocaSom(idSom)
    }
}

function tocaSom (classSom) {
    document.querySelector(classSom).play()
}