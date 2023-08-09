const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const menorS = (dados) => {
    let salario = dados[0].salario
    let id = 0
    for (let i=0; i < dados.length; i++) {
        if(salario > dados[i+1]?.salario) {
            salario = dados[i+1].salario
            id = dados[i+1].id
        }
    }

    return dados.filter(p => p.id == id)
}

axios.get(url).then(response => {
    //console.log(response.data.length)
    //console.log(response.data.filter(dado => dado.id == 1))
    console.log(menorS(response.data
        .filter(d => (d.genero === 'F' && d.pais == 'China'))))
})

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    // mulher chinesa com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})