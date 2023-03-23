'use strict'

import { getDadosEstados, getCidades } from "./estados_cidades.js";

const mapa = document.querySelector('svg')

const getEstados = async(event) => {
    const estadoClicado = event.target.id.replace('BR-','')
    const estado = await getDadosEstados(estadoClicado)
    const cidades = await getCidades(estadoClicado)
  
    console.log(cidades);

    document.getElementById('uf').textContent = estado.uf
    document.getElementById('estado').textContent = estado.descricao
    document.getElementById('capital').textContent = estado.capital
    document.getElementById('regiao').textContent = estado.regiao
    //document.getElementById('cidades').textContent = cidades.cidades

    const ul = document.getElementById('lista-cidades')

    ul.textContent = ""

    cidades.cidades.forEach(function(cidade){
        const lista = document.createElement('li')
        lista.textContent = cidade
        ul.append(lista)
    })
}


mapa.addEventListener('click', getEstados)

console.log(mapa);