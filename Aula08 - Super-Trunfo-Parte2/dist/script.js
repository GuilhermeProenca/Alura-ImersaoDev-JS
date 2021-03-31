var carta1 = {
    nome: "Seiya de Pégaso",
    imagem: "https://i.pinimg.com/originals/69/7b/02/697b02afceeb5ccd795dcb349ea86fef.gif",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 75
    }
}

var carta2 = {
    nome: "Bulbasauro",
    imagem: "https://i.pinimg.com/originals/07/cc/b9/07ccb9cb770c690f8b87bef05daf191a.gif",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var carta3 = {
    nome: "Lorde Darth Vader",
    imagem: "https://media1.tenor.com/images/448aba022ec150633e1844d9412ede0c/tenor.gif?itemid=16976876",
    atributos: {
        ataque: 90,
        defesa: 70,
        magia: 90
    }
}

var carta4 = {
    nome: "Lich King Arthas",
    imagem: "https://64.media.tumblr.com/3b3ffd8eba45d5aabc16ef8c7c24bade/f527da6b8f8a67e8-6b/s500x750/f456dc602ad2ddddb63c684c9d1a57895b2d5705.gifv",
    atributos: {
        ataque: 90,
        defesa: 85,
        magia: 90
    }
}

var carta5 = {
    nome: "Mestre Jedi Yoda",
    imagem: "https://thumbs.gfycat.com/SharpForcefulGelada-max-1mb.gif",
    atributos: {
        ataque: 100,
        defesa: 100,
        magia: 100
    }
}

var carta6 = {
    nome: "Wolverine",
    imagem: "https://cdn2.scratch.mit.edu/get_image/gallery/3588140_170x100.png",
    atributos: {
        ataque: 95,
        defesa: 65,
        magia: 50
    }
}

var carta7 = {
    nome: "Feiticeira Escarlate",
    imagem: "https://thumbs.gfycat.com/ClearFairIberianchiffchaff-max-1mb.gif",
    atributos: {
        ataque: 60,
        defesa: 70,
        magia: 95
    }
}

var carta8 = {
    nome: "Mulher Maravilha",
    imagem: "https://i.pinimg.com/originals/9f/e6/6a/9fe66a8be60952541bfa03178ec05de7.gif",
    atributos: {
        ataque: 85,
        defesa: 80,
        magia: 70
    }
}

var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8]

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 8)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 8)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 8)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
    
    resetarJogo();
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibeCartaJogador()
}

function resetarJogo() {
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";

  divCartaJogador.style.backgroundImage = `url($)`;
  divCartaJogador.innerHTML = "";
  divCartaJogador.innerHTML = moldura;

  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";

  divCartaMaquina.style.backgroundImage = `url($)`;
  divCartaMaquina.innerHTML = "";
  divCartaMaquina.innerHTML = moldura;

  var divResultado = document.getElementById("resultado");
  htmlResultado = "<p class='resultado-final'>?</p>";
  divResultado.innerHTML = htmlResultado;
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' checked value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  var html = "<div id='opcoes' class='carta-status'>";

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado");
  var atributoSelecionado = obtemAtributoSelecionado();
  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;
  exibeCartaMaquina();
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "<br>";
  }

  var html = "<div id='opcoes' class='carta-status'>";

  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto;
}