// // 1.

function fnExibirChamada() {
  let alunos = ["Ana", "Bruno", "Carla", "Diego", "Elena"]

  console.log(alunos[0])
  console.log(alunos[alunos.length - 1])
  console.log("Tem " + alunos.length + " alunos na sala.")
}

fnExibirChamada()

//....................................................................

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

//....................................................................

// 3. 

let fila = ["Marcos", "Juliana", "Roberto"]
console.log("Sequencia atual: " + fila);

fnEncaixarPrioridade(fila, "Dona Clara (Idosa)")

function fnEncaixarPrioridade(fila, nomePaciente) {
    fila.unshift(nomePaciente)
    console.log("Nova sequência: " + fila)
}

//....................................................................

// 4.

function fnChamarProximo(fila){
    let primeiroNome = fila.shift()
    console.log("O primeiro a ser chamado é: " + primeiroNome);
    console.log(fila)  
}
fnChamarProximo(fila)

//....................................................................

// 5.

let lista = ["Escreveu título", "Aplicou negrito", "Inseriu tabela"]
console.log("Funções Word: " + lista)

function fnDesfazerAcao(lista){
    let retirarItem = lista.pop()
    console.log("Será retirado -> " + retirarItem )
    console.log(lista)
}
fnDesfazerAcao(lista)

//....................................................................

// 6.

let estoque =  ["Camiseta", "Calça", "Tênis", "Boné"]
let contagemEstoque = estoque.length

function fnVerificarEstoque(estoque){
    console.log("Existe " + contagemEstoque + " itens em estoque." )
    console.log("Estoque Atual: " + estoque)
}
fnVerificarEstoque(estoque)

//....................................................................

// 7.

let listaOficial = ["Lucas", "Mariana", "Thiago", "Beatriz"]
console.log(listaOficial);


function fnEstaNaLista(listaOficial, nome){
    if (listaOficial.includes(nome) == true){
        console.log(nome + " está na lista.")
    } else {
        console.log(nome + " não está na lista.");
    }
}
fnEstaNaLista(listaOficial, "Rafael")
fnEstaNaLista(listaOficial, "Mariana")

//....................................................................

// 8.

let mercado =  ["Arroz", "Feijão", "Açúcar", "Café", "Sal"]
console.log("Corredor de: " + mercado);

function fnConsultarCorredor(mercado, item){
    if (mercado.includes(item) == true){
        console.log(item + " está no corredor.")
        console.log(mercado.indexOf(item)+1)
    } else {
        console.log(item + " não está no corredor.");
    }
}
fnConsultarCorredor(mercado, "Café")
fnConsultarCorredor(mercado, "Macarrão")

//....................................................................

// 9.

let tabelaLanche = [15.00, 25.00, 40.00]

function fnAtualizarPreco (lista, indice, novoValor){
    lista[indice] = novoValor
    console.log(lista)
}
fnAtualizarPreco(tabelaLanche, 1, 28.50)
// console.log(tabelaLanche)
// tabelaLanche[1] = (28.50)

//....................................................................

// 10.

let nota1 = 8
let nota2 = 7.5
let nota3 = 9
 
function fnCriarBoletim(nota1, nota2, nota3) {
    let calculoNotas = (nota1 + nota2 + nota3) / 3
    console.log(nota1, nota2, nota3)
    console.log(calculoNotas)
}
 
fnCriarBoletim(nota1, nota2, nota3)