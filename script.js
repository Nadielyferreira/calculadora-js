const visor = document.querySelector('.visor');
const historico = document.querySelector('.historico');
const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operador');
const especiais = document.querySelectorAll('.especial');
const igual = document.querySelector('#igual');

let valorAtual = '';
let primeiroNumero = '';
let operadorEscolhido = '';

for (const botao of numeros) {
  botao.addEventListener('click', function () {
    valorAtual = valorAtual + botao.textContent;
    visor.textContent = valorAtual;

    if (operadorEscolhido !== '') {
      historico.textContent = primeiroNumero + operadorEscolhido + valorAtual;
    }
  });
}

for (const botao of operadores) {
  botao.addEventListener('click', function () {
    if (valorAtual === '') {
      return;
    }
    primeiroNumero = valorAtual;
    operadorEscolhido = botao.textContent;
    historico.textContent = primeiroNumero + operadorEscolhido;
    valorAtual = '';
    visor.textContent = '';
  });
}

igual.addEventListener('click', function () {
  if (primeiroNumero === '' || operadorEscolhido === '' || valorAtual === '') {
    return;
  }

  const num1 = parseFloat(primeiroNumero);
  const num2 = parseFloat(valorAtual);
  let resultado;

  if (operadorEscolhido === '+') {
    resultado = num1 + num2;
  } else if (operadorEscolhido === '-') {
    resultado = num1 - num2;
  } else if (operadorEscolhido === '×') {
    resultado = num1 * num2;
  } else if (operadorEscolhido === '÷') {
    if (num2 === 0) {
      visor.textContent = 'Erro';
      valorAtual = '';
      primeiroNumero = '';
      operadorEscolhido = '';
      return;
    }
    resultado = num1 / num2;
  } else if (operadorEscolhido === '%') {
    resultado = (num1 * num2) / 100;
  }

  historico.textContent =
    primeiroNumero + operadorEscolhido + valorAtual + ' =';
  valorAtual = resultado.toString();
  visor.textContent = valorAtual;
  primeiroNumero = '';
  operadorEscolhido = '';
});

for (const botao of especiais) {
  botao.addEventListener('click', function () {
    if (botao.textContent === 'AC') {
      valorAtual = '';
      primeiroNumero = '';
      operadorEscolhido = '';
      visor.textContent = '';
      historico.textContent = '';
    } else if (botao.textContent === 'DEL') {
      valorAtual = valorAtual.slice(0, -1);
      visor.textContent = valorAtual;
    } else if (botao.textContent === '.') {
      if (valorAtual.includes('.')) {
        return;
      }
      valorAtual = valorAtual + '.';
      visor.textContent = valorAtual;
    }
  });
}
