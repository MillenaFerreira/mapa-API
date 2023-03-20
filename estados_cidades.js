'use strict'

export const getDadosEstados = async (estadoPesquisa) => {


    const url = `http://localhost:8080/estado/sigla/${estadoPesquisa}`
    const response = await fetch(url);
    const estado = await response.json();

    return {
        estado : estado.sigla,
        descricao : estado.descricao,
        capital : estado.capital,
        regiao : estado.regiao
    }
   
}