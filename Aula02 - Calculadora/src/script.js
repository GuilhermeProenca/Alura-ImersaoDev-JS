var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))

var segundoValor = parseInt(prompt("Digite o primeiro valor:"))

var operacao = prompt("Digite 1 para soma, 2 para subtração, 3 para multuplicação e 4 para divisão:")

if (operacao == 1) {
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " +
               segundoValor + " = " + resultado + "</h2>")
}

else if (operacao == 2) {
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " +
               segundoValor + " = " + resultado + "</h2>")
}

else if (operacao == 3) {
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " * " +
               segundoValor + " = " + resultado + "</h2>")
}

else if (operacao == 4) {
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " +
               segundoValor + " = " + resultado + "</h2>")
}

else document.write("<h2>Opção inválida!</h2>")