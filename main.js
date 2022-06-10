
const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]

    const idSom = `#som_${instrumento}`
    tecla.onclick = function () {
        tocaSom(idSom)
    }
    contador++
}

function tocaSom (classSom) {
    document.querySelector(classSom).play()
}