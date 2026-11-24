// 1.

let Alunos = ["Ana", "Bruno", "Carla", "Diego", "Elena"]
console.log(Alunos.length)

let primeiroNome = Alunos.shift()

let ultimoNome = Alunos.pop()

let fnExibirChamada
console.log(primeiroNome + " é o(a) primeiro(a) aluno(a).")
console.log(ultimoNome + " é o(a) ultimo(a) aluno(a).")

// 2.

let pedido = ["Teclado Mecânico", "Mouse Gamer"]

console.log(pedido)

function fnAdicionarProduto (lista, novoItem){
    if (lista == "pedido"){
        pedido.push(novoItem)
    }
    console.log(pedido)
}

fnAdicionarProduto("pedido", "Headset USB")

// 3. 

let fila = ["Marcos", "Juliana", "Roberto"]

console.log(fila)

function fnEncaixarPrioridade(fila, idoso ){
    if(idoso == "")
}