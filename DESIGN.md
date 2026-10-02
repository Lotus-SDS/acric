---
name: ACRIC · Quadra Poliesportiva
description: O site da Associação das Crianças de Castelo desenhado como a quadra pintada da escola pública, onde as linhas de cada atividade se cruzam.
colors:
  azul-quadra: "#2F58B0"
  azul-quadra-claro: "#3A64BE"
  azul-fio: "#6F8CCB"
  azul-nevoa: "#D9E1F5"
  indigo-acric: "#3D3C77"
  noite: "#23224A"
  fio-noite: "#5A5990"
  lavanda: "#C9CAEB"
  tinta: "#1D1C45"
  tinta-suave: "#474670"
  cimento: "#D5D7D7"
  branco: "#FFFFFF"
  linha-branca: "#F6F5F0"
  linha-amarela: "#F4C23A"
  amarelo-vivo: "#FFD45C"
  linha-vermelha: "#E2432E"
  vermelho-cimento: "#C2361F"
  linha-verde: "#3DBE6E"
  verde-cimento: "#1F8448"
  placar: "#141330"
  led: "#FFB23F"
  led-apagado: "#2B2950"
typography:
  display:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(3.25rem, min(1.6rem + 5.2vw, 11vh), 6rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "normal"
  headline:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3.6vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 0.9
  headline-sm:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 3vw, 3.5rem)"
    fontWeight: 900
    lineHeight: 0.95
  quote:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.4vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.32
  title:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(1.625rem, 1.3rem + 1vw, 2.125rem)"
    fontWeight: 800
    lineHeight: 1
  plate:
    fontFamily: "Big Shoulders Stencil, Big Shoulders, sans-serif"
    fontSize: "clamp(1.375rem, 1.1rem + 0.8vw, 1.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
  lead:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.05rem + 0.45vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 800
    lineHeight: 1.32
  body-sm:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.45
  small:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.45
  label:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
  data:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, monospace"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.3
    fontFeature: "tnum"
  data-lg:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, monospace"
    fontSize: "clamp(1.375rem, 0.9rem + 2.2vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    fontFeature: "tnum"
rounded:
  pintura: "2px"
  placar: "3px"
  bola: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  coluna: "clamp(1.25rem, 0.75rem + 1.5vw, 2rem)"
  secao: "clamp(5rem, 3.5rem + 5vw, 8.5rem)"
  envelope: "77.5rem"
  topo: "4.25rem"
components:
  button-primary:
    backgroundColor: "{colors.linha-amarela}"
    textColor: "{colors.tinta}"
    typography: "{typography.button}"
    rounded: "{rounded.pintura}"
    padding: "0.95rem 1.35rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.amarelo-vivo}"
    textColor: "{colors.tinta}"
  button-line:
    backgroundColor: "{colors.azul-quadra}"
    textColor: "{colors.branco}"
    typography: "{typography.button}"
    rounded: "{rounded.pintura}"
    padding: "0.95rem 1.35rem"
    height: "3rem"
  button-line-hover:
    backgroundColor: "{colors.azul-quadra-claro}"
    textColor: "{colors.branco}"
  nav-link:
    textColor: "{colors.branco}"
    typography: "{typography.small}"
    padding: "0.5rem 0"
  scoreboard:
    backgroundColor: "{colors.placar}"
    textColor: "{colors.led}"
    rounded: "{rounded.placar}"
    padding: "0.7rem 1rem 0.95rem"
  workshop-plate:
    textColor: "{colors.branco}"
    typography: "{typography.plate}"
  pix-key-zone:
    backgroundColor: "{colors.indigo-acric}"
    textColor: "{colors.branco}"
    padding: "clamp(1.75rem, 1.25rem + 2vw, 3.25rem)"
  board-row:
    textColor: "{colors.tinta}"
    typography: "{typography.body}"
    padding: "0.9rem 0"
---

# Design System: ACRIC · Quadra Poliesportiva

## Overview

**Creative North Star: "A Quadra Poliesportiva"**

A página é a quadra pintada da escola pública vista de cima. As linhas de vários esportes se cruzam no mesmo chão, e o logo redondo da ACRIC fica no círculo central. Cada seção é uma zona dessa quadra:

- **Abertura:** o centro da quadra.
- **Quem somos:** fora da quadra, no cimento.
- **Oficinas:** o garrafão de basquete, em amarelo.
- **Parceria com a Rochativa:** a quadra de vôlei, em vermelho.
- **Como doar:** o garrafão índigo com o semicírculo do lance livre.
- **Diretoria:** a súmula.
- **Contato:** a área do gol na linha de fundo.

A densidade é de escola viva: fotos reais das crianças em quantidade, texto enxuto, números só onde a própria quadra os mostraria (o placar). O mundo é saturado e quente sem ser infantil. O azul do uniforme e das cortinas da sede ocupa superfícies inteiras, e o amarelo aparece onde há ação. As fotos nunca levam véu escuro. O usuário vetou o visual frio ou corporativo e a "ONG genérica" (mãos, corações, tons pastel).

O movimento pertence ao material: as linhas são pintadas em velocidade constante, como o carrinho de pintura de quadra, e isso acontece na abertura e conforme a rolagem. O placar liga mostrando 88:88 antes dos valores. A bola rola pela lateral e gira exatamente o quanto se deslocou.

**Key Characteristics:**
- piso azul-quadra com grão de cimento, garrafões em índigo e cimento claro fora da quadra;
- linhas pintadas nítidas, uma cor por seção, que se cruzam só no centro;
- letreiro condensado Big Shoulders, com a versão Stencil para o que é pintado no chão;
- texto em Atkinson Hyperlegible Next, pensado para leitura fácil;
- placar de sete segmentos em LED âmbar;
- zonas pintadas e planas: sombra só em objeto físico.

## Colors

A paleta é a de uma quadra pintada: um azul saturado que cobre regiões inteiras, índigo nas áreas marcadas, cimento em volta e tinta de demarcação em quatro cores.

### Primary
- **Azul-quadra** (#2F58B0): o piso. Cobre a abertura, as oficinas, o Como doar e o contato, sempre com o grão de cimento por cima. É o azul do short do uniforme e das cortinas da sede.

### Secondary
- **Índigo ACRIC** (#3D3C77): a tinta do logo. Preenche os garrafões (a parceria com a Rochativa, a zona do PIX, a placa das famílias) e é a cor dos títulos sobre o cimento.
- **Noite** (#23224A): o cabeçalho e o rodapé, a parede atrás da quadra.

### Tertiary
- **Linha amarela** (#F4C23A): demarcação de basquete e, ao mesmo tempo, a cor de toda ação (Doar, Quero ajudar, Copiar chave). O hover vai para o **amarelo vivo** (#FFD45C).
- **Linha vermelha** (#E2432E): demarcação de vôlei, na parceria com a Rochativa. Sobre o cimento vira o **vermelho-cimento** (#C2361F), que risca a súmula da diretoria.
- **Linha verde** (#3DBE6E): demarcação de handebol, nas áreas tracejadas e no contato. Sobre o cimento vira o **verde-cimento** (#1F8448).
- **LED** (#FFB23F): o segmento aceso do placar. O segmento apagado continua visível em **LED apagado** (#2B2950), sobre a caixa do **placar** (#141330).

### Neutral
- **Cimento** (#D5D7D7): o chão fora da quadra, neutro-frio. Leva o Quem somos, a diretoria e o fundo da página.
- **Tinta** (#1D1C45): o texto sobre o cimento. **Tinta suave** (#474670) é o texto secundário e os rótulos sobre o cimento.
- **Branco** (#FFFFFF): o texto sobre azul e índigo. **Linha branca** (#F6F5F0) é a tinta de demarcação branca, o círculo central e os contornos pintados.
- **Névoa** (#D9E1F5): o texto secundário sobre o azul-quadra. **Lavanda** (#C9CAEB) faz o mesmo papel sobre o índigo e a noite.
- **Fio azul** (#6F8CCB) e **fio noite** (#5A5990): fios de tabela e divisórias finas sobre o azul e sobre a noite.
- **Azul-quadra claro** (#3A64BE): só o hover do botão de contorno.

### Named Rules
**The Amarelo é Ação Rule.** O amarelo preenchido aparece só no que se pode apertar. Como linha pintada, ele demarca o basquete, mas nunca vira fundo de bloco que não seja ação.

**The Uma Cor por Seção Rule.** Cada seção carrega uma única cor de linha (verde, amarela, vermelha, branca). As quatro só se cruzam no centro da quadra, na abertura.

**The Sem Véu Rule.** Foto de criança nunca leva véu escuro. Quando um texto precisa ficar sobre foto, ele vai numa placa índigo pintada, com o filete branco por dentro.

## Typography

**Display Font:** Big Shoulders (com fallback Arial Narrow)
**Plate Font:** Big Shoulders Stencil, no que é pintado no chão
**Body Font:** Atkinson Hyperlegible Next (com fallback system-ui)
**Data Font:** Atkinson Hyperlegible Mono, para chave PIX, contas e CNPJ

**Character:** Letreiro condensado de sinalização cívica e esportiva, em caixa-alta, como o nome pintado na parede da quadra. Ao lado, uma sans de leitura fácil, desenhada para quem enxerga pouco, que acolhe o doador mais velho.

### Hierarchy
- **Display** (900, clamp(3.25rem, min(1.6rem + 5.2vw, 11vh), 6rem), 0.86): só o título da abertura, em caixa-alta. O limite pela altura da tela mantém as ações acima da dobra em telas baixas.
- **Headline** (900, clamp(2.5rem, 1.5rem + 3.6vw, 4.5rem), 0.9): títulos de seção, o "PIX" e o fechamento "Nossas crianças agradecem.".
- **Headline pequeno** (900, clamp(2rem, 1.2rem + 3vw, 3.5rem), 0.95): a frase sobre a foto das famílias e os links do menu no celular.
- **Quote** (800, clamp(1.5rem, 1.1rem + 1.4vw, 2.25rem), 1.32): a missão da ACRIC e a frase "A solidariedade é o amor em movimento.", em caixa normal.
- **Title** (800, clamp(1.625rem, 1.3rem + 1vw, 2.125rem), 1): subtítulos em caixa-alta e o nome das oficinas maiores.
- **Plate** (Stencil 800, clamp(1.375rem, 1.1rem + 0.8vw, 1.75rem), 1): nome das oficinas, fatos do Quem somos e a sigla ACRIC no cabeçalho.
- **Lead** (400, clamp(1.1875rem, 1.05rem + 0.45vw, 1.375rem), 1.5): o parágrafo de abertura de cada seção.
- **Body** (400, 1.125rem, 1.6; 1.0625rem no celular): texto corrido, com medida de até 38rem (~70ch).
- **Label** (700, 0.8125rem, 0.1em, caixa-alta): rótulos de dado (placar, cargos, cabeçalho da tabela, quem conduz a oficina).
- **Data** (Mono 600, 1rem, algarismos tabulares): contas, agência e CNPJ. O **data grande** (clamp(1.375rem, 0.9rem + 2.2vw, 2.5rem)) é só para a chave PIX.

### Named Rules
**The Sem Sobretítulo Rule.** Nenhum rótulo em cima de título. Rótulo só existe como legenda de dado (cargo, banco, chegada), sempre abaixo ou ao lado do que descreve.

**The Mono é Dado Rule.** A fonte mono aparece só em número que alguém vai digitar (chave, agência, conta, CNPJ), nunca como enfeite.

## Layout

- **Envelope:** a grade vive num envelope de até 77,5rem, com respiro lateral de clamp(1.25rem, 4vw, 3rem) de cada lado. A abertura e o cabeçalho usam até 82rem.
- **Grades:** as seções usam 12 colunas com espaço de clamp(1.25rem, 0.75rem + 1.5vw, 2rem).
- **Ritmo vertical:** cada seção tem clamp(5rem, 3.5rem + 5vw, 8.5rem) em cima e embaixo, com mais espaço acima de um título que abaixo dele.
- **Abertura:**
  - três colunas: texto, o círculo central (clamp(12rem, 16vw, 18rem)) e o bloco foto + ações;
  - camadas: foto embaixo, linhas pintadas no meio, texto e botões em cima.
- **Oficinas:**
  - o almoço como destaque de 6 colunas por 2 linhas;
  - oficinas de 3 colunas;
  - a brinquedoteca em 8 colunas com duas fotos.
- **Rochativa:** grade 2×2 dentro da quadra de vôlei vermelha, com a linha central caindo no vão entre as colunas.
- **Quem somos:** duas colunas independentes (foto + fatos e missão + texto + sede) que se intercalam no celular.

Pontos de quebra:
- **1180px:** some o nome longo ao lado da sigla.
- **1000px:**
  - o menu vira botão e o Doar continua visível;
  - a quadra da abertura fica em pé e o círculo central sai;
  - as grades viram 6 colunas.
- **640px:** oficinas em 2 colunas, Rochativa em 1 coluna e placar compacto.
- **380px:** o botão Menu fica só com o ícone.

## Elevation & Depth

O mundo é plano como um piso pintado. A profundidade vem de camadas e de parallax, não de sombras.

- **Sem sombra:** as zonas pintadas (garrafões, a placa das famílias, a zona do PIX) são planas, delimitadas por contorno pintado.
- **Com sombra:** só objetos físicos sobre o piso. São as fotos, o placar, o botão amarelo, o cabeçalho depois de rolar e a bola.
- **Tipo de sombra:** sempre com deslocamento e desfoque, na cor noite translúcida.
- **Parallax:**
  - o piso desce mais devagar que a foto na saída da abertura;
  - cada foto corre dentro da própria moldura;
  - as colunas das oficinas andam em velocidades diferentes.

### Shadow Vocabulary
- **Objeto sobre o piso** (`box-shadow: 0 18px 36px -18px rgba(12, 11, 36, 0.62)`): fotos, quadros, placar e a imagem aérea do contato.
- **Botão de ação** (`box-shadow: 0 8px 16px -8px rgba(12, 11, 36, 0.62)`; no hover, `0 12px 20px -10px rgba(12, 11, 36, 0.62)` com subida de 2px): só o botão amarelo.
- **Cabeçalho rolado** (`box-shadow: 0 10px 22px -12px rgba(12, 11, 36, 0.62)`): aparece depois de 8px de rolagem.

### Named Rules
**The Chão Não Faz Sombra Rule.** O que é pintado no chão não projeta sombra. Se um bloco é zona da quadra, ele se delimita com linha pintada.

## Shapes

- **Cantos:** quase retos, como fita crepe na pintura. São 2px nos botões e 3px no placar. Arredondado só na bola.
- **Linhas:** traços nítidos de 5 a 6px (4px no celular), sem borda serrilhada e sem textura de pincel.
- **Geometria da quadra:**
  - arcos de área de futsal;
  - garrafão com semicírculo de lance livre;
  - linha de três pontos;
  - quadra de vôlei com a extensão tracejada das linhas de ataque;
  - linha de fundo com trave.
- **Proporções:** as marcações são geradas a partir das caixas reais de cada bloco, então nunca se distorcem.
- **Fotos:** sempre em quadros retangulares sem arredondamento.

## Components

### Buttons
- **Shape:** cantos de 2px, altura mínima de 3rem (2.75rem no compacto do cabeçalho).
- **Primary:** fundo linha amarela, texto tinta, peso 800 e sombra de botão. É a única superfície amarela preenchida da página.
- **Hover / Focus:** amarelo vivo com subida de 2px. O foco é um anel amarelo de 3px com 3px de afastamento, e anel índigo sobre o cimento.
- **Linha:** contorno branco de 2px sobre o azul-quadra, com hover no azul-quadra claro. Usado em "Copiar chave PIX" e "Cadastrar no Nota Premiada".
- **Copiar:** troca o ícone de copiar pelo de confirmado e o rótulo por "Chave copiada" por 2,6s, e anuncia a cópia numa região ao vivo.

### Navigation
- **Cabeçalho:** faixa noite fixa no topo, com logo branco, sigla ACRIC em Stencil, âncoras e o Doar amarelo.
- **Âncoras:** Atkinson 700 em 0.9375rem. No hover e na seção atual (`aria-current`) ganham um traço amarelo de 3px que se pinta da esquerda para a direita.
- **Celular:** o Doar compacto continua ao lado do botão Menu. O menu abre em tela cheia sobre o azul-quadra, com links em caixa-alta grandes.

### Scoreboard (componente-assinatura)
Caixa placar com etiqueta "Seg a sex · contraturno" e células fixas (Chegada, Saída, Idade), divididas por fios em LED apagado.

- **Dígitos:** sete segmentos em SVG, com inclinação de -6°. O aceso é em LED e o apagado continua visível.
- **Ligação:** na abertura o placar acende 88:88, apaga e mostra os valores.
- **Sem JavaScript:** o texto aparece em Stencil âmbar.
- **Leitores de tela:** leem o valor por extenso.

### Workshop Plate (mobília fixa de cada oficina)
Foto em quadro retangular com parallax interno e, abaixo, a plaqueta:
- nome em Stencil branco;
- "quem conduz" como rótulo com um quadradinho da cor da linha (amarelo para ACRIC, vermelho para Rochativa);
- uma linha curta descrevendo só o que a foto mostra.

### Painted Markings
Um SVG gerado por script em volta do bloco marcado. Os tipos são:
- garrafão;
- lateral com marcas de substituição;
- quadra de vôlei;
- área do gol.

Os traços se pintam em velocidade constante conforme a rolagem. Só a marcação da seção em foco fica viva (opacidade 1). As outras ficam gastas (0.38).

### PIX Key Zone
Garrafão índigo plano com contorno branco pintado e semicírculo de lance livre por cima. Leva:
- o título "PIX";
- o rótulo "Chave CNPJ";
- a chave em mono grande;
- o botão amarelo de copiar;
- a nota para conferir o recebedor.

Entra na página pintado de baixo para cima.

### Board Row (súmula)
Cargo em rótulo e nome em Atkinson 700, com um risco vermelho-cimento de 3px embaixo que é pintado da esquerda para a direita, linha após linha.

## Do's and Don'ts

### Do:
- **Do** cubra seções inteiras com azul-quadra (#2F58B0) ou índigo (#3D3C77), sempre com o grão de cimento por cima.
- **Do** pinte as linhas em velocidade constante (duração proporcional ao comprimento, sem easing), tanto na abertura quanto na rolagem.
- **Do** use uma cor de linha por seção, e deixe as quatro se cruzarem só no círculo central.
- **Do** mostre as fotos reais das crianças abertas, em quadros retos, com parallax dentro da moldura.
- **Do** mantenha o Doar amarelo alcançável de qualquer ponto, inclusive no cabeçalho do celular.
- **Do** deixe todo o conteúdo visível sem JavaScript e com movimento reduzido: nesse caso, as linhas aparecem já pintadas e paradas.

### Don't:
- **Don't** ponha véu escuro sobre foto de criança; texto sobre foto vai numa placa índigo pintada.
- **Don't** use mãos, corações, tons pastel ou cartões de ícone. O usuário vetou a "ONG genérica" e o visual frio ou corporativo.
- **Don't** dê sombra a zona pintada da quadra.
- **Don't** use amarelo preenchido em nada que não seja ação.
- **Don't** ponha rótulo ou sobretítulo em cima de título.
- **Don't** use a fonte mono fora de dado digitável.
- **Don't** use brilho sem deslocamento (glow) atrás de texto. Onde as linhas cruzam um texto corrido, o texto ganha um remendo de piso.
