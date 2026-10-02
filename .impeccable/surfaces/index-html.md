---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Página única da ACRIC (index.html)

## Escopo e modo
Página única institucional, modo **Persuade**. Substitui o Google Sites atual (5 páginas) por uma página com âncoras: Quem somos, Oficinas, Como doar, Diretoria, Contato.

## Estratégia da superfície
- **Quem precisa agir:** doadores e apoiadores de Castelo e região. Famílias e parceiros são secundários.
- **Ação:** doar por PIX (chave CNPJ copiável), débito automático mensal em uma das 5 contas ou indicar a ACRIC na Nota Premiada Capixaba.
- **O que o visitante precisa acreditar:** a ACRIC é um lugar seguro depois da escola, real e antigo, cheio de crianças fazendo coisas, e ajudar é fácil.
- **Prova:** fotos reais de cada oficina, do refeitório, da sede e do grupo. Mais de 35 anos, mais de 100 crianças de 6 a 15 anos, SCFV (Res. CNAS 109/2009), duas vezes Criança Esperança, CNPJ e diretoria nominal.
- **Vetos do usuário:** nada frio ou corporativo (sem cara de banco), nada de "ONG genérica" (mãos, corações, pastel). Stack: HTML + GSAP (ScrollTrigger e SplitText) por CDN, sem build. Conteúdo visível sem JS e com movimento reduzido.
- **Momento memorável:** as linhas da quadra se pintam no ritmo de um carrinho de pintura conforme a rolagem, cruzando-se no círculo central onde está o logo.

## Decisões em aberto
- Horários divergentes no site original (atendimento 11h30–16h00 × funcionamento 12h–17h): os dois ficam como publicados, cada um no seu contexto.
- O celular (28) 99917-6952 não está confirmado como WhatsApp, então aparece só como telefone.

## Direction contract

THESIS: Todas as oficinas, um chão só. A página é a quadra poliesportiva pintada da escola pública: as linhas de cada atividade se cruzam e o logo redondo da ACRIC ocupa o círculo central. Recusa a landing de ONG (foto com véu escuro, faixa de números, cartões de ícone, mãos e corações).

OWN-WORLD: Piso azul-quadra com grão de cimento. Garrafões em índigo ACRIC (#3D3C77). Fora da quadra, cimento claro. Linhas pintadas branca, amarela, vermelha e verde, com uma cor por seção. Letreiro em Big Shoulders, com a versão Stencil para o que é pintado no chão; texto em Atkinson Hyperlegible Next. Placar de 7 segmentos em LED âmbar. As zonas são delimitadas por linhas pintadas, nunca por cartões com sombra.

STORY: O doador de Castelo entende em segundos que a ACRIC é um lugar seguro depois da escola para mais de 100 crianças, há mais de 35 anos. Vê as crianças nas oficinas reais, confia (CNPJ, diretoria, SCFV, Criança Esperança) e copia o PIX ou anota uma conta para o débito mensal.

FIRST VIEWPORT: A quadra vista de cima ocupa a tela, com a linha central e o círculo central com o logo no meio. À esquerda, o título "Um lugar seguro depois da escola." em Big Shoulders, com cerca de 6rem. À direita, a foto do grupo diante da sede dentro da área, com as linhas pintadas por cima. Embaixo à esquerda, o placar (chegada 11:30, saída 16:00, idade 6–15). Embaixo à direita, na linha lateral, "Quero ajudar" e "Copiar chave PIX". No topo, cabeçalho fino com logo, âncoras e Doar.

FORM: Quadra Poliesportiva, candidata 4 da lista reordenada após o re-sorteio (1 caderno escolar, 2 folha mimeografada, 3 serigrafia do uniforme, 4 quadra, 5 álbum de figurinhas, 6 letreiro pintado, 7 relevo de Castelo). Seed 5cb54137, reroll 1. Assinatura: as linhas se pintam em velocidade constante com a rolagem, uma bola rola pela linha lateral com rotação física e o placar liga mostrando 88:88. Raises: física real; placar de células fixas; uma linha ativa por vez; uma cor de linha por seção; mobília fixa por oficina (nome, quem conduz, uma linha).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
