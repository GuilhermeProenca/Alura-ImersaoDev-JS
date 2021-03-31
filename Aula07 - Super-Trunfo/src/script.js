var cartaPaulo = {
  nome: "Seiya de Pégaso",
  atributos: {
    ataque: 80,
    desesa: 60,
    magia: 90,

  }
}

var cartaRafa = {
  nome: "Bulbasaur",
  atributos: {
    ataque: 70,
    desesa: 65,
    magia: 85,
  }
}

var cartaGui = {
  nome: "Lorde Darth Vader",
  atributos: {
    ataque: 90,
    desesa: 55,
    magia: 90,

  }
}

var cartaMaquina
var cartaJogador

var cartas = [cartaPaulo, cartaRafa, cartaGui]

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * 3)
  
  while(numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3)
  }
  
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}


function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  
  for(var i = 0; i < radioAtributo.length; i++) {
    if(radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  
  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    alert("Venceu a carta da máquina!")
  }
  else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    alert("Perdeu! A carta da máquina é maior.")
  }
  else {
    alert("Empatou!")
  }
  console.log(cartaMaquina)
}