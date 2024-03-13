function tocaSomPom () {
    document.querySelector('#som_tecla_som').play();
}

function tocaSomPom () { document.querySelector('#som_tecla_pom').play(); }

    document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

//enquanto
while (contador < 9) {
    listaDeTeclas[0] .onclick = tocaSomPom;
}
