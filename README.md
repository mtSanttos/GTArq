# GTArq — A Cidade da Arquitetura Computacional

> *"De um grande fã de GTA, esse é o GTArq: um jogo educativo da disciplina de Arquitetura Computacional na São Paulo Tech School."*

**GTArq** é um jogo educativo de navegador que ensina **Arquitetura Computacional** de forma interativa, com visual inspirado no **GTA 2** (visão top-down 2D em canvas) e no **HUD clássico do GTA 3** (fontes de impacto, minimapa, caixa de missão, estrelas de procurado, viaturas da polícia).

Você é um estudante navegando por uma cidade tecnológica noturna dividida em **4 distritos**, com a missão de acessar **15 terminais luminosos** e responder perguntas de múltipla escolha sobre CPU, memórias, barramentos e DMA — enquanto esquiva do trânsito e da polícia.

> **100% offline:** HTML + CSS + JavaScript puros, sem dependências externas, bibliotecas ou fontes pesadas. Áudio sintetizado via Web Audio API nativo.

---

## Objetivo educativo

- Fixar os conceitos fundamentais de Arquitetura Computacional (E-BOOK SP3 MAT3).
- Associar cada conceito a uma região da cidade (aprendizado espacial/contextual).
- Reforçar o conteúdo por meio de dicas técnicas imediatas em caso de erro.

---

## Recursos e Destaques

- **15 missões/terminais** concluíveis em qualquer ordem, com seta indicadora e pulso dourado no radar apontando o alvo mais próximo.
- **Perguntas embaralhadas** a cada exibição (4 alternativas, teclado `1`–`4`, clique ou touch).
- **Áudio Retrô Imersivo (Web Audio API):** efeitos sonoros sintetizados em tempo real (jingle triunfante de missão cumprida, sirene de viatura policial, buzzer de erro, colisão de atropelamento, sons de WASTED e BUSTED) com botão de som (🔊 / 🔇) e atalho `M`.
- **Mecânica de Corrida / Sprint:** segure `SHIFT` ou o botão virtual de corrida para sprintar (1.45x velocidade), gerenciado por uma barra de **FÔLEGO** (Stamina).
- **Trânsito vivo com faróis noturnos:** 16 carros circulando pelas pistas que atropelam (tiram vida, empurram e dão invulnerabilidade temporária).
- **Polícia Inteligente:** estrelas de procurado acionam viaturas com giroflex e faróis que perseguem o jogador contornando quarteirões com IA aprimorada.
- **Sistema de Vida e Danos:** barra de VIDA com flash vermelho, partículas de impacto, números de dano flutuantes e tremor de tela (camera shake).
- **Minimapa circular circular (Radar):** com distritos coloridos, terminais, pulso de rota, viaturas policiais e direção do jogador.
- **Suporte a Touch / Mobile:** D-pad virtual e botões de ação na tela para jogar diretamente pelo celular ou tablet.
- **Menu de Pausa Completo:** aperte `ESC` ou `P` para pausar a partida, conferir estatísticas em tempo real e alternar áudio.
- **Telas Completas:** Título, Missão (modal), Pausa, BUSTED, WASTED e Vitória com estatísticas, tempo total e **Classificação de Respeito (Rank)**.

---

## Como jogar

| Ação | Teclado | Mobile / Touch |
|---|---|---|
| Mover o personagem | `W` `A` `S` `D` ou **Setas direcionais** | **D-Pad Virtual** na tela |
| Correr / Sprint | Segurar `SHIFT` ou `ESPAÇO` | Botão **CORRER** |
| Acessar terminal / interagir | `E` ou `ENTER` | Botão **E (AÇÃO)** ou encostar no terminal |
| Responder alternativa | Teclas `1`, `2`, `3`, `4` ou clique | **Toque** na opção desejada |
| Continuar após acerto | `ENTER`, `ESPAÇO` ou clique | Toque no botão **CONTINUAR** |
| Pausar / Despausar | `ESC` ou `P` | Botão **⏸** no HUD |
| Alternar Som (Mudo) | Tecla `M` | Botão **🔊 / 🔇** no HUD |
| Reiniciar após derrota/vitória | `ENTER`, `ESPAÇO` ou `R` | Toque no botão de reiniciar |

---

## Regras de jogo

### Missões
- Há **15 terminais**, concluídos **em qualquer ordem**; a **seta indicadora** no HUD aponta sempre para o terminal mais próximo ainda não concluído.
- **Ao encostar** no terminal (ou apertar `E`/`ENTER`), o jogo pausa e abre a pergunta com 4 alternativas embaralhadas.

### Respostas
- **Certa:**
  - +**$1.000** (pontuação máxima possível: **$15.000**)
  - +**10 de Vida**
  - **−1 estrela** de procurado (se houver)
  - Terminal fica **verde** (concluído)
  - Feedback técnico: *"MISSÃO CUMPRIDA!"* + curiosidade técnica sobre o conceito
- **Errada:**
  - **+1 estrela** de procurado (máximo de **5**)
  - **−15 de vida**
  - Recebe uma **dica curta** e pode tentar novamente

### Atropelamento
- Os carros do trânsito tiram **−22 de vida** ao passar por cima do jogador.
- O atropelamento **empurra** o jogador, causa tremor de tela e concede um breve período de **invulnerabilidade** (ele pisca).
- **Vida zerada (0%)** → tela **"VIDAS ACABARAM — WASTED"**.

### Polícia
- Cada estrela chama **1 viatura** (máximo de **4**) que nasce no asfalto e **persegue** o jogador contornando quarteirões.
- A velocidade da polícia cresce com as estrelas (**175 + 15 por estrela**).
- **Encostar na viatura = BUSTED** (captura imediata).
- Acertar um terminal **reduz 1 estrela** e faz a polícia recuar.
- **5 estrelas** ou ser preso → tela **"SE FERROU — BUSTED"**.

### Vitória
- **15 missões concluídas** → tela **"RESPEITO MÁXIMO — CIDADE DOMINADA"** com pontuação total, tempo decorrido, número de erros e Rank (S+ Arquiteto Supremo, A+ Mestre do Hardware, etc.).

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
| 7 | Docas do DMA / Arduino | Microcontrolador × Microprocessador | Qual a diferença entre ATmega328P e Intel Core? |
| 8 | Pátio dos Barramentos | Barramento de endereço (Address Bus) | Qual barramento transporta endereços e sai só da CPU? |
| 9 | Pátio dos Barramentos | Capacidade endereçável (2ⁿ) | Quantas posições 8 fios de endereço alcançam? |
| 10 | Pátio dos Barramentos | Barramento de dados (Data Bus) | Qual barramento é bidirecional e transporta valores? |
| 11 | Zona das Memórias | Memória volátil (RAM) | O que acontece com a RAM ao desligar a energia? |
| 12 | Zona das Memórias | Memória Flash não volátil | Onde fica gravado o firmware do Arduino Uno? |
| 13 | Zona das Memórias | Memória Cache | Qual é o papel da memória Cache dentro do processador? |
| 14 | Zona das Memórias | Hierarquia de memória | Qual é a ordem da mais rápida para a mais lenta? |
| 15 | Docas do DMA | DMA (Acesso Direto à Memória) | Qual é a função do DMA? |

---

## Publicação no GitHub Pages e Execução

### As alterações locais entram automaticamente no link `.github.io`?
**Não imediatamente!** Quando você faz melhorias no código no seu computador:
1. Os arquivos estão atualizados **localmente** na sua máquina.
2. Para que elas entrem no link online do GitHub Pages (`https://mtsanttos.github.io/GTArq/`), você precisa enviar os commits para o GitHub:
   ```bash
   git add .
   git commit -m "Melhorias: áudio Web Audio API, sprint, controles touch, IA policial e menu de pausa"
   git push origin main
   ```
3. Assim que o `git push` for concluído, o GitHub Pages processa a nova versão do branch `main` e em cerca de **1 a 2 minutos** o site jogável no navegador é atualizado automaticamente!

### Executar localmente no seu computador
- Basta abrir o arquivo `index.html` com duplo clique em qualquer navegador moderno.
- Ou rodar um servidor local:
  ```bash
  python -m http.server 8000
  ```
  E acessar `http://localhost:8000`.
