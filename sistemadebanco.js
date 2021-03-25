var clientes = [
    [nome = "Bruno",
     código = "123", 
     senha = "123", 
     saldo = 100], 
    [nome = "Joaozinho",
     código = "456", 
     senha = "456", 
     saldo = 10],
]

var codigo = window.prompt("Digite o seu código")
var senha = window.prompt("Digite sua senha")

function procura_cliente(cliente){
return cliente[1] == codigo && cliente[2] == senha
}

var cliente_localizado = (clientes.find(procura_cliente))

if(cliente_localizado == null){
alert("Cliente não localizado")
}

else{
  var continuar = true
  while(continuar){
console.log(cliente_localizado[0])
var operacao = Number(window.prompt("Qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia"))

if (operacao == 1){
    var saldo = cliente_localizado[3]
    var saque = Number(window.prompt("Qual o valor do saque?"))
  if(saque>saldo){
    alert("Operação não realizada, saldo indisponivel")
}
  else{
    saldo = saldo-saque
    cliente_localizado[3] = saldo
    alert(`Seu saque foi realizado com sucesso e seu saldo é de R$${saldo}`)
  }
}
if (operacao == 2){
  var dep = Number(window.prompt("Qual o valor do depósito?"))
  var saldo = cliente_localizado[3]
  saldo = saldo + dep
  cliente_localizado[3] = saldo
  alert(`Seu saldo atual após o depósito é de ${saldo}`)
}  
if (operacao == 3){
  var conta = Number(window.prompt("Para qual conta quer transferir?"))
  var saldo = cliente_localizado[3]
  var TR = Number(window.prompt("Qual o valor da transferência?"))
  if(TR>saldo){
    alert("Operação não efetuada, saldo indisponivel")
  }
    else if (conta == cliente_localizado[1]){
      alert("Impossivel realizar operação, não é possivel transferir para si mesmo")     
    }
    else{
     saldo = saldo - TR
      cliente_localizado[3] = saldo
     alert(`Operação realizada com sucesso, saldo atual de R$${saldo}`)
    }
    }
 while(true){
let escolha = window.prompt("Deseja fazer mais uma operação?")

if(escolha == "sim") {
   break
}else if(escolha == 'não'){
   continuar = false
   break
}

alert("digite sim ou não")
}
} 
}
