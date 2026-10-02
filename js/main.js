/* ACRIC · Quadra Poliesportiva
   As linhas se pintam em velocidade constante, como o carrinho de pintura;
   a bola rola pela lateral com rotação física; o placar liga mostrando 88:88.
   Tudo o que é conteúdo fica visível sem JavaScript e com movimento reduzido. */
(function () {
  'use strict';

  var raiz = document.documentElement;
  var NS = 'http://www.w3.org/2000/svg';
  var temGsap = !!(window.gsap && window.ScrollTrigger);
  var querMovimento = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  function liberarAbertura() { raiz.classList.remove('anim-pendente'); }
  if (!temGsap || !querMovimento) liberarAbertura();

  /* ---------- Copiar a chave PIX ---------- */
  var aviso = document.querySelector('.aviso');

  function copiarTexto(texto) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(texto);
    return new Promise(function (resolve, rejeita) {
      var campo = document.createElement('textarea');
      campo.value = texto;
      campo.setAttribute('readonly', '');
      campo.style.position = 'fixed';
      campo.style.opacity = '0';
      document.body.appendChild(campo);
      campo.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (erro) { ok = false; }
      document.body.removeChild(campo);
      if (ok) resolve(); else rejeita();
    });
  }

  document.querySelectorAll('[data-copiar]').forEach(function (botao) {
    var rotulo = botao.querySelector('.botao__texto');
    var original = rotulo.textContent;
    var espera;
    botao.addEventListener('click', function () {
      copiarTexto(botao.dataset.copiar).then(function () {
        botao.classList.add('copiado');
        rotulo.textContent = botao.dataset.rotuloOk || 'Copiado';
        aviso.textContent = 'Chave PIX copiada: CNPJ 31.726.755/0001-00.';
        clearTimeout(espera);
        espera = setTimeout(function () {
          botao.classList.remove('copiado');
          rotulo.textContent = original;
          aviso.textContent = '';
        }, 2600);
      }, function () {
        rotulo.textContent = 'Chave: 31726755000100';
        aviso.textContent = 'Não foi possível copiar. A chave PIX é o CNPJ 31726755000100.';
      });
    });
  });

  /* ---------- Menu no celular ---------- */
  var menuBotao = document.querySelector('.menu-botao');
  var menu = document.getElementById('menu-movel');
  var menuFechar = menu.querySelector('.menu-movel__fechar');

  function abrirMenu() {
    menu.hidden = false;
    menuBotao.setAttribute('aria-expanded', 'true');
    raiz.style.overflow = 'hidden';
    menuFechar.focus();
    if (temGsap && querMovimento) {
      gsap.from(menu.querySelectorAll('nav li, .botao'), { y: 28, opacity: 0, duration: 0.7, ease: 'expo.out', stagger: 0.05 });
    }
  }
  function fecharMenu(devolverFoco) {
    menu.hidden = true;
    menuBotao.setAttribute('aria-expanded', 'false');
    raiz.style.overflow = '';
    if (devolverFoco) menuBotao.focus();
  }
  menuBotao.addEventListener('click', abrirMenu);
  menuFechar.addEventListener('click', function () { fecharMenu(true); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) fecharMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) fecharMenu(true); });

  /* ---------- Placar de sete segmentos ---------- */
  var MAPA = { '0': 'abcdef', '1': 'bc', '2': 'abged', '3': 'abgcd', '4': 'fgbc', '5': 'afgcd', '6': 'afgedc', '7': 'abc', '8': 'abcdefg', '9': 'abcdfg', '-': 'g' };
  var ESP = 6; // espessura do segmento
  function horizontal(x, y, c) { return [x, y + ESP / 2, x + ESP / 2, y, x + c - ESP / 2, y, x + c, y + ESP / 2, x + c - ESP / 2, y + ESP, x + ESP / 2, y + ESP].join(' '); }
  function vertical(x, y, c) { return [x + ESP / 2, y, x + ESP, y + ESP / 2, x + ESP, y + c - ESP / 2, x + ESP / 2, y + c, x, y + c - ESP / 2, x, y + ESP / 2].join(' '); }
  var FORMAS = {
    a: horizontal(3.5, 0, 27), g: horizontal(3.5, 27, 27), d: horizontal(3.5, 54, 27),
    f: vertical(0, 3.5, 26), b: vertical(28, 3.5, 26), e: vertical(0, 30.5, 26), c: vertical(28, 30.5, 26)
  };

  function montarSegmentos(valor) {
    var svg = document.createElementNS(NS, 'svg');
    var grupo = document.createElementNS(NS, 'g');
    var x = 0;
    var digitos = [];
    valor.split('').forEach(function (ch) {
      if (ch === ':') {
        [17, 37].forEach(function (y) {
          var ponto = document.createElementNS(NS, 'rect');
          ponto.setAttribute('x', x + 1);
          ponto.setAttribute('y', y);
          ponto.setAttribute('width', 6);
          ponto.setAttribute('height', 6);
          ponto.setAttribute('class', 'aceso');
          grupo.appendChild(ponto);
        });
        x += 14;
        return;
      }
      var digito = { alvo: MAPA[ch] || '', partes: {} };
      Object.keys(FORMAS).forEach(function (k) {
        var seg = document.createElementNS(NS, 'polygon');
        seg.setAttribute('points', FORMAS[k]);
        seg.setAttribute('transform', 'translate(' + x + ' 0)');
        grupo.appendChild(seg);
        digito.partes[k] = seg;
      });
      digitos.push(digito);
      x += 42;
    });
    grupo.setAttribute('transform', 'translate(7 0) skewX(-6)');
    svg.appendChild(grupo);
    svg.setAttribute('viewBox', '0 0 ' + (x + 1) + ' 60');
    svg.setAttribute('class', 'segmentos');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    return { svg: svg, digitos: digitos };
  }

  function acender(placar, escolha) {
    placar.digitos.forEach(function (d) {
      var acesos = escolha(d);
      Object.keys(d.partes).forEach(function (k) { d.partes[k].classList.toggle('aceso', acesos.indexOf(k) > -1); });
    });
  }

  var placares = [];
  document.querySelectorAll('[data-segmentos]').forEach(function (celula) {
    var leitura = celula.textContent;
    var placar = montarSegmentos(celula.dataset.segmentos);
    var oculto = document.createElement('span');
    oculto.className = 'visualmente-oculto';
    oculto.textContent = leitura;
    celula.textContent = '';
    celula.appendChild(placar.svg);
    celula.appendChild(oculto);
    celula.classList.add('tem-segmentos');
    acender(placar, function (d) { return d.alvo; });
    placares.push(placar);
  });

  function testarPlacar() { placares.forEach(function (p) { acender(p, function () { return 'abcdefg'; }); }); }
  function apagarPlacar() { placares.forEach(function (p) { acender(p, function () { return ''; }); }); }
  function mostrarPlacar() { placares.forEach(function (p) { acender(p, function (d) { return d.alvo; }); }); }

  /* ---------- Marcações pintadas em volta dos blocos ---------- */
  var CORES = { 'quem-somos': 'verde', 'oficinas': 'amarela', 'rochativa': 'vermelha', 'doar': 'branca', 'contato': 'verde' };
  var FOLGA = 24;

  // Cada tipo devolve a caixa do SVG (relativa ao elemento) e os traços, sempre na mesma quantidade.
  function geometria(el) {
    var w = el.offsetWidth;
    var h = el.offsetHeight;
    var o = FOLGA;
    var e = 10; // afastamento da linha em relação ao bloco
    var tipo = el.dataset.marca;

    if (tipo === 'garrafao') {
      var r = Math.max(34, Math.min(w * 0.2, 92));
      var topo = r + o;
      var x0 = o - e, y0 = topo - e, x1 = o + w + e, y1 = topo + h + e, cx = o + w / 2;
      return {
        caixa: [-o, -topo, w + 2 * o, h + topo + o],
        tracos: [
          { d: 'M' + x0 + ' ' + y0 + 'H' + x1 + 'V' + y1 + 'H' + x0 + 'Z' },
          { d: 'M' + (cx - r) + ' ' + y0 + 'A' + r + ' ' + r + ' 0 0 1 ' + (cx + r) + ' ' + y0 }
        ]
      };
    }

    if (tipo === 'lateral') {
      var itens = el.querySelectorAll('.fatos__item');
      var marcas = Array.prototype.map.call(itens, function (item) {
        var y = o + item.offsetTop + item.offsetHeight / 2;
        return 'M' + o + ' ' + y + 'h18';
      }).join('');
      return {
        caixa: [-o, -o, w + 2 * o, h + 2 * o],
        tracos: [
          { d: 'M' + o + ' ' + o + 'V' + (o + h) },
          { d: marcas || 'M0 0' }
        ]
      };
    }

    if (tipo === 'volei') {
      var deitada = w >= h * 0.8;
      var X0 = o, Y0 = o, X1 = o + w, Y1 = o + h;
      var meio, ext;
      if (deitada) {
        var mx = o + w / 2, dx = w / 6;
        meio = 'M' + mx + ' ' + Y0 + 'V' + Y1;
        ext = 'M' + (mx - dx) + ' ' + (Y0 - 20) + 'v14M' + (mx + dx) + ' ' + (Y0 - 20) + 'v14M' + (mx - dx) + ' ' + (Y1 + 6) + 'v14M' + (mx + dx) + ' ' + (Y1 + 6) + 'v14';
      } else {
        var my = o + h / 2, dy = h / 6;
        meio = 'M' + X0 + ' ' + my + 'H' + X1;
        ext = 'M' + (X0 - 20) + ' ' + (my - dy) + 'h14M' + (X0 - 20) + ' ' + (my + dy) + 'h14M' + (X1 + 6) + ' ' + (my - dy) + 'h14M' + (X1 + 6) + ' ' + (my + dy) + 'h14';
      }
      return {
        caixa: [-o, -o, w + 2 * o, h + 2 * o],
        tracos: [
          { d: 'M' + X0 + ' ' + Y0 + 'H' + X1 + 'V' + Y1 + 'H' + X0 + 'Z' },
          { d: meio },
          { d: ext, tracejado: true }
        ]
      };
    }

    // "area": a área do gol, aberta para a linha de fundo, com a trave do lado de fora
    var raio = Math.min(h * 0.3, w * 0.22, 150);
    var sobra = Math.min(w * 0.12, 64);
    var trave = Math.min(w * 0.3, 150);
    var a0 = o + sobra, b0 = o, a1 = a0 + w, b1 = o + h, meioA = a0 + w / 2;
    return {
      caixa: [-o - sobra, -o, w + 2 * (o + sobra), h + o + 34],
      tracos: [
        { d: 'M' + a0 + ' ' + b1 + 'V' + (b0 + raio) + 'A' + raio + ' ' + raio + ' 0 0 1 ' + (a0 + raio) + ' ' + b0 + 'H' + (a1 - raio) + 'A' + raio + ' ' + raio + ' 0 0 1 ' + a1 + ' ' + (b0 + raio) + 'V' + b1 },
        { d: 'M' + (a0 - sobra) + ' ' + b1 + 'H' + (a1 + sobra) },
        { d: 'M' + (meioA - trave / 2) + ' ' + b1 + 'v24h' + trave + 'v-24' }
      ]
    };
  }

  function desenharMarca(el) {
    var geo = geometria(el);
    var svg = el.querySelector(':scope > .marca-linha');
    if (!svg) {
      var secao = el.closest('section');
      svg = document.createElementNS(NS, 'svg');
      svg.setAttribute('class', 'marca-linha marca-linha--' + ((secao && CORES[secao.id]) || 'branca'));
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      geo.tracos.forEach(function (t) {
        var p = document.createElementNS(NS, 'path');
        if (t.tracejado) p.setAttribute('class', 'tracejado');
        svg.appendChild(p);
      });
      el.insertBefore(svg, el.firstChild);
    }
    svg.style.left = geo.caixa[0] + 'px';
    svg.style.top = geo.caixa[1] + 'px';
    svg.setAttribute('width', geo.caixa[2]);
    svg.setAttribute('height', geo.caixa[3]);
    svg.setAttribute('viewBox', '0 0 ' + geo.caixa[2] + ' ' + geo.caixa[3]);
    var caminhos = svg.querySelectorAll('path');
    geo.tracos.forEach(function (t, i) { caminhos[i].setAttribute('d', t.d); });
    return svg;
  }

  var blocosMarcados = Array.prototype.slice.call(document.querySelectorAll('[data-marca]'));
  function desenharTodas() { blocosMarcados.forEach(desenharMarca); }
  desenharTodas();

  /* ---------- A quadra da abertura fica em pé no celular ---------- */
  var desenho = document.querySelector('.quadra-desenho');
  var giro = desenho.querySelector('.quadra-desenho__giro');
  var logoCentral = desenho.querySelector('.circulo-central__logo');
  function ajustarQuadra() {
    var caixa = desenho.getBoundingClientRect();
    var retrato = caixa.width < caixa.height * 0.95;
    if (retrato === desenho._retrato) return;
    desenho._retrato = retrato;
    desenho.classList.toggle('is-retrato', retrato);
    desenho.setAttribute('viewBox', retrato ? '0 0 900 1600' : '0 0 1600 900');
    if (retrato) {
      giro.setAttribute('transform', 'translate(900 0) rotate(90)');
      logoCentral.setAttribute('transform', 'rotate(-90 800 450)');
    } else {
      giro.removeAttribute('transform');
      logoCentral.removeAttribute('transform');
    }
  }
  ajustarQuadra();

  /* ---------- Navegação ativa e sombra do topo ---------- */
  var topo = document.getElementById('topo');
  var linksNav = document.querySelectorAll('.topo__nav a');
  var ALVO = { 'quem-somos': 'quem-somos', 'oficinas': 'oficinas', 'rochativa': 'oficinas', 'doar': 'doar', 'diretoria': 'diretoria', 'contato': 'contato', 'inicio': null };
  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        var alvo = ALVO[entrada.target.id];
        linksNav.forEach(function (a) {
          if (alvo && a.getAttribute('href') === '#' + alvo) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main > section[id]').forEach(function (s) { observador.observe(s); });
  }

  var aguardando = false;
  window.addEventListener('scroll', function () {
    if (aguardando) return;
    aguardando = true;
    requestAnimationFrame(function () {
      topo.classList.toggle('rolou', window.scrollY > 8);
      aguardando = false;
    });
  }, { passive: true });

  /* ---------- Sem GSAP ou com movimento reduzido: tudo pintado e parado ---------- */
  if (!temGsap || !querMovimento) {
    document.querySelectorAll('.marca-linha').forEach(function (svg) { svg.classList.add('is-viva'); });
    var redesenho;
    window.addEventListener('resize', function () {
      clearTimeout(redesenho);
      redesenho = setTimeout(function () { desenharTodas(); ajustarQuadra(); }, 150);
    });
    return;
  }

  /* ---------- GSAP ---------- */
  gsap.registerPlugin(ScrollTrigger);
  if (window.SplitText) gsap.registerPlugin(SplitText);
  ScrollTrigger.config({ ignoreMobileResize: true });
  ScrollTrigger.addEventListener('refreshInit', function () { desenharTodas(); ajustarQuadra(); });

  var VELOCIDADE = 2600; // unidades de SVG por segundo: o carrinho de pintura não acelera

  function dividirLinhas(el) {
    if (!window.SplitText) return null;
    return SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'linha-dividida' });
  }

  // Abertura: as linhas de cada esporte são pintadas, uma equipe depois da outra
  function tocarAbertura() {
    var tl = gsap.timeline({ defaults: { ease: 'expo.out' }, paused: true });
    var largada = { branca: 0, amarela: 0.32, vermelha: 0.58 };
    var solidos = [];

    ['branca', 'amarela', 'vermelha'].forEach(function (cor) {
      gsap.utils.toArray('.linhas--' + cor + ' .traco:not(.traco--tracejado)').forEach(function (p, i) {
        var comprimento = p.getTotalLength();
        solidos.push(p);
        gsap.set(p, { strokeDasharray: comprimento, strokeDashoffset: comprimento });
        tl.to(p, { strokeDashoffset: 0, duration: comprimento / VELOCIDADE, ease: 'none' }, largada[cor] + i * 0.05);
      });
    });
    var anel = document.querySelector('.circulo-central__anel');
    var voltaAnel = anel.getTotalLength();
    solidos.push(anel);
    gsap.set(anel, { strokeDasharray: voltaAnel, strokeDashoffset: voltaAnel });
    tl.to(anel, { strokeDashoffset: 0, duration: voltaAnel / VELOCIDADE * 1.6, ease: 'none' }, 0.5);
    tl.from('.quadra-desenho .traco--tracejado', { opacity: 0, duration: 0.5, ease: 'none', stagger: 0.08 }, 1.05);
    tl.from('.quadra-desenho .ponto', { opacity: 0, duration: 0.3, ease: 'none', stagger: 0.05 }, 0.9);
    tl.from('.circulo-central__fundo, .circulo-central__logo', { scale: 0.7, opacity: 0, svgOrigin: '800 450', duration: 0.9 }, 0.95);

    var titulo = dividirLinhas(document.querySelector('.abertura__titulo'));
    if (titulo) tl.from(titulo.lines, { yPercent: 108, duration: 1.15, stagger: 0.09 }, 0.1);
    tl.from('.abertura__lead', { y: 26, opacity: 0, duration: 1 }, 0.42);
    tl.from('.abertura__foto', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.25, ease: 'expo.inOut', clearProps: 'clipPath' }, 0.15);
    tl.from('.abertura__foto img', { scale: 1.2, duration: 1.8 }, 0.15);
    tl.from('.placar', { y: 22, opacity: 0, duration: 0.8 }, 0.62);
    tl.call(testarPlacar, null, 0.8);
    tl.call(apagarPlacar, null, 1.18);
    tl.call(mostrarPlacar, null, 1.34);
    tl.from('.abertura__acoes > *', { y: 20, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.78);
    tl.eventCallback('onComplete', function () {
      gsap.set(solidos, { clearProps: 'strokeDasharray,strokeDashoffset' });
      if (titulo) titulo.revert();
    });

    liberarAbertura();
    tl.play();

    // Ao sair da abertura, o piso desce devagar e a foto sobe: profundidade
    var saida = { trigger: '.abertura', start: 'top top', end: 'bottom top', scrub: true };
    gsap.to('.quadra-desenho', { yPercent: 9, ease: 'none', scrollTrigger: saida });
    gsap.to('.abertura__foto', { yPercent: -16, ease: 'none', scrollTrigger: saida });
    gsap.to('.abertura__texto', { yPercent: -7, ease: 'none', scrollTrigger: saida });
  }

  var comecou = false;
  function comecar() {
    if (comecou) return;
    comecou = true;
    tocarAbertura();
    montarRolagem();
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(comecar);
    setTimeout(comecar, 1400);
  } else {
    comecar();
  }

  function montarRolagem() {
    // Marcações: pintadas conforme a rolagem, em velocidade constante; só a da seção em foco fica viva
    blocosMarcados.forEach(function (el) {
      var svg = el.querySelector(':scope > .marca-linha');
      var tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 22%', scrub: 0.8, invalidateOnRefresh: true }
      });
      svg.querySelectorAll('path').forEach(function (p) {
        if (p.classList.contains('tracejado')) {
          tl.fromTo(p, { opacity: 0 }, { opacity: 1, duration: 120, ease: 'none' });
          return;
        }
        var comprimento = function () { return p.getTotalLength(); };
        tl.fromTo(p,
          { strokeDasharray: comprimento, strokeDashoffset: comprimento },
          { strokeDashoffset: 0, duration: p.getTotalLength(), ease: 'none' });
      });
      ScrollTrigger.create({
        trigger: el.closest('section'),
        start: 'top 60%',
        end: 'bottom 40%',
        toggleClass: { targets: svg, className: 'is-viva' }
      });
    });

    // Títulos de seção sobem linha a linha
    gsap.utils.toArray('.titulo-secao, .familias__titulo').forEach(function (h) {
      var partes = dividirLinhas(h);
      if (!partes) return;
      gsap.from(partes.lines, {
        yPercent: 108, duration: 1.05, ease: 'expo.out', stagger: 0.08,
        scrollTrigger: { trigger: h, start: 'top 88%', once: true },
        onComplete: function () { partes.revert(); }
      });
    });

    // Fotos: o rolo de tinta passa de cima para baixo
    gsap.utils.toArray('.oficina .quadro, .quem__foto, .quem__sede .quadro, .contato__foto .quadro').forEach(function (q) {
      gsap.from(q, {
        clipPath: 'inset(0% 0% 100% 0%)', duration: 1.3, ease: 'expo.out', clearProps: 'clipPath',
        scrollTrigger: { trigger: q, start: 'top 90%', once: true }
      });
    });

    // Plaquetas das oficinas
    gsap.set('.placa', { y: 18, opacity: 0 });
    ScrollTrigger.batch('.placa', {
      start: 'top 94%',
      once: true,
      onEnter: function (lote) { gsap.to(lote, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.07 }); }
    });

    // Parallax dentro dos quadros: a foto corre mais devagar que a moldura
    gsap.utils.toArray('.quadro img[data-paralaxe]').forEach(function (img) {
      gsap.fromTo(img, { yPercent: -6 }, {
        yPercent: 6, ease: 'none',
        scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });

    // Profundidade por coluna na grade de oficinas
    function deslocamento(item, amplitudes) {
      var grade = item.parentElement;
      var coluna = Math.round(item.offsetLeft / Math.max(1, grade.offsetWidth / amplitudes.length));
      return amplitudes[Math.min(coluna, amplitudes.length - 1)];
    }
    gsap.utils.toArray('.oficinas__grade > .oficina').forEach(function (item) {
      var desloc = function () { return window.innerWidth > 640 ? deslocamento(item, [10, 30, 6, 22]) : 0; };
      gsap.fromTo(item, { y: desloc }, {
        y: function () { return -desloc(); }, ease: 'none',
        scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true }
      });
    });
    gsap.utils.toArray('.rochativa__grade > .oficina').forEach(function (item) {
      var desloc = function () { return window.innerWidth > 640 ? deslocamento(item, [0, 44]) : 0; };
      gsap.fromTo(item, { y: desloc }, {
        y: function () { return -desloc(); }, ease: 'none',
        scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true }
      });
    });

    // Faixa das famílias: foto aberta ao fundo, placa pintada subindo mais rápido
    gsap.fromTo('.familias__foto img', { yPercent: -9, scale: 1.08 }, {
      yPercent: 9, scale: 1, ease: 'none',
      scrollTrigger: { trigger: '.familias', start: 'top bottom', end: 'bottom top', scrub: true }
    });
    gsap.from('.familias__placa', {
      y: 120, ease: 'none',
      scrollTrigger: { trigger: '.familias', start: 'top bottom', end: 'center 60%', scrub: true }
    });

    // Sede vista de cima: o drone se aproxima
    gsap.utils.toArray('.quem__sede .quadro img, .contato__aerea img').forEach(function (img) {
      gsap.fromTo(img, { scale: 1.16 }, {
        scale: 1, ease: 'none',
        scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom 30%', scrub: true }
      });
    });
    gsap.fromTo('.contato__aerea', { y: 60 }, {
      y: -30, ease: 'none',
      scrollTrigger: { trigger: '.contato__foto', start: 'top bottom', end: 'bottom top', scrub: true }
    });

    // O garrafão do PIX é pintado de baixo para cima
    gsap.from('.pix', {
      clipPath: 'inset(100% 0% 0% 0%)', duration: 1.2, ease: 'expo.inOut', clearProps: 'clipPath',
      scrollTrigger: { trigger: '.pix', start: 'top 85%', once: true }
    });

    // Súmula: cada linha da diretoria é riscada da esquerda para a direita
    gsap.utils.toArray('.sumula__lista').forEach(function (lista) {
      gsap.fromTo(lista.children, { '--pintura': 0 }, {
        '--pintura': 1, duration: 0.55, ease: 'none', stagger: 0.1,
        scrollTrigger: { trigger: lista, start: 'top 85%', once: true }
      });
    });

    // Bola: só em telas largas; rola pela lateral e a rotação acompanha o deslocamento
    gsap.matchMedia().add('(min-width: 1101px)', function () {
      var bola = document.querySelector('.bola');
      var raio = bola.offsetWidth / 2 || 16;
      bola.hidden = false;
      raio = bola.offsetWidth / 2;
      var mover = gsap.quickSetter(bola, 'y', 'px');
      var girar = gsap.quickSetter(bola, 'rotation', 'deg');
      function posicionar(progresso) {
        var inicio = topo.offsetHeight + 14;
        var pista = window.innerHeight - inicio - bola.offsetHeight - 18;
        var andou = progresso * pista;
        mover(inicio + andou);
        girar(andou / raio * 180 / Math.PI);
      }
      posicionar(0);
      var trilho = ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: function (self) { posicionar(self.progress); },
        onRefresh: function (self) { posicionar(self.progress); }
      });
      // Vista de cima, a queda aparece como escala: quica com gravidade até parar no piso
      gsap.fromTo(bola, { scale: 2.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: 'bounce.out', delay: 1.4 });
      function aoClicar() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
      bola.addEventListener('click', aoClicar);
      return function () {
        trilho.kill();
        bola.removeEventListener('click', aoClicar);
        bola.hidden = true;
      };
    });
  }
})();
