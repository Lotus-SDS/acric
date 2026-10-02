Revisão de acabamento feita no próprio fluxo, pelo roteiro `reference/degraded/finish-reviewer.md`. Não foi usado subagente porque o usuário não pediu um.

Build code-led, sem comp aprovado e sem QUALITY BAR, porque a direção é uma candidata própria e não um mundo do catálogo. Entradas lidas: `desktop.png` (1440×10896), `mobile.png` (390×13399), `motion-abertura-0650ms.png`, `motion-abertura-final.png`, `motion-oficinas-pintando.png`, `motion-rochativa.png`, `motion-doar.png`, o contrato de direção em `.impeccable/surfaces/index-html.md`, `PRODUCT.md`, os achados do detector e o `craft-floor.md`.

disposition: fix

## persistence
- **Resultado:** pass.
- **Registros:** PRODUCT.md existe. O contrato de direção está no brief da superfície, com os seis blocos e a seed 5cb54137 (reroll 1).
- **Por ser code-led:** não há `state.json`, comps em `.impeccable/mocks/` nem rodada de comps.
- **DESIGN.md:** será escrito depois desta revisão, e a ausência dele agora não é achado.

## fidelity
Não há comp aprovado. TYPE, MATERIAL e GROUND foram julgados contra o bloco OWN-WORLD.

- **TYPE — match.** Big Shoulders condensada no letreiro, Stencil nas plaquetas, Atkinson Hyperlegible Next no texto e LED de sete segmentos desenhado em SVG no placar.
- **MATERIAL — match.** O grão de cimento é um raster real, tingido por superfície. As linhas pintadas são traços nítidos, como na quadra real pintada com fita. O placar tem segmentos apagados visíveis e nenhum brilho falso.
- **GROUND — match.** O piso azul-quadra fica em torno de #2F58B0 com o grão. O cimento é cinza neutro-frio (#D5D7D7), sem deriva para o creme.
- **Primeira dobra — match.** Quadra vista de cima, logo no círculo central, título à esquerda, foto na área com linhas por cima e placar embaixo à esquerda.
- **Ações da dobra — adaptação.** "Quero ajudar" e "Copiar chave PIX" ficam logo abaixo da foto, e não mais sobre a linha lateral. O motivo: em 1280×720 os botões caíam abaixo da dobra.
- **Logo central no celular — adaptação.** Fica oculto em 390px, porque o círculo colidiria com o texto. O logo segue no cabeçalho.
- **Assinatura de movimento — match.** As linhas são pintadas em velocidade constante na abertura e com a rolagem. A bola rola na lateral com rotação igual ao deslocamento dividido pelo raio. O placar liga em 88:88.
- **Raises — match.**
  - física real;
  - placar de células fixas;
  - uma linha viva por vez;
  - uma cor por seção (verde, amarela, vermelha, branca, vermelha, verde);
  - mobília fixa por oficina (nome, quem conduz, uma linha).
- **Zonas sem sombra — contradicted.** O garrafão do PIX (`.pix`) e a placa das famílias (`.familias__placa`) projetam sombra. O OWN-WORLD diz "zonas delimitadas por linhas pintadas, nunca por cartões com sombra".
- **Ação sempre ao alcance no celular — missing.** Abaixo de 1000px o cabeçalho perde o botão Doar. O princípio 2 do PRODUCT.md diz que "ajudar" deve ser alcançável de qualquer ponto da página.

## ceiling
Não há QUALITY BAR para calibrar. Dispositivos nativos da quadra que ficaram sem uso:
- desgaste do piso nas áreas de maior uso;
- numeração em estêncil;
- a rede de vôlei como elemento físico.

Nenhum deles é necessário para o recado.

## material_fixes
1. **Botão Doar no cabeçalho do celular.** Mostrar um Doar compacto ao lado de Menu em ≤1000px (STORY e princípio 2 do PRODUCT.md).
2. **Tirar as sombras das zonas pintadas.** Remover a sombra de `.pix` e `.familias__placa`; o contorno pintado e o filete interno já delimitam as zonas (OWN-WORLD).

## keep
Não diluir:
- a quadra da abertura, com o logo no círculo central e as linhas pintadas em velocidade constante;
- o placar de sete segmentos;
- as fotos reais sem véu escuro.

---

## Passe de verificação (depois das correções)

As recapturas foram feitas sobre os mesmos arquivos (`desktop.png`, `mobile.png`), mais um recorte do cabeçalho em 320 e 390px.

## verdict
1. **Doar no cabeçalho do celular: resolved.** Em 390px aparece "Doar" com "Menu"; em 320px, "Doar" com o menu só em ícone (nome acessível mantido). Em nenhum dos dois há rolagem lateral.
2. **Sombras nas zonas pintadas: resolved.** O garrafão do PIX e a placa das famílias estão planos, delimitados só pelo contorno pintado e pelo filete interno.

Regressões: nenhuma visível.

## remaining
clear

disposition: ship (vale para as duas correções pontuadas acima)
