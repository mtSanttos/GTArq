# GTArq — A Cidade da Arquitetura Computacional

> *"De um grande fã de GTA, esse é o GTArq: um jogo educativo da disciplina de Arquitetura Computacional na São Paulo Tech School."*

**GTArq** é um jogo educativo de navegador que ensina **Arquitetura Computacional** de forma interativa, com visual inspirado no **GTA 2** (visão top-down 2D em canvas) e no **HUD clássico do GTA 3** (fontes de impacto, minimapa, caixa de missão, estrelas de procurado, viaturas da polícia).

Você é um estudante navegando por uma cidade tecnológica noturna dividida em **4 distritos**, com a missão de acessar **15 terminais luminosos** e responder perguntas de múltipla escolha sobre CPU, memórias, barramentos e DMA — enquanto esquiva do trânsito e da polícia.

> **100% offline:** HTML + CSS + JavaScript puros, sem dependências externas.

---

## Objetivo educativo

- Fixar os conceitos fundamentais de Arquitetura Computacional (E-BOOK SP3 MAT3).
- Associar cada conceito a uma região da cidade (aprendizado espacial/contextual).
- Reforçar o conteúdo por meio de dicas técnicas imediatas em caso de erro.

---

## Recursos

- **15 missões/terminais** concluíveis em qualquer ordem, com seta indicadora apontando o mais próximo.
- **Perguntas embaralhadas** a cada exibição (4 alternativas, teclado `1`–`4` ou clique).
- **Trânsito vivo:** 16 carros circulando pelas pistas que **atropelam** (tiram vida, empurram e dão invulnerabilidade).
- **Polícia:** estrelas de procurado chamam viaturas que **perseguem e prendem** o jogador.
- **Sistema de vida:** barra de VIDA com flash de dano; zerou = tela **WASTED**.
- **Minimapa circular** com distritos, terminais, polícia e direção do jogador.
- **Telas completas:** título, missão (modal), BUSTED, WASTED e vitória com estatísticas.

---

## Como jogar

| Ação | Teclas |
|---|---|
| Mover o personagem | `W` `A` `S` `D` ou **Setas direcionais** |
| Acessar o terminal / interagir | `E` ou `ENTER` |
| Escolher alternativa no modal | **Clique** do mouse ou teclas `1` `2` `3` `4` |
| Reiniciar o jogo | Botão **REINICIAR JOGO** (sempre visível no HUD) |

**Dica:** o jogo pausa enquanto o modal de missão está aberto — a polícia e os carros param junto.

---

## Regras de jogo

### Missões
- Há **15 terminais**, concluídos **em qualquer ordem**; uma **seta indicadora** no HUD aponta sempre para o terminal mais próximo ainda não concluído.
- **Ao encostar** no terminal (ou apertar `E`/`ENTER`), o jogo pausa e abre a pergunta com 4 alternativas embaralhadas.

### Respostas
- **Certa:**
  - +**$1.000** (pontuação máxima possível: **$15.000**)
  - **−1 estrela** de procurado (se houver)
  - Terminal fica **verde** (concluído)
  - Feedback técnico: *"MISSÃO CUMPRIDA!"* + uma curiosidade sobre o conceito
- **Errada:**
  - **+1 estrela** de procurado (máximo de **5**)
  - **−15 de vida**
  - Recebe uma **dica curta** e pode tentar novamente

### Atropelamento
- Os carros do trânsito tiram **−22 de vida** ao passar por cima do jogador.
- O atropelamento **empurra** o jogador e concede um breve período de **invulnerabilidade** (ele pisca) — ninguém fica preso em cima de um carro.
- **Vida zerada (0%)** → tela **"VIDAS ACABARAM — WASTED"** com opção de reiniciar.

### Polícia
- Cada estrela chama **1 viatura** (máximo de **4**) que nasce no asfalto e **persegue** o jogador contornando os quarteirões.
- A velocidade da polícia cresce com as estrelas (**175 + 14 por estrela**).
- **Encostar na viatura = BUSTED** (captura).
- Acertar um terminal **reduz 1 estrela** e faz a polícia recuar — o aviso **"POLÍCIA A CAMINHO!"** pisca no HUD enquanto houver estrelas.
- **5 estrelas** (respondendo) ou ser preso → tela **"SE FERROU — BUSTED"**.

### Vitória
- **15 missões concluídas** → tela **"RESPEITO MÁXIMO — CIDADE DOMINADA"** com pontuação total, missões completas, número de erros e botão **JOGAR NOVAMENTE**.

---

## Telas do jogo

| Tela | Quando aparece |
|---|---|
| Título (**COMEÇAR**) | Ao abrir o jogo |
| Modal de missão | Ao encostar em um terminal |
| **BUSTED** | 5 estrelas ou capturado pela polícia |
| **WASTED** | Vida chegou a 0% |
| **VITÓRIA** | 15 terminais concluídos |

---

## Distritos da cidade

| Distrito | Cor no radar | Temas |
|---|---|---|
| Distrito da CPU | Laranja | ULA, UC, PC, Acumulador, von Neumann, ciclo de execução |
| Zona das Memórias | Ciano | RAM volátil, Flash, Cache, hierarquia de memória |
| Pátio dos Barramentos | Roxo | Address Bus, Data Bus, cálculo de endereços |
| Docas do DMA | Verde | Acesso Direto à Memória e hardware/Arduino |

---

## Tabela dos 15 conceitos abordados

| Nº | Distrito | Conceito avaliado | Pergunta (resumo) |
|---|---|---|---|
| 1 | Distrito da CPU | ULA (Unidade Lógica e Aritmética) | Qual componente faz as contas matemáticas e operações lógicas? |
| 2 | Distrito da CPU | Unidade de Controle (UC) | Qual é a função da UC na execução de um programa? |
| 3 | Distrito da CPU | Contador de Programa (PC) | O que o registrador PC guarda dentro da CPU? |
| 4 | Distrito da CPU | Acumulador | Qual registrador guarda o resultado das operações da ULA? |
| 5 | Distrito da CPU | Arquitetura de von Neumann | Como instruções e dados são guardados no programa armazenado? |
| 6 | Distrito da CPU | Ciclo de busca e execução | Qual a ordem correta dos 4 passos do ciclo de execução? |
| 7 | Hardware & Arduino | Microcontrolador × Microprocessador | Qual a diferença entre ATmega328P e Intel Core? |
| 8 | Pátio dos Barramentos | Barramento de endereço (Address Bus) | Qual barramento transporta endereços e sai só da CPU? |
| 9 | Pátio dos Barramentos | Capacidade endereçável (2ⁿ) | Quantas posições 8 fios de endereço alcançam? |
| 10 | Pátio dos Barramentos | Barramento de dados (Data Bus) | Qual barramento é bidirecional e transporta valores? |
| 11 | Zona das Memórias | Memória volátil (RAM) | O que acontece com a RAM ao desligar a energia? |
| 12 | Zona das Memórias | Memória Flash não volátil | Onde fica gravado o firmware do Arduino Uno? |
| 13 | Zona das Memórias | Memória Cache | Qual é o papel da memória Cache dentro do processador? |
| 14 | Zona das Memórias | Hierarquia de memória | Qual é a ordem da mais rápida para a mais lenta? |
| 15 | Docas do DMA | DMA (Acesso Direto à Memória) | Qual é a função do DMA? |

---

## Como executar

### Opção 1 — Abrir direto no navegador (mais fácil)
1. Abra a pasta do projeto.
2. Dê **duplo clique em `index.html`** (Chrome, Firefox ou Edge).
3. Clique em **COMEÇAR**.

### Opção 2 — Servidor local (opcional)
```bash
# na pasta do projeto
python -m http.server 8000
# depois acesse: http://localhost:8000
```

### Opção 3 — GitHub Pages
Publique a pasta no GitHub Pages (Settings → Pages → Branch: `main` / root). O jogo funciona sem nenhuma configuração adicional.

---

## Estrutura do projeto

```
GTArq/
├── index.html   # Estrutura: canvas, HUD, modais e telas
├── style.css    # Estética GTA 2/GTA 3 (HUD, modais, tipografia)
├── script.js    # Lógica: cidade, colisões, trânsito, polícia, perguntas
└── README.md    # Esta documentação
```

**Destaques do código (`script.js`):**
- Cidade gerada por PRNG determinística (mesma cidade sempre).
- Colisão círculo×retângulo com deslize por eixos (sem travamentos).
- Perseguição policial em eixos (contorna quarteirões pelas esquinas).
- API de depuração: `window.GTArq.state`, `.buildings`, `.questions`.

---

## Requisitos técnicos

- Navegador moderno com suporte a `<canvas>` e JavaScript ES6.
- Nenhuma biblioteca, framework, fonte externa ou conexão com a internet.
- Compatível com GitHub Pages e qualquer hospedagem estática.
