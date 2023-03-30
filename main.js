const estados = [
    "ac",
    "al",
    "ap",
    "am",
    "ba",
    "ce",
    "es",
    "go",
    "ma",
    "mt",
    "ms",
    "mg",
    "pa",
    "pb",
    "pr",
    "pe",
    "pi",
    "rj",
    "rn",
    "rs",
    "ro",
    "rr",
    "sc",
    "sp",
    "se",
    "to",
    "df"
]

const capitais = [
    "Rio Branco",
    "Maceió",
    "Macapá",
    "Manaus",
    "Salvador",
    "Fortaleza",
    "Vitória",
    "Goiânia",
    "São Luís",
    "Cuiabá",
    "Campo Grande",
    "Belo Horizonte",
    "Belém",
    "João Pessoa",
    "Curitiba",
    "Recife",
    "Teresina",
    "Rio de Janeiro",
    "Natal",
    "Porto Alegre",
    "Porto Velho",
    "Boa Vista",
    "Florianópolis",
    "São Paulo",
    "Aracaju",
    "Palmas",
    "Brasília"
]

const naoRepetirEstados = []

var pontos = 0
var botaoCerto = 6
var respostaCerta = 0

function estadoAleatorio() {
    const mapaEstado = document.getElementById('mapa'),
    estadoNumeroAleatorio = Math.floor(Math.random() * 27),
    estadoAleatorioAtual = estados[estadoNumeroAleatorio];
    
    if (naoRepetirEstados.includes(estadoAleatorioAtual)) { // Verifica se esse estado ja foi utilizado.
        estadoAleatorio()
        
    } else if (naoRepetirEstados.length < 26) { // Verifica se ja foram todos os estados.
        mapaEstado.src = `./imagens/mapa_${estadoAleatorioAtual}.png` // Troca a imagem do mapa de acordo com o estado atual.
        naoRepetirEstados.push(estadoAleatorioAtual) // Adiciona o estado à lista dos estados que ja foram escolhidos.
        respostaCerta = estadoNumeroAleatorio
        
        /* --------------------------------------------- Monta os botões aleatóriamente ---------------------------------------- */
        const botoesRespostas = [
            document.getElementById('button1'),
            document.getElementById('button2'),
            document.getElementById('button3'),
            document.getElementById('button4')
        ]

        const naoRepetirBotoes = []

        botaoCerto = Math.floor(Math.random() * 4)
        botoesRespostas[botaoCerto].innerText = capitais[respostaCerta]; // Atribui a resposta certa a um dos botões.
        naoRepetirBotoes.push(botoesRespostas[botaoCerto].innerText)

        for (i = 0 ; i < botoesRespostas.length ; i++) { 
            if (botoesRespostas[i].innerText === "") {  // Verifica quais botões estão vagos e atribui respostas aleatórias a eles.
                var capitalAtual = capitais[Math.floor(Math.random() * 27)]
                if (!naoRepetirBotoes.includes(capitalAtual)) { // Impede que tenha mais de um botão com a mesma resposta.
                    botoesRespostas[i].innerText = capitalAtual
                    naoRepetirBotoes.push(capitalAtual)
                } else {
                    i = i - 1
                }
            }
        }

        console.log(naoRepetirBotoes)

    } else { // Remove os botões da tela depois que passar por todos os estados.
        const telaBotoes = document.getElementById('alternativas'),
        telaInicio = document.getElementById('iniciar'),
        telaJogo = document.getElementById('jogar'),
        jogoReiniciar = document.getElementById('reiniciar'),
        mapaEstado = document.getElementById('mapa');

        mapaEstado.src = `./imagens/mapa_brasil.png`
        telaBotoes.style.display = 'none';  
        telaInicio.style.display = 'none';
        telaJogo.style.display = 'flex';
        jogoReiniciar.style.display = 'block';
    }
    
    
}

function iniciar() { // Passa da tela inicial para o jogo.
    const telaInicio = document.getElementById('iniciar'),
    telaJogo = document.getElementById('jogar');
    
    telaInicio.style.display = 'none';
    telaJogo.style.display = 'flex';
    
    estadoAleatorio()
}

function proximo(qualBotao) {
    const botoesRespostas = [
        document.getElementById('button1'),
        document.getElementById('button2'),
        document.getElementById('button3'),
        document.getElementById('button4')
    ];

    for (i = 0 ; i < botoesRespostas.length ; i++) { // Apaga as alternativas.
        botoesRespostas[i].innerText = ""
    }

    if ( qualBotao == botaoCerto ) {
        pontos = pontos + 1
        console.log("certa resposta")
    }

    document.getElementById('pontos').innerText = pontos

    estadoAleatorio()
}
