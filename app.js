'use strict'

import { getDadosEstados } from "./estados_cidades.js";

const mapa = document.querySelector('svg')

const getEstados = (event) => {
    const estado = event.target.id.replace('BR-','');
    preencherDados(estado);
    console.log(preencherDados(estado));
}

 const preencherDados = async () => {
    
    document.getElementById('uf').value = estado.uf
    document.getElementById('estado').value = estado.descricao
    document.getElementById('capital').value = estado.capital
    document.getElementById('regiao').value = estado.regiao

    log

}

mapa.addEventListener('click', getEstados)

console.log(mapa);