/* ==========================================================================
   GTArq — Cidade da Arquitetura Computacional
   Jogo educativo puro (HTML + CSS + JavaScript), sem dependências externas.
   Estética: visão top-down estilo GTA 2 + HUD estilo GTA 3.
   ========================================================================== */

(() => {
  'use strict';

  /* ==========================================================================
     1. BANCO DE PERGUNTAS (15 missões — E-BOOK SP3 MAT3)
     ========================================================================== */
  const QUESTIONS = [
    {
      district: 'Distrito da CPU',
      q: 'Qual componente dentro da CPU realiza as contas matemáticas e operações lógicas (AND, OR, XOR)?',
      correct: 'ULA (Unidade Lógica e Aritmética)',
      wrong: ['Unidade de Controle (UC)', 'Contador de Programa (PC)', 'Controlador de DMA'],
      hint: 'Pense na parte da CPU que faz "contas": soma, subtração e comparações lógicas.',
      fact: 'A ULA opera sobre registradores e devolve o resultado para o Acumulador.'
    },
    {
      district: 'Distrito da CPU',
      q: 'Qual é a função da Unidade de Controle (UC) durante a execução de um programa?',
      correct: 'Ler cada instrução, decodificar o que ela pede e enviar ordens para as outras partes',
      wrong: ['Armazenar permanentemente o firmware da placa', 'Fazer cálculos de soma e subtração binária', 'Converter sinais analógicos de sensores em números'],
      hint: 'Ela não calcula: ela é a diretora que lê, decodifica e distribui as ordens.',
      fact: 'A UC coordena todas as partes da CPU sincronizadas pelo clock.'
    },
    {
      district: 'Distrito da CPU',
      q: 'O que o registrador Contador de Programa (PC) guarda dentro da CPU?',
      correct: 'O endereço de memória da próxima instrução a ser executada',
      wrong: ['O resultado final das contas feitas pela ULA', 'A cópia dos arquivos salvos no SSD', 'O nome do modelo do computador pessoal'],
      hint: 'PC = Program Counter: ele sempre aponta para a PRÓXIMA instrução.',
      fact: 'Depois de buscar uma instrução, o PC é incrementado para a seguinte.'
    },
    {
      district: 'Distrito da CPU',
      q: 'Qual registrador recebe e guarda o resultado das operações realizadas pela ULA?',
      correct: 'Acumulador',
      wrong: ['Registrador de Instrução', 'Contador de Programa', 'Memória EEPROM'],
      hint: 'É um registrador de trabalho que "acumula" o resultado das contas.',
      fact: 'O Acumulador guarda temporariamente o resultado das operações da ULA.'
    },
    {
      district: 'Distrito da CPU',
      q: 'Na arquitetura de von Neumann (programa armazenado), como instruções e dados são guardados?',
      correct: 'Ficam guardados na mesma memória, representados como números',
      wrong: ['Ficam em chips fisicamente separados sem comunicação', 'As instruções ficam apenas nos pinos digitais', 'Os dados ficam gravados de fábrica sem poder mudar'],
      hint: '"Programa armazenado" = tudo mora na mesma memória, codificado como números.',
      fact: 'Na von Neumann, instruções e dados dividem a mesma memória e o mesmo barramento.'
    },
    {
      district: 'Distrito da CPU',
      q: 'Qual é a ordem correta dos 4 passos do ciclo de busca e execução de uma instrução?',
      correct: 'Buscar, decodificar, executar e guardar o resultado',
      wrong: ['Executar, buscar, guardar o resultado e decodificar', 'Decodificar, guardar o resultado, buscar e executar', 'Buscar, executar, decodificar e reiniciar o clock'],
      hint: 'É o ciclo clássico que se repete milhares de vezes por segundo.',
      fact: 'Buscar → Decodificar → Executar → Guardar é o ciclo de busca e execução.'
    },
    {
      district: 'Hardware & Arduino',
      q: 'Qual é a principal diferença entre um microcontrolador (como o ATmega328P) e um microprocessador (como o Intel Core)?',
      correct: 'O microcontrolador reúne CPU, memória e entrada/saída em um único chip',
      wrong: ['O microprocessador tem memória RAM e Flash internas e não precisa de placa-mãe', 'O microcontrolador consome muito mais energia e não tem pinos de E/S', 'O microprocessador foi feito apenas para ler sensores simples'],
      hint: 'Um é um chip "tudo-em-um"; o outro precisa de peças externas para funcionar.',
      fact: 'O ATmega328P (Arduino) já tem CPU, RAM, Flash e E/S no mesmo chip.'
    },
    {
      district: 'Pátio dos Barramentos',
      q: 'Qual barramento transporta o número da posição de memória que a CPU quer acessar e sai apenas da CPU?',
      correct: 'Barramento de endereço (Address Bus)',
      wrong: ['Barramento de dados (Data Bus)', 'Barramento de controle', 'Cabo de alimentação USB'],
      hint: 'O nome já entrega: transporta ENDEREÇOS e sai só da CPU (unidirecional).',
      fact: 'Com 10 fios de endereço, a CPU alcança 2^10 = 1024 posições de memória.'
    },
    {
      district: 'Pátio dos Barramentos',
      q: 'Se um computador possui um barramento de endereço com 8 fios (bits), quantas posições de memória diferentes ele consegue alcançar?',
      correct: '256 posições (2^8)',
      wrong: ['8 posições', '16 posições', '65.536 posições'],
      hint: 'N fios combinam em 2 elevado a N possibilidades.',
      fact: '8 fios = 2^8 = 256 endereços distintos.'
    },
    {
      district: 'Pátio dos Barramentos',
      q: 'Qual barramento é bidirecional (vai e volta) e transporta os valores lidos/escritos e as instruções?',
      correct: 'Barramento de dados (Data Bus)',
      wrong: ['Barramento de endereço (Address Bus)', 'Barramento de controle', 'Pino analógico A0'],
      hint: 'Leitura E escrita: os dados precisam ir E voltar.',
      fact: 'O barramento de dados é bidirecional; o de endereço é unidirecional.'
    },
    {
      district: 'Zona das Memórias',
      q: 'O que acontece com o conteúdo da memória RAM quando a energia do equipamento é desligada?',
      correct: 'Todo o conteúdo é perdido, pois a RAM é uma memória volátil',
      wrong: ['O conteúdo permanece salvo intacto para a próxima inicialização', 'Os dados são movidos automaticamente para a ULA', 'Apenas o firmware da BIOS permanece na RAM'],
      hint: 'RAM é memória VOLÁTEL — sem energia, o conteúdo evapora.',
      fact: 'Por isso salvamos arquivos em SSD/HDD: eles são não voláteis.'
    },
    {
      district: 'Zona das Memórias',
      q: 'No Arduino Uno, onde fica gravado o programa (firmware) para que ele não apague quando o cabo USB é desconectado?',
      correct: 'Na memória Flash, que é não volátil e regravável',
      wrong: ['Na memória RAM de 2 KB', 'Nos registradores da CPU', 'Na memória Cache L1'],
      hint: 'Precisa sobreviver ao desligar: memória não volátil e regravável.',
      fact: 'A Flash do Arduino guarda o firmware mesmo sem energia.'
    },
    {
      district: 'Zona das Memórias',
      q: 'Qual é o papel da memória Cache dentro do processador?',
      correct: 'Guardar uma cópia rápida dos dados e instruções usados recentemente pela CPU',
      wrong: ['Armazenar arquivos pesados como vídeos e bancos de dados permanentemente', 'Substituir a fonte de alimentação de 5V', 'Controlar o acesso direto dos periféricos ao disco'],
      hint: 'É a "memória rápida" que guarda o que a CPU usou há pouco.',
      fact: 'A Cache (L1/L2) fica dentro do processador, bem mais rápida que a RAM.'
    },
    {
      district: 'Zona das Memórias',
      q: 'Na pirâmide da hierarquia de memória, qual é a ordem correta da mais rápida (e menor) para a mais lenta (e maior)?',
      correct: 'Registradores -> Cache -> RAM -> Armazenamento (SSD/HD)',
      wrong: ['RAM -> Cache -> Registradores -> Armazenamento', 'Armazenamento -> RAM -> Cache -> Registradores', 'Cache -> Registradores -> Armazenamento -> RAM'],
      hint: 'Do mais rápido e pequeno para o mais lento e grande.',
      fact: 'Registradores → Cache → RAM → SSD/HD é a hierarquia clássica de memória.'
    },
    {
      district: 'Docas do DMA',
      q: 'Qual é a função do DMA (Acesso Direto à Memória)?',
      correct: 'Permitir que um dispositivo copie blocos de dados direto para a RAM sem ocupar a CPU a cada byte',
      wrong: ['Criar uma via VIP prioritária que acelera o clock da ULA', 'Aumentar a capacidade física da memória EEPROM', 'Apagar a memória Cache quando o sistema trava'],
      hint: 'O dispositivo faz o trabalho "sozinho", copiando blocos direto para a RAM.',
      fact: 'Com DMA, a CPU fica livre enquanto os dados vão direto para a memória.'
    }
  ];

  /* ==========================================================================
     2. MUNDO / CIDADE (ruas, quarteirões, distritos, terminais, veículos)
     ========================================================================== */
  const WORLD = { w: 2600, h: 2000 };

  // Ruas horizontais e verticais (faixas asfaltadas)
  const ROADS_H = [
    { y0: 180, y1: 270 }, { y0: 700, y1: 790 },
    { y0: 1220, y1: 1310 }, { y0: 1740, y1: 1830 }
  ];
  const ROADS_V = [
    { x0: 180, x1: 270 }, { x0: 850, x1: 940 },
    { x0: 1520, x1: 1610 }, { x0: 2190, x1: 2280 }
  ];

  // 4 distritos (quadrantes da cidade)
  const DISTRICTS = [
    { name: 'Distrito da CPU',        color: '#ff9d00', label: 'DISTRITO DA CPU',         lx: 640,  ly: 480 },
    { name: 'Zona das Memórias',      color: '#7CE7FF', label: 'ZONA DAS MEMÓRIAS',       lx: 1950, ly: 480 },
    { name: 'Pátio dos Barramentos',  color: '#c58cff', label: 'PÁTIO DOS BARRAMENTOS',   lx: 640,  ly: 1490 },
    { name: 'Docas do DMA',           color: '#7CE77C', label: 'DOCAS DO DMA',            lx: 1950, ly: 1490 }
  ];

  // 15 terminais: posição no mapa + índice da pergunta (0..14)
  const TERMINAL_POS = [
    { x: 225,  y: 450,  q: 0  },  // CPU
    { x: 600,  y: 745,  q: 1  },  // CPU
    { x: 895,  y: 450,  q: 2  },  // CPU
    { x: 450,  y: 225,  q: 3  },  // CPU
    { x: 1100, y: 745,  q: 4  },  // CPU
    { x: 895,  y: 950,  q: 5  },  // CPU (ciclo de execução)
    { x: 1565, y: 1500, q: 6  },  // DMA (hardware/Arduino)
    { x: 225,  y: 1500, q: 7  },  // Barramentos
    { x: 600,  y: 1265, q: 8  },  // Barramentos
    { x: 895,  y: 1500, q: 9  },  // Barramentos
    { x: 1565, y: 450,  q: 10 },  // Memórias
    { x: 1900, y: 225,  q: 11 },  // Memórias
    { x: 2235, y: 600,  q: 12 },  // Memórias
    { x: 1750, y: 745,  q: 13 },  // Memórias
    { x: 1900, y: 1265, q: 14 }   // DMA
  ];

  // Veículos decorativos que circulam pelas pistas
  const CAR_BLUEPRINT = [
    { axis: 'h', y: 207,  x: 400,  dir: 1,  speed: 165, color: '#c0392b' },
    { axis: 'h', y: 243,  x: 1400, dir: -1, speed: 145, color: '#2980b9' },
    { axis: 'h', y: 727,  x: 900,  dir: 1,  speed: 185, color: '#f1c40f' },
    { axis: 'h', y: 763,  x: 2000, dir: -1, speed: 135, color: '#8e44ad' },
    { axis: 'h', y: 1247, x: 300,  dir: 1,  speed: 155, color: '#16a085' },
    { axis: 'h', y: 1283, x: 1800, dir: -1, speed: 175, color: '#d35400' },
    { axis: 'h', y: 1767, x: 1200, dir: 1,  speed: 150, color: '#ecf0f1' },
    { axis: 'h', y: 1793, x: 300,  dir: -1, speed: 160, color: '#7f8c8d' },
    { axis: 'v', x: 207,  y: 600,  dir: 1,  speed: 150, color: '#2c3e50' },
    { axis: 'v', x: 243,  y: 1600, dir: -1, speed: 165, color: '#e74c3c' },
    { axis: 'v', x: 877,  y: 300,  dir: 1,  speed: 180, color: '#3498db' },
    { axis: 'v', x: 913,  y: 1500, dir: -1, speed: 145, color: '#9b59b6' },
    { axis: 'v', x: 1547, y: 900,  dir: 1,  speed: 160, color: '#1abc9c' },
    { axis: 'v', x: 1583, y: 300,  dir: -1, speed: 170, color: '#00cec9' },
    { axis: 'v', x: 2217, y: 400,  dir: -1, speed: 155, color: '#f39c12' },
    { axis: 'v', x: 2243, y: 1400, dir: 1,  speed: 150, color: '#e17055' }
  ];

  /* ==========================================================================
     3. GERAÇÃO DAS CONSTRUÇÕES (quarteirões com calçada e prédios)
     ========================================================================== */
  // PRNG simples determinístico (cidade sempre igual)
  function mulberry32(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const ROOF_COLORS = ['#3d4150', '#454a5c', '#3a3f4d', '#4a4550', '#414757', '#4d4438', '#3f4a4a', '#44404f'];

  function generateBuildings() {
    const rnd = mulberry32(20261121);
    const cols = [[0, 180], [270, 850], [940, 1520], [1610, 2190], [2280, 2600]];
    const bands = [[0, 180], [270, 700], [790, 1220], [1310, 1740], [1830, 2000]];
    const WALK = 26;          // largura da calçada ao redor do quarteirão
    const GAP = 18;           // viela entre prédios do mesmo quarteirão
    const list = [];

    for (const [x0, x1] of cols) {
      for (const [y0, y1] of bands) {
        const ix0 = x0 + WALK, ix1 = x1 - WALK;
        const iy0 = y0 + WALK, iy1 = y1 - WALK;
        const w = ix1 - ix0, h = iy1 - iy0;
        if (w < 50 || h < 50) continue;

        const nCols = w > 320 ? 2 : 1;
        const nRows = h > 260 ? 2 : 1;

        for (let c = 0; c < nCols; c++) {
          for (let r = 0; r < nRows; r++) {
            const bx0 = ix0 + c * (w / nCols) + (c > 0 ? GAP / 2 : 0);
            const bx1 = ix0 + (c + 1) * (w / nCols) - (c < nCols - 1 ? GAP / 2 : 0);
            const by0 = iy0 + r * (h / nRows) + (r > 0 ? GAP / 2 : 0);
            const by1 = iy0 + (r + 1) * (h / nRows) - (r < nRows - 1 ? GAP / 2 : 0);
            const bw = bx1 - bx0, bh = by1 - by0;
            if (bw < 40 || bh < 40) continue;

            // Detalhes do telhado (caixas de ar-condicionado, etc.)
            const units = [];
            const nUnits = 1 + Math.floor(rnd() * 3);
            for (let u = 0; u < nUnits; u++) {
              const uw = 14 + rnd() * 22, uh = 14 + rnd() * 18;
              units.push({
                x: bx0 + 14 + rnd() * Math.max(1, bw - uw - 28),
                y: by0 + 14 + rnd() * Math.max(1, bh - uh - 28),
                w: uw, h: uh
              });
            }
            list.push({
              x: bx0, y: by0, w: bw, h: bh,
              color: ROOF_COLORS[Math.floor(rnd() * ROOF_COLORS.length)],
              units
            });
          }
        }
      }
    }
    return list;
  }

  const BUILDINGS = generateBuildings();

  /* ==========================================================================
     4. ESTADO DO JOGO
     ========================================================================== */
  const START_POS = { x: 1565, y: 1265 };
  const PLAYER_R = 14;
  const PLAYER_SPEED = 260;
  const TERMINAL_TOUCH = 42;    // distância para abrir ao encostar
  const TERMINAL_RANGE = 95;    // distância para o prompt de "E"
  const WRONG_INTEGRITY = 15;   // dano por resposta errada
  const RUNOVER_DAMAGE = 22;   // dano por atropelamento
  const INVULN_TIME = 1.4;     // invulnerabilidade após atropelamento
  const KNOCKBACK = 46;        // empurrão ao ser atropelado
  const POLICE_R = 15;         // raio da viatura
  const POLICE_CATCH = 30;     // distância para ser preso
  const POLICE_SPEED_BASE = 175;
  const POLICE_SPEED_PER_STAR = 14;
  const POLICE_MIN_DIST = 430;
  const POLICE_MAX_DIST = 830;
  const POLICE_MAX = 4;

  const state = {
    mode: 'title',             // title | playing | modal | busted | wasted | victory
    money: 0,
    stars: 0,                  // estrelas de procurado (0..5)
    integrity: 100,
    errors: 0,
    completed: 0,
    terminals: [],
    player: { x: START_POS.x, y: START_POS.y, dir: -Math.PI / 2 },
    cars: [],
    police: [],                // viaturas da polícia em perseguição
    invuln: 0,                 // invulnerabilidade após atropelamento
    hitFlash: 0,               // flash vermelho de dano
    overlapCar: false,         // jogador está em cima de um carro
    current: null,             // terminal aberto no modal
    keys: new Set(),
    autoOpenLock: false,       // evita reabrir o modal logo após fechar
    time: 0
  };

  function resetState() {
    state.money = 0;
    state.stars = 0;
    state.integrity = 100;
    state.errors = 0;
    state.completed = 0;
    state.terminals = TERMINAL_POS.map((t, i) => ({
      x: t.x, y: t.y, qi: t.q, done: false, idx: i + 1
    }));
    state.player = { x: START_POS.x, y: START_POS.y, dir: -Math.PI / 2 };
    state.cars = CAR_BLUEPRINT.map(c => ({ ...c }));
    state.police = [];
    state.invuln = 0;
    state.hitFlash = 0;
    state.overlapCar = false;
    state.current = null;
    state.autoOpenLock = false;
    state.keys.clear();
  }
  resetState();

  /* ==========================================================================
     5. ELEMENTOS DO DOM
     ========================================================================== */
  const $ = id => document.getElementById(id);
  const canvas = $('game');
  const ctx = canvas.getContext('2d');
  const radar = $('radar');
  const rctx = radar.getContext('2d');

  const dom = {
    money: $('money'), stars: document.querySelectorAll('#wanted .star'),
    integrity: $('integrity-bar'), missionText: $('mission-text'),
    missionProgress: $('mission-progress'), arrow: $('arrow'),
    indicatorText: $('indicator-text'), indicator: $('indicator'),
    prompt: $('prompt'), modal: $('modal'), modalDistrict: $('modal-district'),
    modalQuestion: $('modal-question'), modalOptions: $('modal-options'),
    modalHint: $('modal-hint'), modalFeedback: $('modal-feedback'),
    btnContinue: $('btn-continue'), busted: $('busted'), wasted: $('wasted'),
    victory: $('victory'), title: $('title'), hud: $('hud'),
    wantedLabel: $('wanted-label')
  };

  /* ==========================================================================
     6. UTILITÁRIOS
     ========================================================================== */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function circleRect(cx, cy, r, rect) {
    const nx = Math.max(rect.x, Math.min(cx, rect.x + rect.w));
    const ny = Math.max(rect.y, Math.min(cy, rect.y + rect.h));
    const dx = cx - nx, dy = cy - ny;
    return dx * dx + dy * dy < r * r;
  }

  function carRect(c) {
    return c.axis === 'h'
      ? { x: c.x - 24, y: c.y - 11, w: 48, h: 22 }
      : { x: c.x - 11, y: c.y - 24, w: 22, h: 48 };
  }

  function districtOf(x, y) {
    if (x < 1300 && y < 1000) return DISTRICTS[0];
    if (x >= 1300 && y < 1000) return DISTRICTS[1];
    if (x < 1300 && y >= 1000) return DISTRICTS[2];
    return DISTRICTS[3];
  }

  function activeTerminals() {
    return state.terminals.filter(t => !t.done);
  }

  // Terminal mais próximo ainda não concluído (alvo da seta indicadora)
  function targetTerminal() {
    const act = activeTerminals();
    if (!act.length) return null;
    let best = act[0], bestD = Infinity;
    for (const t of act) {
      const d = (t.x - state.player.x) ** 2 + (t.y - state.player.y) ** 2;
      if (d < bestD) { bestD = d; best = t; }
    }
    return best;
  }

  /* ==========================================================================
     7. CÂMERA E DIMENSÕES
     ========================================================================== */
  let viewW = window.innerWidth, viewH = window.innerHeight, dpr = 1;
  const cam = { x: 0, y: 0 };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    viewW = window.innerWidth;
    viewH = window.innerHeight;
    canvas.width = viewW * dpr;
    canvas.height = viewH * dpr;
    canvas.style.width = viewW + 'px';
    canvas.style.height = viewH + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize);
  resize();

  function updateCamera() {
    cam.x = Math.max(0, Math.min(state.player.x - viewW / 2, WORLD.w - viewW));
    cam.y = Math.max(0, Math.min(state.player.y - viewH / 2, WORLD.h - viewH));
    if (WORLD.w < viewW) cam.x = (WORLD.w - viewW) / 2;
    if (WORLD.h < viewH) cam.y = (WORLD.h - viewH) / 2;
  }

  /* ==========================================================================
     8. MOVIMENTO E COLISÃO
     ========================================================================== */
  function solidAt(x, y, r) {
    if (x - r < 0 || x + r > WORLD.w || y - r < 0 || y + r > WORLD.h) return true;
    for (const b of BUILDINGS) {
      if (circleRect(x, y, r, b)) return true;
    }
    return false;
  }

  function blocked(x, y) {
    if (solidAt(x, y, PLAYER_R)) return true;
    // Se o jogador já está em cima de um carro, ele pode sair:
    // evita ficar "preso" para sempre quando um carro passa por cima
    if (!state.overlapCar) {
      for (const c of state.cars) {
        if (circleRect(x, y, PLAYER_R, carRect(c))) return true;
      }
    }
    return false;
  }

  function refreshOverlap() {
    state.overlapCar = state.cars.some(c =>
      circleRect(state.player.x, state.player.y, PLAYER_R, carRect(c)));
  }

  function updatePlayer(dt) {
    refreshOverlap();
    const k = state.keys;
    let dx = 0, dy = 0;
    if (k.has('w') || k.has('arrowup')) dy -= 1;
    if (k.has('s') || k.has('arrowdown')) dy += 1;
    if (k.has('a') || k.has('arrowleft')) dx -= 1;
    if (k.has('d') || k.has('arrowright')) dx += 1;
    if (!dx && !dy) return;

    const len = Math.hypot(dx, dy);
    dx /= len; dy /= len;
    state.player.dir = Math.atan2(dy, dx);

    const step = PLAYER_SPEED * dt;
    // Eixo X e Y separados → desliza suave pelas paredes
    if (!blocked(state.player.x + dx * step, state.player.y)) state.player.x += dx * step;
    if (!blocked(state.player.x, state.player.y + dy * step)) state.player.y += dy * step;
  }

  function updateCars(dt) {
    for (const c of state.cars) {
      if (c.axis === 'h') {
        c.x += c.dir * c.speed * dt;
        if (c.dir > 0 && c.x > WORLD.w + 60) c.x = -60;
        if (c.dir < 0 && c.x < -60) c.x = WORLD.w + 60;
      } else {
        c.y += c.dir * c.speed * dt;
        if (c.dir > 0 && c.y > WORLD.h + 60) c.y = -60;
        if (c.dir < 0 && c.y < -60) c.y = WORLD.h + 60;
      }
    }
  }

  /* ==========================================================================
     8b. ATROPELAMENTO (tira vida, empurra e dá invulnerabilidade)
     ========================================================================== */
  function updateRunOvers(dt) {
    if (state.invuln > 0) state.invuln = Math.max(0, state.invuln - dt);
    if (state.hitFlash > 0) state.hitFlash = Math.max(0, state.hitFlash - dt);
    if (state.mode !== 'playing') return;

    for (const c of state.cars) {
      if (!circleRect(state.player.x, state.player.y, PLAYER_R, carRect(c))) continue;
      if (state.invuln > 0) return;

      // ---------- ATROPELAMENTO ----------
      state.integrity = Math.max(0, state.integrity - RUNOVER_DAMAGE);
      state.invuln = INVULN_TIME;
      state.hitFlash = 0.55;

      // Empurra o jogador para longe do centro do carro
      const r = carRect(c);
      let nx = state.player.x - (r.x + r.w / 2);
      let ny = state.player.y - (r.y + r.h / 2);
      const len = Math.hypot(nx, ny) || 1;
      nx /= len; ny /= len;

      state.overlapCar = true;   // permite atravessar o carro no empurrão
      const tx = state.player.x + nx * KNOCKBACK;
      const ty = state.player.y + ny * KNOCKBACK;
      if (!blocked(tx, state.player.y)) state.player.x = tx;
      if (!blocked(state.player.x, ty)) state.player.y = ty;
      refreshOverlap();

      updateHUD(true);
      if (state.integrity <= 0) showWasted();
      return;
    }
  }

  /* ==========================================================================
     8c. POLÍCIA (nasce conforme as estrelas e prende ao encostar)
     ========================================================================== */
  function syncPolice() {
    if (state.mode !== 'playing') return;
    const want = Math.min(state.stars, POLICE_MAX);
    while (state.police.length < want) spawnPolice();
    while (state.police.length > want) state.police.pop();
  }

  function spawnPolice() {
    const speed = POLICE_SPEED_BASE + Math.max(0, state.stars - 1) * POLICE_SPEED_PER_STAR;
    let x = null, y = null;

    // Sorteia um ponto no asfalto a uma boa distância do jogador
    for (let i = 0; i < 50 && x === null; i++) {
      const horiz = Math.random() < 0.5;
      let px, py;
      if (horiz) {
        const rd = ROADS_H[(Math.random() * ROADS_H.length) | 0];
        px = 20 + Math.random() * (WORLD.w - 40);
        py = (rd.y0 + rd.y1) / 2 + (Math.random() < 0.5 ? -17 : 17);
      } else {
        const rd = ROADS_V[(Math.random() * ROADS_V.length) | 0];
        py = 20 + Math.random() * (WORLD.h - 40);
        px = (rd.x0 + rd.x1) / 2 + (Math.random() < 0.5 ? -17 : 17);
      }
      const d = Math.hypot(px - state.player.x, py - state.player.y);
      if (d >= POLICE_MIN_DIST && d <= POLICE_MAX_DIST) { x = px; y = py; }
    }

    if (x === null) {
      // Fallback: na rua horizontal mais próxima do jogador
      let rd = ROADS_H[0];
      for (const r of ROADS_H) {
        if (Math.abs((r.y0 + r.y1) / 2 - state.player.y) <
            Math.abs((rd.y0 + rd.y1) / 2 - state.player.y)) rd = r;
      }
      y = (rd.y0 + rd.y1) / 2;
      x = state.player.x + (Math.random() < 0.5 ? -650 : 650);
      x = Math.max(40, Math.min(WORLD.w - 40, x));
    }

    state.police.push({
      x, y,
      dir: Math.atan2(state.player.y - y, state.player.x - x),
      speed,
      siren: Math.random() * Math.PI * 2
    });
  }

  function updatePolice(dt) {
    if (state.mode !== 'playing') return;
    for (const p of state.police) {
      p.siren += dt * 12;

      let dx = state.player.x - p.x, dy = state.player.y - p.y;
      if (Math.hypot(dx, dy) < POLICE_CATCH) { showBusted(); return; }

      const step = p.speed * dt;
      const sx = Math.sign(dx), sy = Math.sign(dy);
      const adx = Math.abs(dx), ady = Math.abs(dy);

      // Perseguição em eixos: contorna os quarteirões pelas esquinas
      if (adx >= ady) {
        if (sx !== 0 && !solidAt(p.x + sx * step, p.y, POLICE_R)) {
          p.x += sx * step; p.dir = sx > 0 ? 0 : Math.PI;
        } else if (sy !== 0 && !solidAt(p.x, p.y + sy * step, POLICE_R)) {
          p.y += sy * step; p.dir = sy > 0 ? Math.PI / 2 : -Math.PI / 2;
        }
      } else {
        if (sy !== 0 && !solidAt(p.x, p.y + sy * step, POLICE_R)) {
          p.y += sy * step; p.dir = sy > 0 ? Math.PI / 2 : -Math.PI / 2;
        } else if (sx !== 0 && !solidAt(p.x + sx * step, p.y, POLICE_R)) {
          p.x += sx * step; p.dir = sx > 0 ? 0 : Math.PI;
        }
      }

      dx = state.player.x - p.x; dy = state.player.y - p.y;
      if (Math.hypot(dx, dy) < POLICE_CATCH) { showBusted(); return; }
    }
  }

  /* ==========================================================================
     9. INTERAÇÃO COM TERMINAIS
     ========================================================================== */
  function nearestInRange() {
    let best = null, bestD = Infinity;
    for (const t of state.terminals) {
      if (t.done) continue;
      const d = Math.hypot(t.x - state.player.x, t.y - state.player.y);
      if (d < TERMINAL_RANGE && d < bestD) { bestD = d; best = t; }
    }
    return best;
  }

  function checkTerminalProximity() {
    const near = nearestInRange();

    // Prompt de interação
    dom.prompt.classList.toggle('hidden', !(near && state.mode === 'playing'));

    // Ao encostar no terminal ativo → abre a missão automaticamente
    if (state.mode === 'playing' && near && !state.autoOpenLock) {
      const d = Math.hypot(near.x - state.player.x, near.y - state.player.y);
      if (d < TERMINAL_TOUCH) openMission(near);
    }

    // Libera a abertura automática quando o jogador sai de perto
    if (state.autoOpenLock) {
      const stillNear = state.terminals.some(t =>
        !t.done && Math.hypot(t.x - state.player.x, t.y - state.player.y) < 75);
      if (!stillNear) state.autoOpenLock = false;
    }
  }

  function interact() {
    if (state.mode !== 'playing') return;
    const near = nearestInRange();
    if (near) openMission(near);
  }

  /* ==========================================================================
     10. MODAL DE MISSÃO (pergunta + alternativas embaralhadas)
     ========================================================================== */
  function openMission(term) {
    const question = QUESTIONS[term.qi];
    state.current = term;
    state.mode = 'modal';

    dom.modalDistrict.textContent = question.district.toUpperCase();
    dom.modalQuestion.textContent = question.q;
    dom.modalHint.classList.add('hidden');
    dom.modalFeedback.classList.add('hidden');
    dom.btnContinue.classList.add('hidden');

    // Embaralha as 4 alternativas a cada exibição
    const options = shuffle([
      { text: question.correct, ok: true },
      ...question.wrong.map(w => ({ text: w, ok: false }))
    ]);

    dom.modalOptions.innerHTML = '';
    options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.innerHTML = `<span class="key">${i + 1}</span>${opt.text}`;
      btn.addEventListener('click', () => answer(btn, opt, question));
      dom.modalOptions.appendChild(btn);
    });

    dom.modal.classList.remove('hidden');
  }

  function answer(btn, opt, question) {
    if (btn.disabled) return;
    const buttons = [...dom.modalOptions.children];

    if (opt.ok) {
      // ---------- RESPOSTA CERTA ----------
      buttons.forEach(b => (b.disabled = true));
      btn.classList.add('correct');

      state.money += 1000;
      state.stars = Math.max(0, state.stars - 1);
      state.integrity = Math.min(100, state.integrity + 10);
      state.current.done = true;
      state.completed += 1;

      dom.modalFeedback.innerHTML =
        `MISSÃO CUMPRIDA! +$1.000<br>` +
        `<span style="font-family:Arial;font-size:13px;font-weight:normal;letter-spacing:0;color:#b9ffb9">` +
        `${question.fact}</span>`;
      dom.modalFeedback.classList.remove('hidden');
      dom.btnContinue.textContent =
        state.completed === 15 ? 'VER RESULTADO' : 'CONTINUAR';
      dom.btnContinue.classList.remove('hidden');
      updateHUD(true);
    } else {
      // ---------- RESPOSTA ERRADA ----------
      btn.classList.add('wrong');
      btn.disabled = true;

      state.errors += 1;
      state.stars = Math.min(5, state.stars + 1);
      state.integrity = Math.max(0, state.integrity - WRONG_INTEGRITY);
      state.hitFlash = 0.45;

      dom.modalHint.innerHTML = `<b>DICA:</b> ${question.hint}`;
      dom.modalHint.classList.remove('hidden');
      updateHUD(true);

      // Vida zerada → WASTED
      if (state.integrity <= 0) {
        buttons.forEach(b => (b.disabled = true));
        setTimeout(showWasted, 650);
        return;
      }

      // 5 estrelas → BUSTED
      if (state.stars >= 5) {
        buttons.forEach(b => (b.disabled = true));
        setTimeout(showBusted, 650);
      }
    }
  }

  function closeModal() {
    dom.modal.classList.add('hidden');
    state.current = null;
    state.autoOpenLock = true;   // precisa sair do raio para reabrir
    if (state.completed === 15) showVictory();
    else state.mode = 'playing';
  }

  dom.btnContinue.addEventListener('click', closeModal);

  /* ==========================================================================
     11. TELAS: BUSTED / VITÓRIA / TÍTULO
     ========================================================================== */
  function showBusted() {
    dom.modal.classList.add('hidden');
    dom.wasted.classList.add('hidden');
    state.keys.clear();
    state.mode = 'busted';
    dom.busted.classList.remove('hidden');
  }

  function showWasted() {
    dom.modal.classList.add('hidden');
    dom.busted.classList.add('hidden');
    state.keys.clear();
    state.mode = 'wasted';
    dom.wasted.classList.remove('hidden');
  }

  function showVictory() {
    state.mode = 'victory';
    $('victory-score').textContent = '$' + state.money.toLocaleString('pt-BR');
    $('victory-missions').textContent = state.completed + ' / 15';
    $('victory-errors').textContent = String(state.errors);
    dom.victory.classList.remove('hidden');
  }

  function restartGame() {
    dom.busted.classList.add('hidden');
    dom.wasted.classList.add('hidden');
    dom.victory.classList.add('hidden');
    dom.modal.classList.add('hidden');
    dom.title.classList.add('hidden');
    resetState();
    state.mode = 'playing';
    updateHUD(true);
  }

  $('btn-restart').addEventListener('click', restartGame);
  $('btn-busted-restart').addEventListener('click', restartGame);
  $('btn-wasted-restart').addEventListener('click', restartGame);
  $('btn-victory-restart').addEventListener('click', restartGame);
  $('btn-start').addEventListener('click', () => {
    dom.title.classList.add('hidden');
    state.mode = 'playing';
  });

  /* ==========================================================================
     12. HUD (grana, estrelas, integridade, missão, seta indicadora)
     ========================================================================== */
  const hudCache = {};
  function updateHUD(force) {
    const moneyStr = '$' + state.money.toLocaleString('pt-BR');
    if (force || hudCache.money !== moneyStr) {
      dom.money.textContent = moneyStr;
      hudCache.money = moneyStr;
    }

    dom.stars.forEach((s, i) => s.classList.toggle('on', i < state.stars));

    const hunting = state.stars > 0;
    if (force || hudCache.hunting !== hunting) {
      dom.wantedLabel.classList.toggle('hidden', !hunting);
      hudCache.hunting = hunting;
    }

    const pct = state.integrity + '%';
    if (force || hudCache.pct !== pct) {
      dom.integrity.style.width = pct;
      dom.integrity.style.background = state.integrity > 50
        ? 'linear-gradient(#7CE77C, #2e9e2e)'
        : state.integrity > 25
          ? 'linear-gradient(#ffd700, #b8860b)'
          : 'linear-gradient(#ff5555, #a01010)';
      hudCache.pct = pct;
    }

    const progress = `TERMINAIS: ${state.completed} / 15`;
    if (force || hudCache.progress !== progress) {
      dom.missionProgress.textContent = progress;
      hudCache.progress = progress;
    }

    const target = targetTerminal();
    if (target) {
      const q = QUESTIONS[target.qi];
      const text = `Terminal #${target.idx} — ${q.district}: ${q.q}`;
      if (force || hudCache.text !== text) {
        dom.missionText.textContent = text;
        hudCache.text = text;
      }

      // Seta apontando do jogador para o terminal alvo
      const ang = Math.atan2(target.y - state.player.y, target.x - state.player.x);
      dom.arrow.style.transform = `rotate(${(ang * 180) / Math.PI + 90}deg)`;
      const dist = Math.round(Math.hypot(target.x - state.player.x, target.y - state.player.y) / 10);
      dom.indicatorText.textContent = `TERMINAL #${target.idx} — ${dist}m`;
      dom.indicator.classList.remove('hidden');
    } else {
      dom.indicator.classList.add('hidden');
      dom.missionText.textContent = 'Todos os terminais concluídos!';
    }
  }

  /* ==========================================================================
     13. ENTRADA (teclado)
     ========================================================================== */
  const GAME_KEYS = ['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '];

  window.addEventListener('keydown', e => {
    const key = e.key.toLowerCase();
    if (GAME_KEYS.includes(key)) e.preventDefault();

    // Alternativas pelo teclado (1..4) quando o modal está aberto
    if (state.mode === 'modal' && ['1', '2', '3', '4'].includes(key)) {
      const btn = dom.modalOptions.children[Number(key) - 1];
      if (btn && !btn.disabled) btn.click();
      return;
    }

    if ((key === 'e' || key === 'enter') && state.mode === 'playing') {
      e.preventDefault();
      interact();
      return;
    }

    if (key === 'enter' && state.mode === 'title') {
      $('btn-start').click();
      return;
    }

    state.keys.add(key);
  });

  window.addEventListener('keyup', e => {
    state.keys.delete(e.key.toLowerCase());
  });

  /* ==========================================================================
     14. RENDERIZAÇÃO DO MUNDO (canvas principal)
     ========================================================================== */
  function drawGround() {
    // Asfalto base
    ctx.fillStyle = '#17181e';
    ctx.fillRect(0, 0, WORLD.w, WORLD.h);

    // Tinta sutil dos distritos
    ctx.globalAlpha = 0.06;
    ctx.fillStyle = DISTRICTS[0].color;
    ctx.fillRect(0, 0, 1300, 1000);
    ctx.fillStyle = DISTRICTS[1].color;
    ctx.fillRect(1300, 0, 1300, 1000);
    ctx.fillStyle = DISTRICTS[2].color;
    ctx.fillRect(0, 1000, 1300, 1000);
    ctx.fillStyle = DISTRICTS[3].color;
    ctx.fillRect(1300, 1000, 1300, 1000);
    ctx.globalAlpha = 1;
  }

  function drawRoads() {
    // Calçadas (retângulo um pouco maior que a pista)
    ctx.fillStyle = '#3a3c46';
    for (const r of ROADS_H) ctx.fillRect(0, r.y0 - 16, WORLD.w, (r.y1 - r.y0) + 32);
    for (const r of ROADS_V) ctx.fillRect(r.x0 - 16, 0, (r.x1 - r.x0) + 32, WORLD.h);

    // Pistas
    ctx.fillStyle = '#26272f';
    for (const r of ROADS_H) ctx.fillRect(0, r.y0, WORLD.w, r.y1 - r.y0);
    for (const r of ROADS_V) ctx.fillRect(r.x0, 0, r.x1 - r.x0, WORLD.h);

    // Faixa tracejada central
    ctx.strokeStyle = '#c9a227';
    ctx.lineWidth = 3;
    ctx.setLineDash([26, 22]);
    ctx.beginPath();
    for (const r of ROADS_H) {
      const my = (r.y0 + r.y1) / 2;
      ctx.moveTo(0, my); ctx.lineTo(WORLD.w, my);
    }
    for (const r of ROADS_V) {
      const mx = (r.x0 + r.x1) / 2;
      ctx.moveTo(mx, 0); ctx.lineTo(mx, WORLD.h);
    }
    ctx.stroke();
    ctx.setLineDash([]);
  }

  function drawDistrictLabels() {
    ctx.save();
    ctx.globalAlpha = 0.22;
    ctx.font = "700 62px Impact, 'Arial Black', sans-serif";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const d of DISTRICTS) {
      ctx.fillStyle = d.color;
      ctx.fillText(d.label, d.lx, d.ly);
    }
    ctx.restore();
  }

  function drawBuildings() {
    for (const b of BUILDINGS) {
      // Descarta os que estão fora da câmera
      if (b.x + b.w < cam.x - 50) continue;
      if (b.x > cam.x + viewW + 50) continue;
      if (b.y + b.h < cam.y - 50) continue;
      if (b.y > cam.y + viewH + 50) continue;

      // Sombra
      ctx.fillStyle = 'rgba(0,0,0,0.45)';
      ctx.fillRect(b.x + 6, b.y + 7, b.w, b.h);
      // Telhado
      ctx.fillStyle = b.color;
      ctx.fillRect(b.x, b.y, b.w, b.h);
      // Parapeito
      ctx.strokeStyle = 'rgba(255,255,255,0.10)';
      ctx.lineWidth = 3;
      ctx.strokeRect(b.x + 4, b.y + 4, b.w - 8, b.h - 8);
      // Detalhes do telhado
      ctx.fillStyle = 'rgba(0,0,0,0.28)';
      for (const u of b.units) ctx.fillRect(u.x, u.y, u.w, u.h);
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      for (const u of b.units) ctx.fillRect(u.x + 2, u.y + 2, u.w - 4, 3);
    }
  }

  function drawTerminals(t) {
    for (const term of state.terminals) {
      if (term.x < cam.x - 60 || term.x > cam.x + viewW + 60 ||
          term.y < cam.y - 60 || term.y > cam.y + viewH + 60) continue;

      const pulse = 0.5 + 0.5 * Math.sin(t * 3 + term.idx);
      const color = term.done ? '#7CE77C' : '#7CE7FF';

      // Halo pulsante no chão
      const grad = ctx.createRadialGradient(term.x, term.y, 4, term.x, term.y, 40 + pulse * 10);
      grad.addColorStop(0, term.done ? 'rgba(124,231,124,0.55)' : 'rgba(124,231,255,0.55)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(term.x, term.y, 40 + pulse * 10, 0, Math.PI * 2);
      ctx.fill();

      // Anel
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(term.x, term.y, 22 + pulse * 4, 0, Math.PI * 2);
      ctx.stroke();

      // Poste do terminal
      ctx.fillStyle = '#10121a';
      ctx.beginPath();
      ctx.arc(term.x, term.y, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(term.x, term.y, 8, 0, Math.PI * 2);
      ctx.fill();

      // Número do terminal
      ctx.font = "700 14px Impact, 'Arial Black', sans-serif";
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 3;
      const label = term.done ? '✓' : String(term.idx);
      ctx.strokeText(label, term.x, term.y - 34);
      ctx.fillText(label, term.x, term.y - 34);
    }
  }

  function drawCars() {
    for (const c of state.cars) {
      if (c.x < cam.x - 60 || c.x > cam.x + viewW + 60 ||
          c.y < cam.y - 60 || c.y > cam.y + viewH + 60) continue;

      ctx.save();
      ctx.translate(c.x, c.y);
      if (c.axis === 'v') ctx.rotate(Math.PI / 2);
      if (c.dir < 0 && c.axis === 'h') ctx.rotate(Math.PI);
      if (c.dir < 0 && c.axis === 'v') ctx.rotate(Math.PI);

      // Sombra + carroceria
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.fillRect(-24 + 3, -11 + 4, 48, 22);
      ctx.fillStyle = c.color;
      ctx.fillRect(-24, -11, 48, 22);
      // Teto / para-brisa
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      ctx.fillRect(-8, -8, 18, 16);
      // Faróis
      ctx.fillStyle = '#ffe9a0';
      ctx.fillRect(20, -9, 4, 5);
      ctx.fillRect(20, 4, 4, 5);
      ctx.restore();
    }
  }

  function drawPolice() {
    for (const p of state.police) {
      if (p.x < cam.x - 70 || p.x > cam.x + viewW + 70 ||
          p.y < cam.y - 70 || p.y > cam.y + viewH + 70) continue;

      const phase = Math.sin(p.siren) > 0;
      const light = phase ? '#ff3030' : '#3060ff';

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.dir);

      // Brilho das luzes no chão
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = light;
      ctx.beginPath();
      ctx.arc(0, 0, 24, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      // Sombra + carroceria (preto e branco)
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.fillRect(-22 + 3, -11 + 4, 44, 22);
      ctx.fillStyle = '#f2f2f2';
      ctx.fillRect(-22, -11, 44, 22);
      ctx.fillStyle = '#14161c';
      ctx.fillRect(-22, -11, 11, 22);
      ctx.fillRect(11, -11, 11, 22);
      // Cabine
      ctx.fillStyle = 'rgba(0,0,0,0.62)';
      ctx.fillRect(-6, -8, 14, 16);
      // Faróis
      ctx.fillStyle = '#ffe9a0';
      ctx.fillRect(19, -9, 4, 5);
      ctx.fillRect(19, 4, 4, 5);
      // Girafol (luzes de emergência piscando)
      ctx.fillStyle = light;
      ctx.fillRect(-3, -11, 6, 22);
      // Brilho da luz
      ctx.globalAlpha = 0.75;
      ctx.beginPath();
      ctx.arc(0, 0, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      ctx.restore();
    }
  }

  function drawPlayer() {
    const p = state.player;
    ctx.save();
    ctx.translate(p.x, p.y);

    // Sombra
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    ctx.beginPath();
    ctx.ellipse(2, 4, 13, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    // Pisca durante a invulnerabilidade pós-atropelamento
    ctx.globalAlpha = state.invuln > 0 && Math.floor(state.time * 14) % 2 === 0 ? 0.3 : 1;

    // Corpo (de cima)
    ctx.rotate(p.dir + Math.PI / 2);
    ctx.fillStyle = '#3b6bd6';
    ctx.beginPath();
    ctx.arc(0, 0, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1c3f8f';
    ctx.lineWidth = 2;
    ctx.stroke();
    // Braços
    ctx.fillStyle = '#3b6bd6';
    ctx.fillRect(-14, -4, 5, 9);
    ctx.fillRect(9, -4, 5, 9);
    // Cabeça
    ctx.fillStyle = '#f0c090';
    ctx.beginPath();
    ctx.arc(0, -2, 7, 0, Math.PI * 2);
    ctx.fill();
    // Frente (nariz indicando direção)
    ctx.fillStyle = '#20232e';
    ctx.beginPath();
    ctx.arc(0, -7, 2.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function render(t) {
    updateCamera();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, viewW, viewH);

    // Mundo
    ctx.save();
    ctx.translate(-cam.x, -cam.y);
    drawGround();
    drawRoads();
    drawDistrictLabels();
    drawBuildings();
    drawTerminals(t);
    drawCars();
    drawPolice();
    drawPlayer();
    ctx.restore();

    // Flash vermelho ao levar dano (atropelamento / erro)
    if (state.hitFlash > 0) {
      ctx.fillStyle = `rgba(255, 30, 30, ${(state.hitFlash / 0.55) * 0.4})`;
      ctx.fillRect(0, 0, viewW, viewH);
    }

    // Vinheta leve (clima noturno)
    const vg = ctx.createRadialGradient(viewW / 2, viewH / 2, Math.min(viewW, viewH) * 0.35,
                                        viewW / 2, viewH / 2, Math.max(viewW, viewH) * 0.75);
    vg.addColorStop(0, 'rgba(0,0,0,0)');
    vg.addColorStop(1, 'rgba(0,0,0,0.45)');
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, viewW, viewH);

    drawRadar();
  }

  /* ==========================================================================
     15. RADAR / MINIMAPA
     ========================================================================== */
  function drawRadar() {
    const S = radar.width;              // 180
    const scale = S / WORLD.w;
    const offY = (S - WORLD.h * scale) / 2;

    rctx.save();
    rctx.clearRect(0, 0, S, S);

    // Recorte circular
    rctx.beginPath();
    rctx.arc(S / 2, S / 2, S / 2 - 3, 0, Math.PI * 2);
    rctx.clip();

    rctx.fillStyle = '#0c0d12';
    rctx.fillRect(0, 0, S, S);

    // Tinta dos distritos
    const quads = [
      [0, 0, 1300, 1000, 'rgba(255,157,0,0.18)'],
      [1300, 0, 1300, 1000, 'rgba(124,231,255,0.18)'],
      [0, 1000, 1300, 1000, 'rgba(197,140,255,0.18)'],
      [1300, 1000, 1300, 1000, 'rgba(124,231,124,0.18)']
    ];
    for (const [qx, qy, qw, qh, col] of quads) {
      rctx.fillStyle = col;
      rctx.fillRect(qx * scale, qy * scale + offY, qw * scale, qh * scale);
    }

    // Ruas
    rctx.strokeStyle = '#555a68';
    rctx.lineWidth = Math.max(2, 90 * scale);
    rctx.beginPath();
    for (const r of ROADS_H) {
      const my = ((r.y0 + r.y1) / 2) * scale + offY;
      rctx.moveTo(0, my); rctx.lineTo(S, my);
    }
    for (const r of ROADS_V) {
      const mx = ((r.x0 + r.x1) / 2) * scale;
      rctx.moveTo(mx, 0); rctx.lineTo(mx, S);
    }
    rctx.stroke();

    // Terminais
    for (const term of state.terminals) {
      rctx.fillStyle = term.done ? '#7CE77C' : '#7CE7FF';
      rctx.beginPath();
      rctx.arc(term.x * scale, term.y * scale + offY, term.done ? 3 : 4, 0, Math.PI * 2);
      rctx.fill();
    }

    // Polícia (luzes de viatura piscando)
    for (const p of state.police) {
      rctx.fillStyle = Math.sin(p.siren) > 0 ? '#ff4040' : '#4d8bff';
      rctx.beginPath();
      rctx.arc(p.x * scale, p.y * scale + offY, 4, 0, Math.PI * 2);
      rctx.fill();
    }

    // Jogador (triângulo indicando direção)
    const px = state.player.x * scale;
    const py = state.player.y * scale + offY;
    rctx.save();
    rctx.translate(px, py);
    rctx.rotate(state.player.dir + Math.PI / 2);
    rctx.fillStyle = '#fff';
    rctx.beginPath();
    rctx.moveTo(0, -7);
    rctx.lineTo(5, 6);
    rctx.lineTo(-5, 6);
    rctx.closePath();
    rctx.fill();
    rctx.restore();

    rctx.restore();
  }

  /* ==========================================================================
     16. LOOP PRINCIPAL
     ========================================================================== */
  // API pública mínima de depuração (usada em testes automatizados)
  window.GTArq = {
    get state() { return state; },
    get buildings() { return BUILDINGS; },
    get questions() { return QUESTIONS; }
  };

  let last = performance.now();
  function loop(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    state.time += dt;

    if (state.mode === 'playing') {
      updatePlayer(dt);
      updateCars(dt);
      updateRunOvers(dt);
      syncPolice();
      updatePolice(dt);
      checkTerminalProximity();
      updateHUD(false);
    } else if (state.mode === 'title') {
      updateCars(dt);   // cidade "viva" atrás da tela inicial
    }

    render(state.time);
    requestAnimationFrame(loop);
  }

  updateHUD(true);
  requestAnimationFrame(loop);
})();
