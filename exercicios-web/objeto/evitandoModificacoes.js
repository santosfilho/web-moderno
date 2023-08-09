// Object.preventExtensions: Não será permitido adição de novos atributos, mas pode excluir
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal: não consegue adicionar, nem excluir elementos, mas pode alterar os valores ainda
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome // faz nada, o JS só ignora
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes