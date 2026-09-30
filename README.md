# Calculadora JS

Uma calculadora simples e funcional, construída do zero com HTML, CSS e JavaScript puro (vanilla JS), sem frameworks ou bibliotecas externas.

![Preview da calculadora](./preview.png)

## Funcionalidades

- Operações básicas: soma, subtração, multiplicação, divisão e porcentagem
- Suporte a números decimais, com validação para impedir múltiplos pontos (ex: `5..2`)
- Botão de apagar um caractere por vez (DEL)
- Botão de limpar tudo (AC)
- Histórico dinâmico: exibe a operação completa sendo montada (ex: `6+5`) acima do visor, atualizada em tempo real conforme os números são digitados
- Tratamento de erros: divisão por zero exibe `Erro` em vez de `Infinity`
- Validações de uso: impede selecionar um operador sem número digitado, e impede calcular uma operação incompleta
- Teclado organizado no layout clássico de calculadora (7 8 9 / 4 5 6 / 1 2 3 / 0), com operadores em coluna própria
- Interface responsiva, com meta viewport para adaptação a diferentes tamanhos de tela
- Navegação por teclado com indicação visual de foco (`:focus-visible`)
- Interface com identidade visual própria e tema claro/escuro contrastante

## Tecnologias utilizadas

- **HTML5** — estrutura semântica da página
- **CSS3** — estilização com Flexbox (centralização) e Grid (layout do teclado)
- **JavaScript (Vanilla)** — toda a lógica de cálculo, manipulação do DOM e eventos de clique

## Como funciona

A calculadora usa três variáveis para controlar o estado da operação:

- `valorAtual` — o número sendo exibido no visor no momento
- `primeiroNumero` — o primeiro número da conta, guardado ao clicar em um operador
- `operadorEscolhido` — qual operação foi selecionada (+, −, ×, ÷, %)

Ao clicar em um número, ele é adicionado ao `valorAtual` e exibido no visor. Ao clicar em um operador, o valor atual vira o `primeiroNumero`, o visor é limpo, e um novo número pode ser digitado — essa ação só ocorre se já houver um número no visor. Enquanto o segundo número é digitado, o histórico exibe a operação completa em tempo real (`primeiroNumero + operadorEscolhido + valorAtual`). Ao clicar em `=`, os dois números são convertidos de texto para número (`parseFloat`) e a operação correta é executada com base no operador guardado; o cálculo só é realizado se houver um primeiro número e um operador definidos. Após o resultado, `primeiroNumero` e `operadorEscolhido` são limpos, preparando a calculadora para uma nova operação.

## Conceitos praticados

- Manipulação do DOM (`querySelector`, `querySelectorAll`)
- Eventos de clique (`addEventListener`)
- Funções JavaScript
- Operadores matemáticos
- Conversão de strings para números (`parseFloat`)
- Controle de estado da aplicação
- Validação de entrada e tratamento de erros
- Acessibilidade (`:focus-visible`, meta viewport)
- CSS Grid (layout do teclado)
- CSS Flexbox (centralização da calculadora na tela)

## Melhorias futuras

- Operações encadeadas (ex: `10 + 5 × 2` sem precisar pressionar `=` entre cada etapa)

## Como executar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/Nadielyferreira/calculadora-js.git
   ```
2. Abra o arquivo `index.html` no navegador (ou use a extensão **Live Server** no VS Code)

Não é necessário instalar nenhuma dependência — o projeto roda direto no navegador.

## Estrutura do projeto

```
calculadora-js/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Autora

Desenvolvido por **Nadiely Ferreira**, estudante de Ciência da Computação, como projeto de portfólio.

[LinkedIn](https://linkedin.com/in/nadiely-de-jesus-ferreira-081154410) · [GitHub](https://github.com/Nadielyferreira)
