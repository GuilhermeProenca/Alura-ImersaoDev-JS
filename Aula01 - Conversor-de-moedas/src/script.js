var valorDolarTexto = prompt("Qual o valor em dolar que deseja converter?")

var valorDolarNumero = parseFloat(valorDolarTexto)

var valorReal = valorDolarNumero * 5.50
var valorRealFixado = valorReal.toFixed(2)

alert(valorReal)