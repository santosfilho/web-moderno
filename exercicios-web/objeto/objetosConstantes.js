/*
Um objeto constante é constante o endereco do objeto, não dos dados do endereco em si,
logo vc pode alterar os atributos do objeto, mas n pode setar outro objeto
*/
// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

// congela o objeto para n conseguir mais alterar ele, porém, se tentar alterar nao gera erro
// nao consegue nem excluir ele
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)