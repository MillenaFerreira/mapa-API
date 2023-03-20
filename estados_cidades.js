'use strict'

export const getDadosEstados = async (estadoPesquisa) => {


    const url = `http://localhost:8080/estado/sigla/${estadoPesquisa}`
    const response = await fetch(url);
    const estado = await response.json();

    return {
        uf : estado.uf,
        descricao : estado.descricao,
        capital : estado.capital,
        regiao : estado.regiao
    }
   
}

export const getCidades = async (sigla) => {
    const url = `http://localhost:8080/v1/cidades/estado/sigla/${sigla}`
    const response = await fetch(url)
    const cidades = await response.json()

    return {
        cidades: cidades.cidades
    }
}