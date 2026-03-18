const products = {
  1: {
    category: "Perfis Industriais",
    name: "Perfil Industrial Em Alumínio",
    description:
      "Sendo o metal um dos materiais mais utilizados em diversas áreas e segmentos, na linha de perfil de alumínios industrial a extrusão de um material é usada para dar forma a ele visando garantir a qualidade e resistência de quando aplicada nos mais variados cenários.",
    cores: null,
    image: "../images/products/industrial-profiles.jpg",
    cardImage: "/src/public/images/products/cards/1.jpeg",
  },
  2: {
    category: "Perfis Industriais",
    name: "Perfil em Alumínio",
    description:
      "Contamos com a linha completa de perfis, para fabricação de esquadrias, corrimão, portas de vidro, entre outros. Além de grande variedade, temos um estoque pronta entrega  garantindo agilidade do seu material.",

    medidas: null,
    image: "../images/products/aluminum-profiles.jpg",
    cardImage: "/src/public/images/products/cards/2.jpg",
  },
  3: {
    category: "Perfis Industriais",
    name: "Esquadrias em Alumínio",
    description:
      "Na nossa linha de esquadrias, você encontra uma ampla variedade de produtos versáteis e altamente duráveis. As esquadrias em alumínio se destacam pelo excelente custo-benefício, aliando resistência, baixa manutenção e longa vida útil. <br/><br/> Além disso, o design moderno e a estética sofisticada contribuem diretamente para a valorização do imóvel. Afinal, quem não deseja uma casa com portas e janelas bonitas, resistentes e fáceis de conservar?",

    medidas: null,
    image: "../images/products/aluminum-frames.jpg",
    cardImage: "/src/public/images/products/cards/3.jpg",
  },
  4: {
    category: "Construção Civil",
    name: "Alça de Apoio",
    description: `<li>Envelhecido para maior resistência e dureza </li>
      <li>Grande durabilidade </li>
      <li>Polimento de alto brilho </li>
      <li>Leve </li>
      <li>Canopla e luva de alumínio </li>
      <li>Resistente a corrosão </li>
      <li>Reciclável </li>`,

    medidas: {
      25: {
        Preto: "../images/products/alca_25cm_preta.jpg",
        Branco: "../images/products/alca_25cm_branca.jpg",
      },
      50: {
        Preto: "../images/products/alca_50cm_preta.jpg",
        Branco: "../images/products/alca_50cm_branca.jpg",
      },
      80: {
        Preto: "../images/products/alca_80cm_preta.jpg",
        Branco: "../images/products/alca_80cm_branca.jpg",
      },
      100: {
        Preto: "../images/products/alca_100cm_preta.jpg",
        Branco: "../images/products/alca_100cm_branca.jpg",
      },
    },
    image: "../images/products/alca_25cm_preta.jpg",
    cardImage: "/src/public/images/products/cards/4.jpg",
  },
  5: {
    category: "Construção Civil",
    name: "Braço de Chuveiro",
    description: "",
    medidas: {
      30: {
        Cromado: "../images/products/braco_30cm_cromado.jpg",
        Branco: "../images/products/braco_30cm_branco.jpg",
      },
      40: {
        Cromado: "../images/products/braco_30cm_cromado.jpg",
        Branco: "../images/products/braco_30cm_branco.jpg",
      },
    },
    image: "../images/products/braco_30cm_cromado.jpg",
    cardImage: "/src/public/images/products/cards/5.jpg",
  },
  6: {
    category: "Construção Civil",
    name: "Alçapão para Forro Drywall",
    description:
      "Uma estrutura técnica, geralmente de alumínio ou aço com chapa de gesso, instalada para permitir acesso seguro e fácil ao espaço acima do forro (plenum). Ele é utilizado para manutenções elétricas, hidráulicas ou de ar-condicionado, mantendo o acabamento discreto, contínuo e estético do ambiente",
    medidas: {
      200: { Branco: "../images/products/alcapao_branco.jpg" },
      300: { Branco: "../images/products/alcapao_branco.jpg" },
      400: { Branco: "../images/products/alcapao_branco.jpg" },
      500: { Branco: "../images/products/alcapao_branco.jpg" },
      600: { Branco: "../images/products/alcapao_branco.jpg" },
    },
    image: "../images/products/alcapao_branco.jpg",
    cardImage: "/src/public/images/products/cards/6.jpg",
  },
  7: {
    category: "Construção Civil",
    name: "Alçapão Invisível para Tampa",
    description:
      "um painel de acesso embutido em forros de gesso ou drywall, projetado para ser discreto e manter a estética do ambiente. Ele usa uma estrutura de alumínio e uma tampa de gesso/drywall, criando um acabamento contínuo com o teto que esconde o local de manutenção (elétrica, hidráulica ou ar-condicionado).",
    medidas: {
      200: { Branco: "../images/products/alcapaoInvisivel_branco.jpg" },
      300: { Branco: "../images/products/alcapaoInvisivel_branco.jpg" },
      400: { Branco: "../images/products/alcapaoInvisivel_branco.jpg" },
      500: { Branco: "../images/products/alcapaoInvisivel_branco.jpg" },
      600: { Branco: "../images/products/alcapaoInvisivel_branco.jpg" },
    },
    image: "../images/products/alcapaoInvisivel_branco.jpg",
    cardImage: "/src/public/images/products/cards/7.jpg",
  },
  8: {
    category: "Construção Civil",
    name: "Alçapão Invisível Com Tampa ",
    description:
      "um painel de acesso embutido em forros de gesso ou drywall, projetado para ser discreto e manter a estética do ambiente. Ele usa uma estrutura de alumínio e uma tampa de gesso/drywall, criando um acabamento contínuo com o teto que esconde o local de manutenção (elétrica, hidráulica ou ar-condicionado).",
    medidas: {
      200: { Branco: "../images/products/alcapaoInvisivelCTampa_branco.jpg" },
      300: { Branco: "../images/products/alcapaoInvisivelCTampa_branco.jpg" },
      400: { Branco: "../images/products/alcapaoInvisivelCTampa_branco.jpg" },
      500: { Branco: "../images/products/alcapaoInvisivelCTampa_branco.jpg" },
      600: { Branco: "../images/products/alcapaoInvisivelCTampa_branco.jpg" },
    },
    image: "../images/products/alcapaoInvisivelCTampa_branco.jpg",
    cardImage: "/src/public/images/products/cards/8.jpg",
  },
  9: {
    category: "Construção Civil",
    name: "Cantoneira L ",
    description:
      "É um perfil metálico (aço, ferro, alumínio ou PVC) ou de material plástico, com seção transversal em formato de 'L', formando um ângulo de 90° entre duas abas. É amplamente usada na construção civil e serralheria para reforçar quinas, conectar estruturas e dar sustentação a prateleiras e forros",
    medidas: {
      '12 X 12 MM 1/2"': {
        Polida: "../images/products/cantoneiraL_polida.jpg",
        Branco: "../images/products/cantoneiraL_branca.jpg",
        Preto: "../images/products/cantoneiraL_preta.jpg",
        Bege: "../images/products/cantoneiraL_bege.jpg",
        "Preto Fosco": "../images/products/cantoneiraL_pretoFosco.jpg",
        Acetinado: "../images/products/cantoneiraL_acetinado.jpg",
        "Marrom Corten": "../images/products/cantoneiraL_marromCorten.jpg",
        Bronze: "../images/products/cantoneiraL_bronze.jpg",
        Champanhe: "../images/products/cantoneiraL_champanhe.jpg",
      },
      '15 X 15 MM 5/8"': {
        Polida: "../images/products/cantoneiraL_polida.jpg",
        Branco: "../images/products/cantoneiraL_branca.jpg",
        Preto: "../images/products/cantoneiraL_preta.jpg",
        Bege: "../images/products/cantoneiraL_bege.jpg",
        "Preto Fosco": "../images/products/cantoneiraL_pretoFosco.jpg",
        Acetinado: "../images/products/cantoneiraL_acetinado.jpg",
        "Marrom Corten": "../images/products/cantoneiraL_marromCorten.jpg",
        Bronze: "../images/products/cantoneiraL_bronze.jpg",
        Champanhe: "../images/products/cantoneiraL_champanhe.jpg",
      },
      '19 X 19 MM 3/4"': {
        Polida: "../images/products/cantoneiraL_polida.jpg",
        Branco: "../images/products/cantoneiraL_branca.jpg",
        Preto: "../images/products/cantoneiraL_preta.jpg",
        Bege: "../images/products/cantoneiraL_bege.jpg",
        "Preto Fosco": "../images/products/cantoneiraL_pretoFosco.jpg",
        Acetinado: "../images/products/cantoneiraL_acetinado.jpg",
        "Marrom Corten": "../images/products/cantoneiraL_marromCorten.jpg",
        Bronze: "../images/products/cantoneiraL_bronze.jpg",
        Champanhe: "../images/products/cantoneiraL_champanhe.jpg",
      },
      '25 X 25 MM 1"': {
        Polida: "../images/products/cantoneiraL_polida.jpg",
        Branco: "../images/products/cantoneiraL_branca.jpg",
        Preto: "../images/products/cantoneiraL_preta.jpg",
        Bege: "../images/products/cantoneiraL_bege.jpg",
        "Preto Fosco": "../images/products/cantoneiraL_pretoFosco.jpg",
        Acetinado: "../images/products/cantoneiraL_acetinado.jpg",
        "Marrom Corten": "../images/products/cantoneiraL_marromCorten.jpg",
        Bronze: "../images/products/cantoneiraL_bronze.jpg",
        Champanhe: "../images/products/cantoneiraL_champanhe.jpg",
      },
    },
    image: "../images/products/cantoneiraL_branca.jpg",
    cardImage: "/src/public/images/products/cards/9.jpg",
  },
  10: {
    category: "Construção Civil",
    name: "Cantoneira Sextavada ",
    description:
      "A cantoneira sextavada é um perfil de alumínio utilizado para o acabamento, proteção e arremate de quinas de paredes, pisos, azulejos e bancadas, apresentando um formato externo com facetas (sextavado) que confere um aspecto estético refinado. Ela é resistente, durável e protege revestimentos contra impactos e desgastes.",
    medidas: {
      '12 X 12 MM 1/2"': {
        Polida: "../images/products/cantoneira_sextavada.jpg",
        Branco: "../images/products/cantoneira_sextavada.jpg",
        Preto: "../images/products/cantoneira_sextavada.jpg",
        Bege: "../images/products/cantoneira_sextavada.jpg",
        "Preto Fosco": "../images/products/cantoneira_sextavada.jpg",
        Acetinado: "../images/products/cantoneira_sextavada.jpg",
        "Marrom Corten": "../images/products/cantoneira_sextavada.jpg",
        Bronze: "../images/products/cantoneira_sextavada.jpg",
        Champanhe: "../images/products/cantoneira_sextavada.jpg",
      },
      '15 X 15 MM 5/8"': {
        Polida: "../images/products/cantoneira_sextavada.jpg",
        Branco: "../images/products/cantoneira_sextavada.jpg",
        Preto: "../images/products/cantoneira_sextavada.jpg",
        Bege: "../images/products/cantoneira_sextavada.jpg",
        "Preto Fosco": "../images/products/cantoneira_sextavada.jpg",
        Acetinado: "../images/products/cantoneira_sextavada.jpg",
        "Marrom Corten": "../images/products/cantoneira_sextavada.jpg",
        Bronze: "../images/products/cantoneira_sextavada.jpg",
        Champanhe: "../images/products/cantoneira_sextavada.jpg",
      },
      '19 X 19 MM 3/4"': {
        Polida: "../images/products/cantoneira_sextavada.jpg",
        Branco: "../images/products/cantoneira_sextavada.jpg",
        Preto: "../images/products/cantoneira_sextavada.jpg",
        Bege: "../images/products/cantoneira_sextavada.jpg",
        "Preto Fosco": "../images/products/cantoneira_sextavada.jpg",
        Acetinada: "../images/products/cantoneira_sextavada.jpg",
        "Marrom Corten": "../images/products/cantoneira_sextavada.jpg",
        Bronze: "../images/products/cantoneira_sextavada.jpg",
        Champanhe: "../images/products/cantoneira_sextavada.jpg",
      },
      '25 X 25 MM 1"': {
        Polida: "../images/products/cantoneira_sextavada.jpg",
        Branco: "../images/products/cantoneira_sextavada.jpg",
        Preto: "../images/products/cantoneira_sextavada.jpg",
        Bege: "../images/products/cantoneira_sextavada.jpg",
        "Preto Fosco": "../images/products/cantoneira_sextavada.jpg",
        Acetinada: "../images/products/cantoneira_sextavada.jpg",
        "Marrom Corten": "../images/products/cantoneira_sextavada.jpg",
        Bronze: "../images/products/cantoneira_sextavada.jpg",
        Champanhe: "../images/products/cantoneira_sextavada.jpg",
      },
    },
    image: "../images/products/cantoneira_sextavada.jpg",
    cardImage: "/src/public/images/products/cards/10.jpg",
  },
  11: {
    category: "Construção Civil",
    name: "Cantoneira Redonda ",
    description:
      "A cantoneira redonda é um perfil metálico utilizado para o acabamento e proteção de quinas de paredes, pisos e azulejos, apresentando um formato externo circular que confere um aspecto estético sofisticado. Ela é resistente, durável e protege revestimentos contra impactos e desgastes.",
    medidas: {
      "200 x 3000 x 15": {
        Polido: "../images/products/cantoneira_redonda.jpg",
        Branco: "../images/products/cantoneira_redonda.jpg",
        Preto: "../images/products/cantoneira_redonda.jpg",
        Bege: "../images/products/cantoneira_redonda.jpg",
        "Preto Fosco": "../images/products/cantoneira_redonda.jpg",
        Acetinada: "../images/products/cantoneira_redonda.jpg",
        "Marrom Corten": "../images/products/cantoneira_redonda.jpg",
        Bronze: "../images/products/cantoneira_redonda.jpg",
        Champanhe: "../images/products/cantoneira_redonda.jpg",
      },
    },
    image: "../images/products/cantoneira_redonda.jpg",
    cardImage: "/src/public/images/products/cards/11.jpg",
  },

  12: {
    category: "Construção Civil",
    name: "Cantoneira L ",
    description: "",
    medidas: {
      "1/2'": {
        Polido: "../images/products/cantoneiraL_polida.jpg",
        Branco: "../images/products/cantoneiraL_branca.jpg",
      },
      "2'": {
        Polido: "../images/products/cantoneiraL_polida.jpg",
        Branco: "../images/products/cantoneiraL_branca.jpg",
      },
    },
    image: "../images/products/cantoneiraL_branca.jpg",
    cardImage: "/src/public/images/products/cards/9.jpg",
  },
  13: {
    name: "Canto Reboco/Massa",
    category: "Construção Civil",
    description: "",
    medidas: {
      "30x20x2000": {
        Brilhante: "../images/products/cantoReboco.jpg",
      },
    },
    image: "../images/products/cantoReboco.jpeg",
    cardImage: "/src/public/images/products/cantoReboco.jpeg",
  },
  14: {
    name: "Canto Móveis / Divisórias",
    category: "Construção Civil",
    description: "",
    medidas: {
      "3/4'": {
        Bicromado: "../images/products/cantoDivisoria.jpg",
        Zincado: "../images/products/cantoDivisoria.jpg",
      },
      "1'": {
        Bicromado: "../images/products/cantoDivisoria.jpg",
        Zincado: "../images/products/cantoDivisoria.jpg",
      },
      "1 1/2'": {
        Bicromado: "../images/products/cantoDivisoria.jpg",
        Zincado: "../images/products/cantoDivisoria.jpg",
      },
      "2'": {
        Bicromado: "../images/products/cantoDivisoria.jpg",
        Zincado: "../images/products/cantoDivisoria.jpg",
      },
      "3'": {
        Bicromado: "../images/products/cantoDivisoria.jpg",
        Zincado: "../images/products/cantoDivisoria.jpg",
      },
      "4'": {
        Bicromado: "../images/products/cantoDivisoria.jpg",
        Zincado: "../images/products/cantoDivisoria.jpg",
      },
    },
    image: "../images/products/cantoDivisoria.jpg",
    cardImage: "/src/public/images/products/cantoDivisoria.jpg",
  },
  15: {
    name: "Friso Junção",
    category: "Construção Civil",
    description:
      "Um friso de junção é um corte linear, em baixo-relevo ou uma peça de arremate, utilizado para conectar dois painéis, paredes ou pisos, funcionando tanto como um elemento decorativo (ritmo visual) quanto funcional (junta de dilatação/movimentação). Ele previne trincas em fachadas ao direcionar a movimentação dos materiais e oculta emendas entre diferentes superfícies",
    medidas: {
      "30x15x2000": {
        Branco: "../images/products/frisoJuncao.jpg",
        Preto: "../images/products/frisoJuncao.jpg",
        Acetinado: "../images/products/frisoJuncao.jpg",
      },
    },
    image: "../images/products/frisoJuncao.jpg",
    cardImage: "/src/public/images/products/frisoJuncao.jpg",
  },
  16: {
    name: "Friso Soleira",
    category: "Construção Civil",
    description:
      "O friso de soleira é uma pequena ranhura ou baixo-relevo feito na parte inferior de pedras de acabamento (como mármore ou granito) sob portas, servindo para proteger a base, destacar a divisão entre cômodos, esconder desníveis e impedir a infiltração de água, garantindo maior durabilidade e acabamento estético.",
    medidas: {
      "30x15x1000": {
        Branco: "../images/products/frisoSoleira.jpeg",
        Preto: "../images/products/frisoSoleira.jpeg",
        Acetinado: "../images/products/frisoSoleira.jpeg",
      },
    },
    image: "../images/products/frisoSoleira.jpeg",
    cardImage: "/src/public/images/products/frisoSoleira.jpeg",
  },
  17: {
    name: "Perfil Led Sobrepor",
    category: "Construção Civil",
    description:
      "Estrutura de alumínio com difusor acrílico, projetada para acomodar fitas LED e ser fixada diretamente na superfície (teto, parede ou móveis), sem necessidade de cortes ou nichos",
    medidas: {
      "17x17x2000": {
        Branco: "../images/products/ledSobrepor.jpeg",
        Preto: "../images/products/ledSobrepor.jpeg",
        Acetinado: "/src/public/images/products/ledSobrepor.jpeg",
      },
      "17x7x3000": {
        Branco: "../images/products/ledSobrepor.jpeg",
        Preto: "../images/products/ledSobrepor.jpeg",
        Acetinado: "/src/public/images/products/ledSobrepor.jpeg",
      },
    },
    image: "../images/products/ledSobrepor.jpeg",
    cardImage: "/src/public/images/products/ledSobrepor.jpeg",
  },
  18: {
    name: "Perfil Led Baby Sobrepor",
    category: "Construção Civil",
    description:
      "O perfil LED Baby de sobrepor é uma estrutura linear de alumínio, extremamente fina e compacta (geralmente com cerca de 8mm a 10mm de largura), projetada para ser fixada diretamente sobre superfícies como móveis, marcenaria, paredes ou tetos, sem necessidade de rebaixamento. Ele acomoda fitas de LED, oferecendo iluminação linear difusa, clean e moderna.",
    medidas: {
      "11x11x2000": {
        Branco: "../images/products/ledSobrepor.jpeg",
        Preto: "../images/products/ledSobrepor.jpeg",
        Acetinado: "../images/products/ledSobrepor.jpeg",
      },
      "11x11x3000": {
        Branco: "../images/products/ledSobrepor.jpeg",
        Preto: "../images/products/ledSobrepor.jpeg",
        Acetinado: "../images/products/ledSobrepor.jpeg",
      },
    },
    image: "../images/products/ledSobrepor.jpeg",
    cardImage: "/src/public/images/products/ledSobrepor.jpeg",
  },
  19: {
    name: "Perfil Led Embutir",
    category: "Construção Civil",
    description:
      "O perfil LED de embutir é uma estrutura linear de alumínio, projetada para ser fixada dentro de superfícies como paredes ou tetos, sem necessidade de rebaixamento. Ele acomoda fitas de LED, oferecendo iluminação linear difusa, clean e moderna.",
    medidas: {
      "24x7x2000": {
        Branco: "../images/products/ledBabyEmbutir.jpg",
        Preto: "../images/products/ledBabyEmbutir.jpg",
        Acetinado: "../images/products/ledBabyEmbutir.jpg",
      },
      "24x7x3000": {
        Branco: "../images/products/ledBabyEmbutir.jpg",
        Preto: "../images/products/ledBabyEmbutir.jpg",
        Acetinado: "../images/products/ledBabyEmbutir.jpg",
      },
    },
    image: "../images/products/ledBabyEmbutir.jpg",
    cardImage: "/src/public/images/products/ledBabyEmbutir.jpg",
  },
  20: {
    name: "Perfil Led Baby Embutir",
    category: "Construção Civil",
    description:
      "O perfil LED Baby de embutir é uma estrutura linear de alumínio, projetada para ser fixada dentro de superfícies como paredes ou tetos, sem necessidade de rebaixamento. Ele acomoda fitas de LED, oferecendo iluminação linear difusa, clean e moderna.",
    medidas: {
      "20x11x2000": {
        Branco: "../images/products/ledBabyEmbutir.jpg",
        Preto: "../images/products/ledBabyEmbutir.jpg",
      },
      "20x11x3000": {
        Branco: "../images/products/ledBabyEmbutir.jpg",
        Preto: "../images/products/ledBabyEmbutir.jpg",
      },
    },
    image: "../images/products/ledBabyEmbutir.jpg",
    cardImage: "/src/public/images/products/ledBabyEmbutir.jpg",
  },
  21: {
    name: "Kit Corrimão Chato",
    category: "Construção Civil",
    description:
      "Kit completo para instalação de corrimão chato, incluindo peças e acessórios necessários para a montagem.",
    medidas: {
      1000: {
        Branco: "../images/products/corrimaoChato.jpg",
        Preto: "../images/products/corrimaoChato.jpg",
        Polido: "../images/products/corrimaoChato.jpg",
      },
      1500: {
        Branco: "../images/products/corrimaoChato.jpg",
        Preto: "../images/products/corrimaoChato.jpg",
        Polido: "../images/products/corrimaoChato.jpg",
      },
      2000: {
        Branco: "../images/products/corrimaoChato.jpg",
        Preto: "../images/products/corrimaoChato.jpg",
        Polido: "../images/products/corrimaoChato.jpg",
      },
      3000: {
        Branco: "../images/products/corrimaoChato.jpg",
        Preto: "../images/products/corrimaoChato.jpg",
        Polido: "../images/products/corrimaoChato.jpg",
      },
      4000: {
        Branco: "../images/products/corrimaoChato.jpg",
        Preto: "../images/products/corrimaoChato.jpg",
        Polido: "../images/products/corrimaoChato.jpg",
      },
    },
    image: "../images/products/corrimaoChato.jpg",
    cardImage: "/src/public/images/products/corrimaoChato.jpg",
  },
  22: {
    name: "Kit Corrimão Redondo",
    category: "Construção Civil",
    description:
      "Kit completo para instalação de corrimão redondo, incluindo peças e acessórios necessários para a montagem.",
    medidas: {
      1000: {
        Branco: "../images/products/corrimaoRedondo.jpg",
        Preto: "../images/products/corrimaoRedondo.jpg",
        Polido: "../images/products/corrimaoRedondo.jpg",
      },
      1500: {
        Branco: "../images/products/corrimaoRedondo.jpg",
        Preto: "../images/products/corrimaoRedondo.jpg",
        Polido: "../images/products/corrimaoRedondo.jpg",
      },
      2000: {
        Branco: "../images/products/corrimaoRedondo.jpg",
        Preto: "../images/products/corrimaoRedondo.jpg",
        Polido: "../images/products/corrimaoRedondo.jpg",
      },
      3000: {
        Branco: "../images/products/corrimaoRedondo.jpg",
        Preto: "../images/products/corrimaoRedondo.jpg",
        Polido: "../images/products/corrimaoRedondo.jpg",
      },
      4000: {
        Branco: "../images/products/corrimaoRedondo.jpg",
        Preto: "../images/products/corrimaoRedondo.jpg",
        Polido: "../images/products/corrimaoRedondo.jpg",
      },
    },
    image: "../images/products/corrimaoRedondo.jpg",
    cardImage: "/src/public/images/products/corrimaoRedondo.jpg",
  },
  23: {
    name: "Tampa Corrimão (Chato)",
    category: "Construção Civil",
    description:
      "Tampa para corrimão chato, ideal para acabamento e proteção das extremidades.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/acabamentoChato.jpeg",
        Preto: "../images/products/acabamentoChato.jpeg",
        Brilhante: "../images/products/acabamentoChato.jpeg",
      },
    },
    image: "../images/products/acabamentoChato.jpeg",
    cardImage: "/src/public/images/products/acabamentoChato.jpeg",
  },
  24: {
    name: "Tampa Corrimão (Redondo)",
    category: "Construção Civil",
    description:
      "Tampa para corrimão redondo, ideal para acabamento e proteção das extremidades.",
    medidas: {
      "50 x 50 x 40": {
        Branco: "../images/products/acabamentoRedondo.jpg",
        Preto: "../images/products/acabamentoRedondo.jpg",
      },
    },
    image: "../images/products/acabamentoRedondo.jpg",
    cardImage: "/src/public/images/products/acabamentoRedondo.jpg",
  },
  25: {
    name: "Tampa Curva (Chato)",
    category: "Construção Civil",
    description:
      "Tampa curva para corrimão chato, ideal para acabamento e proteção das extremidades.",
    medidas: {
      "50 x 10 x 1200": {
        Branco: "../images/products/acabamentoChatoCurvo.jpg",
        Preto: "../images/products/acabamentoChatoCurvo.jpg",
        Brilhante: "../images/products/acabamentoChatoCurvo.jpg",
      },
    },
    image: "../images/products/acabamentoChatoCurvo.jpg",
    cardImage: "/src/public/images/products/acabamentoChatoCurvo.jpg",
  },
  26: {
    name: "Tampa Curva (Redondo)",
    category: "Construção Civil",
    description:
      "Tampa curva para corrimão redondo, ideal para acabamento e proteção das extremidades.",
    medidas: {
      "750 x 100 x 110": {
        Branco: "../images/products/acabamentoRedondoCurva.jpg",
        Preto: "../images/products/acabamentoRedondoCurva.jpg",
      },
    },
    image: "../images/products/acabamentoRedondoCurva.jpg",
    cardImage: "/src/public/images/products/acabamentoRedondoCurva.jpg",
  },
  27: {
    name: "Suporte para Corrimão",
    category: "Construção Civil",
    description:
      "Suporte para corrimão, ideal para fixação e estabilidade das extremidades.",
    medidas: {
      "30 x 80 x 150": {
        Branco: "../images/products/suporteCorrimao.jpg",
        Preto: "../images/products/suporteCorrimao.jpg",
        Brilhante: "../images/products/suporteCorrimao.jpg",
      },
    },
    image: "../images/products/suporteCorrimao.jpg",
    cardImage: "/src/public/images/products/suporteCorrimao.jpg",
  },
  28: {
    name: "Friso Degrau em 'L'",
    category: "Construção Civil",
    description:
      "Friso para degrau em forma de 'L', ideal para acabamento e proteção das extremidades.",
    medidas: {
      "23 x 10 x 3000": {
        Branco: "../images/products/pisoDegrauL.jpeg",
        Preto: "../images/products/pisoDegrauL.jpeg",
        Polido: "../images/products/pisoDegrauL.jpeg",
      },
      "30 x 15 x 3000": {
        Branco: "../images/products/pisoDegrauL.jpeg",
        Preto: "../images/products/pisoDegrauL.jpeg",
        Polido: "../images/products/pisoDegrauL.jpeg",
      },
      "50 x 25 x 3000": {
        Branco: "../images/products/pisoDegrauL.jpeg",
        Preto: "../images/products/pisoDegrauL.jpeg",
        Polido: "../images/products/pisoDegrauL.jpeg",
      },
    },
    image: "../images/products/pisoDegrauL.jpeg",
    cardImage: "/src/public/images/products/pisoDegrauL.jpeg",
  },
  29: {
    name: "Friso Degrau (Chato)",
    category: "Construção Civil",
    description:
      "Friso para degrau chato, ideal para acabamento e proteção das extremidades.",
    medidas: {
      "30 x 0.210 x 3000": {
        Branco: "../images/products/pisoDegrau.jpeg",
        Preto: "../images/products/pisoDegrau.jpeg",
        Polido: "../images/products/pisoDegrau.jpeg",
      },
    },
    image: "../images/products/pisoDegrau.jpeg",
    cardImage: "/src/public/images/products/pisoDegrau.jpeg",
  },
  30: {
    name: "Perfil Tela Fácil C/ Borracha",
    category: "Construção Civil",
    description:
      "Perfil para tela fácil com borracha, ideal para acabamento e proteção das extremidades.",
    medidas: {
      "25 x 10 x 3000": {
        Branco: "../images/products/telaFacilBorracha.jpg",
        Preto: "../images/products/telaFacilBorracha.jpg",
        Natural: "../images/products/telaFacilBorracha.jpg",
      },
    },
    image: "../images/products/telaFacilBorracha.jpg",
    cardImage: "/src/public/images/products/telaFacilBorracha.jpg",
  },
  31: {
    name: "Kit Acessórios Tela Fácil",
    category: "Construção Civil",
    description:
      "Kit completo com acessórios para instalação de tela fácil, incluindo peças e materiais necessários para a montagem.",
    medidas: {
      "65 x 65 x 10": {
        Branco: "../images/products/AcessoriosTelaFacil.jpg",
        Preto: "../images/products/AcessoriosTelaFacil.jpg",
      },
    },
    image: "../images/products/AcessoriosTelaFacil.jpg",
    cardImage: "/src/public/images/products/AcessoriosTelaFacil.jpg",
  },
  32: {
    name: "Perfil 'U' P/ Vidro",
    category: "Construção Civil",
    description:
      "Perfil em formato de 'U' projetado para acomodar e fixar vidros, proporcionando suporte estrutural e acabamento estético em aplicações como portas, janelas e divisórias de vidro.",
    medidas: {
      "8.5 x 10 x 3000": {
        Polido: "../images/products/perfilUVidro.jpeg",
      },
      "10 x 19 x 3000": {
        Polido: "../images/products/perfilUVidro.jpeg",
      },
      "13 x 20 x 3000": {
        Polido: "../images/products/perfilUVidro.jpeg",
      },
    },
    image: "../images/products/perfilUVidro.jpeg",
    cardImage: "/src/public/images/products/perfilUVidro.jpeg",
  },
  33: {
    name: "Régua Bitubular",
    category: "Construção Civil",
    description:
      "A régua bitubular é uma ferramenta de pedreiro feita de alumínio, caracterizada por possuir dois tubos internos (estrutura reforçada) que garantem maior resistência contra empenamentos e durabilidade. Ideal para obras pesadas, é usada para sarrafear, nivelar e alinhar rebocos, contrapisos e acabamentos de superfícies.",
    medidas: {
      "44 x 20 x 1000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
      "44 x 20 x 2000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
      "44 x 20 x 3000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
    },
    image: "../images/products/reguaBitubular.jpg",
    cardImage: "/src/public/images/products/reguaBitubular.jpg",
  },
  34: {
    name: "Régua Reforçada",
    category: "Construção Civil",
    description:
      "A Régua Reforçada (ou régua de pedreiro reforçada) é uma ferramenta essencial na construção civil, fabricada em alumínio de alta resistência para garantir alinhamento, nivelamento e sarrafeamento de reboco ou gesso com maior durabilidade. Sua estrutura bitubular ou de maior espessura impede empenamentos, facilitando o acabamento em superfícies grandes, pisos e paredes.",
    medidas: {
      "47 x 20 x 1000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
      "47 x 20 x 2000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
      "47 x 20 x 3000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
    },
    image: "../images/products/reguaReforcada.jpg",
    cardImage: "/src/public/images/products/reguaReforcada.jpg",
  },
  35: {
    name: "Régua Extra Larga",
    category: "Construção Civil",
    description:
      "Uma Régua Extra Larga é uma ferramenta de construção civil, geralmente de alumínio, com largura superior às réguas comuns (frequentemente 50cm ou mais), usada por pedreiros para nivelar, sarrafear e dar acabamento em rebocos, contrapisos e grandes superfícies. Sua estrutura reforçada evita empenamentos e garante maior precisão e rapidez",
    medidas: {
      "80 x 25 x 1000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
      "80 x 25 x 2000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
      "80 x 25 x 3000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
    },
    image: "../images/products/reguaExtraLarga.jpg",
    cardImage: "/src/public/images/products/reguaExtraLarga.jpg",
  },
  36: {
    name: "Régua Super Reforçada",
    category: "Construção Civil",
    description:
      "Uma Régua Super Reforçada é uma ferramenta de construção de alta durabilidade, geralmente feita de alumínio espesso ou bi-tubular, projetada para nivelamento, sarrafeamento e acabamento de reboco. Ela resiste ao uso intenso em obras sem empenar, garantindo precisão no alinhamento de pisos e paredes",
    medidas: {
      "50 x 25 x 1000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
      "50 x 25 x 2000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
      "50 x 25 x 3000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
    },
    image: "../images/products/reguaSuperReforcada.jpg",
    cardImage: "/src/public/images/products/reguaSuperReforcada.jpg",
  },
  37: {
    name: "Régua Gesseiro",
    category: "Construção Civil",
    description:
      "A régua de gesseiro, geralmente feita de alumínio (cantoneira ou perfil 'L'), é uma ferramenta essencial para nivelar, sarrafear e dar acabamento em superfícies de gesso. Ela garante o prumo, alinhamento de paredes e quinas (cantos) perfeitos, evitando rachaduras. É usada para espalhar e remover o excesso de gesso, criando superfícies lisas",
    medidas: {
      "50 x 14 x 1000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
      "50 x 14 x 2000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
    },
    image: "../images/products/reguaGesseiro.jpg",
    cardImage: "/src/public/images/products/reguaGesseiro.jpg",
  },
  38: {
    name: "Régua Gesseiro L 2'",
    category: "Construção Civil",
    description:
      "A régua de gesseiro, geralmente feita de alumínio (cantoneira ou perfil 'L'), é uma ferramenta essencial para nivelar, sarrafear e dar acabamento em superfícies de gesso. Ela garante o prumo, alinhamento de paredes e quinas (cantos) perfeitos, evitando rachaduras. É usada para espalhar e remover o excesso de gesso, criando superfícies lisas",
    medidas: {
      "50 x 50 x 2000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
      "50 x 50 x 3000": {
        Natural: "../images/products/reguaBitubular.jpg",
      },
    },
    image: "../images/products/reguaLGesseiro.jpg",
    cardImage: "/src/public/images/products/reguaLGesseiro.jpg",
  },
  39: {
    name: "Suporte Antena Simples",
    category: "Construção Civil",
    description:
      "Suporte para antena simples, ideal para instalações de comunicação em ambientes industriais e comerciais",
    medidas: {
      "PREG./PARAF. 155x55": {
        Bicromado: "../images/products/suporteAntenaSimples.jpg",
      },
      "CHUMBADO. 155x55": {
        Bicromado: "../images/products/suporteAntenaSimples.jpg",
      },
    },
    image: "../images/products/suporteAntenaSimples.jpg",
    cardImage: "/src/public/images/products/suporteAntenaSimples.jpg",
  },
  40: {
    name: "Suporte Antena Duplo",
    category: "Construção Civil",
    description:
      "Suporte para antena dupla, ideal para instalações de comunicação em ambientes industriais e comerciais",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suporteAntenaDuplo.jpg",
        Preto: "../images/products/suporteAntenaDuplo.jpg",
        Brilhante: "../images/products/suporteAntenaDuplo.jpg",
      },
    },
    image: "../images/products/suporteAntenaDuplo.jpg",
    cardImage: "/src/public/images/products/suporteAntenaDuplo.jpg",
  },
  41: {
    name: "Suporte Antena Cavalo Simples",
    category: "Construção Civil",
    description:
      "Suporte para antena cavalo simples, ideal para instalações de comunicação em ambientes industriais e comerciais",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suporteAntenaCavaloSimples.jpg",
        Preto: "../images/products/suporteAntenaCavaloSimples.jpg",
        Brilhante: "../images/products/suporteAntenaCavaloSimples.jpg",
      },
    },
    image: "../images/products/suporteAntenaCavaloSimples.jpg",
    cardImage: "/src/public/images/products/suporteAntenaCavaloSimples.jpg",
  },
  42: {
    name: "Suporte Antena Cavalo Duplo",
    category: "Construção Civil",
    description:
      "Suporte para antena cavalo dupla, ideal para instalações de comunicação em ambientes industriais e comerciais",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suporteAntenaCavaloDuplo.jpg",
        Preto: "../images/products/suporteAntenaCavaloDuplo.jpg",
        Brilhante: "../images/products/suporteAntenaCavaloDuplo.jpg",
      },
    },
    image: "../images/products/suporteAntenaCavaloDuplo.jpg",
    cardImage: "/src/public/images/products/suporteAntenaCavaloDuplo.jpg",
  },
  43: {
    name: "Suporte Antena Tripé",
    category: "Construção Civil",
    description:
      "Suporte para antena tripé, ideal para instalações de comunicação em ambientes industriais e comerciais",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suporteAntenaTripe.jpg",
        Preto: "../images/products/suporteAntenaTripe.jpg",
        Brilhante: "../images/products/suporteAntenaTripe.jpg",
      },
    },
    image: "../images/products/suporteAntenaTripe.jpg",
    cardImage: "/src/public/images/products/suporteAntenaTripe.jpg",
  },
  44: {
    name: "Suporte Antena Emenda",
    category: "Construção Civil",
    description:
      "Suporte para antena emenda, ideal para instalações de comunicação em ambientes industriais e comerciais",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suporteAntenaEmenda.jpg",
        Preto: "../images/products/suporteAntenaEmenda.jpg",
        Brilhante: "../images/products/suporteAntenaEmenda.jpg",
      },
    },
    image: "../images/products/suporteAntenaEmenda.jpg",
    cardImage: "/src/public/images/products/suporteAntenaEmenda.jpg",
  },
  45: {
    name: "Tubo P/ Antena",
    category: "Construção Civil",
    description:
      "Tubo para antena, ideal para instalações de comunicação em ambientes industriais e comerciais",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/tuboAntena.jpg",
        Preto: "../images/products/tuboAntena.jpg",
        Brilhante: "../images/products/tuboAntena.jpg",
      },
    },
    image: "../images/products/tuboAntena.jpg",
    cardImage: "/src/public/images/products/tuboAntena.jpg",
  },
  46: {
    name: "Mão Francesa",
    category: "Construção Civil",
    description:
      "A mão francesa é um suporte estrutural em formato triangular (ou em 'L' com reforço diagonal) usado para sustentar prateleiras, bancadas, mesas, pias e nichos suspensos na parede. Ela funciona como um braço de apoio, transferindo a carga do objeto para a parede, sendo ideal para maximizar espaço.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/maoFrancesa.jpg",
        Preto: "../images/products/maoFrancesa.jpg",
        Brilhante: "../images/products/maoFrancesa.jpg",
      },
    },
    image: "../images/products/maoFrancesa.jpg",
    cardImage: "/src/public/images/products/maoFrancesa.jpg",
  },
  47: {
    name: "Mão Francesa Retrátil",
    category: "Construção Civil",
    description:
      "A mão francesa retratil é um suporte estrutural em formato triangular (ou em 'L' com reforço diagonal) usado para sustentar prateleiras, bancadas, mesas, pias e nichos suspensos na parede. Ela funciona como um braço de apoio, transferindo a carga do objeto para a parede, sendo ideal para maximizar espaço.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/prateleiraRetratil.jpg",
        Preto: "../images/products/prateleiraRetratil.jpg",
        Brilhante: "../images/products/prateleiraRetratil.jpg",
      },
    },
    image: "../images/products/prateleiraRetratil.jpg",
    cardImage: "/src/public/images/products/prateleiraRetratil.jpg",
  },
  48: {
    name: "Suporte P/ Pia (Parafusar)",
    category: "Construção Civil",
    description:
      "Também conhecido como grapa ou mão francesa, é uma peça metálica reforçada utilizada para sustentar pias, tanques e bancadas de pedra (mármore/granito). Diferente do modelo de chumbagem, este é fixado diretamente na parede com parafusos e buchas, oferecendo instalação rápida, sem quebra-quebra, com alta resistência e ocupando mínimo espaço",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suportePiaParafusar.jpg",
        Preto: "../images/products/suportePiaParafusar.jpg",
        Brilhante: "../images/products/suportePiaParafusar.jpg",
      },
    },
    image: "../images/products/suportePiaParafusar.jpg",
    cardImage: "/src/public/images/products/suportePiaParafusar.jpg",
  },
  49: {
    name: "Suporte P/ Pia (Chumbar)",
    category: "Construção Civil",
    description:
      "Também conhecido como grapa ou mão francesa, é uma peça metálica reforçada utilizada para sustentar pias, tanques e bancadas de pedra (mármore/granito). Diferente do modelo de chumbagem, este é fixado diretamente na parede com parafusos e buchas, oferecendo instalação rápida, sem quebra-quebra, com alta resistência e ocupando mínimo espaço",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suportePiaChumbar.jpg",
        Preto: "../images/products/suportePiaChumbar.jpg",
        Brilhante: "../images/products/suportePiaChumbar.jpg",
      },
    },
    image: "../images/products/suportePiaChumbar.jpg",
    cardImage: "/src/public/images/products/suportePiaChumbar.jpg",
  },
  50: {
    name: "Suporte Prateleira Extra",
    category: "Construção Civil",
    description:
      "É um componente de fixação projetado para suportar cargas elevadas e garantir a estabilidade de prateleiras pesadas.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suportePrateleiraForte.jpg",
        Preto: "../images/products/suportePrateleiraForte.jpg",
        Brilhante: "../images/products/suportePrateleiraForte.jpg",
      },
    },
    image: "../images/products/suportePrateleiraForte.jpg",
    cardImage: "/src/public/images/products/suportePrateleiraForte.jpg",
  },
  51: {
    name: "Suporte Prateleira Reforçada",
    category: "Construção Civil",
    description:
      "É um componente de fixação projetado para suportar cargas elevadas e garantir a estabilidade de prateleiras pesadas.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suportePrateleiraReforcada.jpg",
        Preto: "../images/products/suportePrateleiraReforcada.jpg",
        Brilhante: "../images/products/suportePrateleiraReforcada.jpg",
      },
    },
    image: "../images/products/suportePrateleiraReforcada.jpg",
    cardImage: "/src/public/images/products/suportePrateleiraReforcada.jpg",
  },
  52: {
    name: "Suporte Prateleira Forte",
    category: "Construção Civil",
    description:
      "É um componente de fixação projetado para suportar cargas elevadas e garantir a estabilidade de prateleiras pesadas.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suportePrateleiraForte.jpg",
        Preto: "../images/products/suportePrateleiraForte.jpg",
        Brilhante: "../images/products/suportePrateleiraForte.jpg",
      },
    },
    image: "../images/products/suportePrateleiraForte.jpg",
    cardImage: "/src/public/images/products/suportePrateleiraForte.jpg",
  },
  53: {
    name: "Suporte Prateleira Vidro",
    category: "Construção Civil",
    description:
      "É um componente de fixação projetado para suportar  prateleiras de vidro.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suportePrateleiraVidro.jpg",
        Preto: "../images/products/suportePrateleiraVidro.jpg",
        Brilhante: "../images/products/suportePrateleiraVidro.jpg",
      },
    },
    image: "../images/products/suportePrateleiraVidro.jpg",
    cardImage: "/src/public/images/products/suportePrateleiraVidro.jpg",
  },
  54: {
    name: "Suporte Multiuso Fixo",
    category: "Construção Civil",
    description:
      "É um dispositivo de instalação permanente, geralmente de aço, projetado para sustentar, organizar ou elevar objetos com estabilidade. Eles são presos por parafusos ou adesivos fortes na parede, chão ou painéis. São comuns para botijões de gás, vasos, eletrônicos, utensílios de banheiro, fornos e TVs, mantendo-os fixos em uma posição.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suporteMultiusoFixo.jpg",
        Preto: "../images/products/suporteMultiusoFixo.jpg",
        Brilhante: "../images/products/suporteMultiusoFixo.jpg",
      },
    },
    image: "../images/products/suporteMultiusoFixo.jpg",
    cardImage: "/src/public/images/products/suporteMultiusoFixo.jpg",
  },
  55: {
    name: "Suporte Prateleira Invertido",
    category: "Construção Civil",
    description:
      "O suporte prateleira invertido, ou mão francesa invertida, é uma peça de fixação fixada na parede com a ponta voltada para cima ou envolvendo a prateleira. Diferente da tradicional, ela cria um encaixe seguro, ideal para estéticas modernas e industriais, oferecendo um visual limpo, com a tábua apoiada de forma firme",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suportePrateleiraInvertido.jpg",
        Preto: "../images/products/suportePrateleiraInvertido.jpg",
        Brilhante: "../images/products/suportePrateleiraInvertido.jpg",
      },
    },
    image: "../images/products/suportePrateleiraInvertido.jpg",
    cardImage: "/src/public/images/products/suportePrateleiraInvertido.jpg",
  },
  56: {
    name: "Vedante Para Porta",
    category: "Construção Civil",
    description:
      "Um vedante para porta (ou veda porta) é um acessório instalado na parte inferior da porta para cobrir a fresta entre ela e o piso. Ele serve para bloquear a entrada de poeira, insetos, água, ruídos e ar frio/quente, além de ajudar a manter a temperatura interna e aumentar a eficiência do ar-condicionado.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/vedantePorta.jpg",
        Preto: "../images/products/vedantePorta.jpg",
        Brilhante: "../images/products/vedantePorta.jpg",
      },
    },
    image: "../images/products/vedantePorta.jpg",
    cardImage: "/src/public/images/products/vedantePorta.jpg",
  },
  57: {
    name: "Protetor para Porta Slim",
    category: "Construção Civil",
    description:
      "O protetor para porta Slim é um acessório projetado para proteger a parte inferior da porta contra danos e desgaste. Ele é instalado na parte inferior da porta e oferece uma camada adicional de proteção contra impactos e atrito.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/protetorPortaSlim.jpg",
        Preto: "../images/products/protetorPortaSlim.jpg",
        Brilhante: "../images/products/protetorPortaSlim.jpg",
      },
    },
    image: "../images/products/protetorPortaSlim.jpg",
    cardImage: "/src/public/images/products/protetorPortaSlim.jpg",
  },
  58: {
    name: "Protetor para Porta Maxxi",
    category: "Construção Civil",
    description:
      "O protetor para porta Maxxi é um acessório projetado para proteger a parte inferior da porta contra danos e desgaste. Ele é instalado na parte inferior da porta e oferece uma camada adicional de proteção contra impactos e atrito.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/protetorPortaMaxxi.jpg",
        Preto: "../images/products/protetorPortaMaxxi.jpg",
        Brilhante: "../images/products/protetorPortaMaxxi.jpg",
      },
    },
    image: "../images/products/protetorPortaMaxxi.jpg",
    cardImage: "/src/public/images/products/protetorPortaMaxxi.jpg",
  },
  59: {
    name: "Filtro Linha Ares",
    category: "Construção Civil",
    description:
      "é um dispositivo que utiliza uma barreira física, como uma vela de cerâmica ou carvão ativado, para reter impurezas sólidas (areia, barro, ferrugem) e microrganismos da água, melhorando sua qualidade para consumo sem usar energia elétrica. Diferencia-se do purificador por ter um processo de filtragem mais simples.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/ares.jpg",
        Preto: "../images/products/ares.jpg",
        Brilhante: "../images/products/ares.jpg",
      },
    },
    image: "../images/products/ares.jpg",
    cardImage: "/src/public/images/products/ares.jpg",
  },
  60: {
    name: "Filtro Linha Apollo",
    category: "Construção Civil",
    description:
      "é um dispositivo que utiliza uma barreira física, como uma vela de cerâmica ou carvão ativado, para reter impurezas sólidas (areia, barro, ferrugem) e microrganismos da água, melhorando sua qualidade para consumo sem usar energia elétrica. Diferencia-se do purificador por ter um processo de filtragem mais simples.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/apollo.jpg",
        Preto: "../images/products/apollo.jpg",
        Brilhante: "../images/products/apollo.jpg",
      },
    },
    image: "../images/products/apollo.jpg",
    cardImage: "/src/public/images/products/apollo.jpg",
  },
  61: {
    name: "Filtro Linha Atenas",
    category: "Construção Civil",
    description:
      "é um dispositivo que utiliza uma barreira física, como uma vela de cerâmica ou carvão ativado, para reter impurezas sólidas (areia, barro, ferrugem) e microrganismos da água, melhorando sua qualidade para consumo sem usar energia elétrica. Diferencia-se do purificador por ter um processo de filtragem mais simples.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/atenas.jpg",
        Preto: "../images/products/atenas.jpg",
        Brilhante: "../images/products/atenas.jpg",
      },
    },
    image: "../images/products/atenas.jpg",
    cardImage: "/src/public/images/products/atenas.jpg",
  },
  62: {
    name: "Suporte para Galão",
    category: "Construção Civil",
    description:
      "Um suporte para galão é um dispositivo projetado para acomodar com segurança garrafões de água (geralmente de 10L ou 20L), facilitando o acesso à água por gravidade. Feitos de materiais como plástico, metal ou madeira, eles mantém o galão estável, evitando esforço físico e respingos ao encher copos.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suporteGalao.jpg",
        Preto: "../images/products/suporteGalao.jpg",
        Brilhante: "../images/products/suporteGalao.jpg",
      },
    },
    image: "../images/products/suporteGalao.jpg",
    cardImage: "/src/public/images/products/suporteGalao.jpg",
  },
  63: {
    name: "Varão Extensível",
    category: "Construção Civil",
    description:
      "Um varão extensível é uma haste ajustável, geralmente de metal (aço inox ou alumínio), projetada para instalação fácil e rápida por pressão, sem a necessidade de furar paredes, pregos ou parafusos. É ideal para cortinas de box, banheiro, pia, armários ou guarda-roupas, adaptando-se a diferentes vãos",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/varaoExtensivel.jpg",
        Preto: "../images/products/varaoExtensivel.jpg",
        Brilhante: "../images/products/varaoExtensivel.jpg",
      },
    },
    image: "../images/products/varaoExtensivel.jpg",
    cardImage: "/src/public/images/products/varaoExtensivel.jpg",
  },
  64: {
    name: "Varal Articulado",
    category: "Construção Civil",
    description:
      "Um varal articulável é um modelo de secagem de roupas fixado na parede ou muro, projetado com hastes móveis (dobráveis) que permitem recolhê-lo rente à parede quando não estiver em uso. Ele economiza espaço, sendo ideal para apartamentos, corredores e lavanderias pequenas, oferecendo alta resistência para roupas pesadas",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/VaralArticulado.jpg",
        Preto: "../images/products/VaralArticulado.jpg",
        Brilhante: "../images/products/VaralArticulado.jpg",
      },
    },
    image: "../images/products/VaralArticulado.jpg",
    cardImage: "/src/public/images/products/VaralArticulado.jpg",
  },
  65: {
    name: "Kit Simples - 190",
    category: "Construção Civil",
    description:
      "Um Kit Varão de Cortina Simples de 1,90 metros é um conjunto completo para instalação, contendo um tubo (geralmente de 19mm a 28mm de diâmetro) com essa extensão total, ideal para janelas de médio porte. Geralmente inclui suportes e ponteiras para fixação na parede ou teto, sendo indicado para cortinas leves a médias",
    medidas: {
      1000: {
        Branco: "../images/products/kit_simples_190.jpg",
        Tabaco: "../images/products/kit_simples_190.jpg",
        Mogno: "../images/products/kit_simples_190.jpg",
        Marfim: "../images/products/kit_simples_190.jpg",
        Cerejeira: "../images/products/kit_simples_190.jpg",
        Titanio: "../images/products/kit_simples_190.jpg",
        "Ouro Velho": "../images/products/kit_simples_190.jpg",
        Rosa: "../images/products/kit_simples_190.jpg",
        Azul: "../images/products/kit_simples_190.jpg",
        Palha: "../images/products/kit_simples_190.jpg",
        Preto: "../images/products/kit_simples_190.jpg",
        Cromado: "../images/products/kit_simples_190.jpg",
      },
      1500: {
        Branco: "../images/products/kit_simples_190.jpg",
        Tabaco: "../images/products/kit_simples_190.jpg",
        Mogno: "../images/products/kit_simples_190.jpg",
        Marfim: "../images/products/kit_simples_190.jpg",
        Cerejeira: "../images/products/kit_simples_190.jpg",
        Titanio: "../images/products/kit_simples_190.jpg",
        "Ouro Velho": "../images/products/kit_simples_190.jpg",
        Rosa: "../images/products/kit_simples_190.jpg",
        Azul: "../images/products/kit_simples_190.jpg",
        Palha: "../images/products/kit_simples_190.jpg",
        Preto: "../images/products/kit_simples_190.jpg",
        Cromado: "../images/products/kit_simples_190.jpg",
      },
      2000: {
        Branco: "../images/products/kit_simples_190.jpg",
        Tabaco: "../images/products/kit_simples_190.jpg",
        Mogno: "../images/products/kit_simples_190.jpg",
        Marfim: "../images/products/kit_simples_190.jpg",
        Cerejeira: "../images/products/kit_simples_190.jpg",
        Titanio: "../images/products/kit_simples_190.jpg",
        "Ouro Velho": "../images/products/kit_simples_190.jpg",
        Rosa: "../images/products/kit_simples_190.jpg",
        Azul: "../images/products/kit_simples_190.jpg",
        Palha: "../images/products/kit_simples_190.jpg",
        Preto: "../images/products/kit_simples_190.jpg",
        Cromado: "../images/products/kit_simples_190.jpg",
      },
      2500: {
        Branco: "../images/products/kit_simples_190.jpg",
        Tabaco: "../images/products/kit_simples_190.jpg",
        Mogno: "../images/products/kit_simples_190.jpg",
        Marfim: "../images/products/kit_simples_190.jpg",
        Cerejeira: "../images/products/kit_simples_190.jpg",
        Titanio: "../images/products/kit_simples_190.jpg",
        "Ouro Velho": "../images/products/kit_simples_190.jpg",
        Rosa: "../images/products/kit_simples_190.jpg",
        Azul: "../images/products/kit_simples_190.jpg",
        Palha: "../images/products/kit_simples_190.jpg",
        Preto: "../images/products/kit_simples_190.jpg",
        Cromado: "../images/products/kit_simples_190.jpg",
      },
      3000: {
        Branco: "../images/products/kit_simples_190.jpg",
        Tabaco: "../images/products/kit_simples_190.jpg",
        Mogno: "../images/products/kit_simples_190.jpg",
        Marfim: "../images/products/kit_simples_190.jpg",
        Cerejeira: "../images/products/kit_simples_190.jpg",
        Titanio: "../images/products/kit_simples_190.jpg",
        "Ouro Velho": "../images/products/kit_simples_190.jpg",
        Rosa: "../images/products/kit_simples_190.jpg",
        Azul: "../images/products/kit_simples_190.jpg",
        Palha: "../images/products/kit_simples_190.jpg",
        Preto: "../images/products/kit_simples_190.jpg",
        Cromado: "../images/products/kit_simples_190.jpg",
      },
      3500: {
        Branco: "../images/products/kit_simples_190.jpg",
        Tabaco: "../images/products/kit_simples_190.jpg",
        Mogno: "../images/products/kit_simples_190.jpg",
        Marfim: "../images/products/kit_simples_190.jpg",
        Cerejeira: "../images/products/kit_simples_190.jpg",
        Titanio: "../images/products/kit_simples_190.jpg",
        "Ouro Velho": "../images/products/kit_simples_190.jpg",
        Rosa: "../images/products/kit_simples_190.jpg",
        Azul: "../images/products/kit_simples_190.jpg",
        Palha: "../images/products/kit_simples_190.jpg",
        Preto: "../images/products/kit_simples_190.jpg",
        Cromado: "../images/products/kit_simples_190.jpg",
      },
      4000: {
        Branco: "../images/products/kit_simples_190.jpg",
        Tabaco: "../images/products/kit_simples_190.jpg",
        Mogno: "../images/products/kit_simples_190.jpg",
        Marfim: "../images/products/kit_simples_190.jpg",
        Cerejeira: "../images/products/kit_simples_190.jpg",
        Titanio: "../images/products/kit_simples_190.jpg",
        "Ouro Velho": "../images/products/kit_simples_190.jpg",
        Rosa: "../images/products/kit_simples_190.jpg",
        Azul: "../images/products/kit_simples_190.jpg",
        Palha: "../images/products/kit_simples_190.jpg",
        Preto: "../images/products/kit_simples_190.jpg",
        Cromado: "../images/products/kit_simples_190.jpg",
      },
    },
    image: "../images/products/kit_simples_190.jpg",
    cardImage: "/src/public/images/products/cards/65.jpg",
  },
  66: {
    name: "Kit Grosso - 280",
    category: "Construção Civil",
    description:
      "Um Kit Varão de Cortina Simples de 1,90 metros é um conjunto completo para instalação, contendo um tubo (geralmente de 19mm a 28mm de diâmetro) com essa extensão total, ideal para janelas de médio porte. Geralmente inclui suportes e ponteiras para fixação na parede ou teto, sendo indicado para cortinas leves a médias",
    medidas: {
      1000: {
        Branco: "../images/products/kit_grosso280.jpg",
        Tabaco: "../images/products/kit_grosso280.jpg",
        Mogno: "../images/products/kit_grosso280.jpg",
        Marfim: "../images/products/kit_grosso280.jpg",
        Cerejeira: "../images/products/kit_grosso280.jpg",
        Titanio: "../images/products/kit_grosso280.jpg",
        "Ouro Velho": "../images/products/kit_grosso280.jpg",
        Rosa: "../images/products/kit_grosso280.jpg",
        Azul: "../images/products/kit_grosso280.jpg",
        Palha: "../images/products/kit_grosso280.jpg",
        Preto: "../images/products/kit_grosso280.jpg",
        Cromado: "../images/products/kit_grosso280.jpg",
      },
      1500: {
        Branco: "../images/products/kit_grosso280.jpg",
        Tabaco: "../images/products/kit_grosso280.jpg",
        Mogno: "../images/products/kit_grosso280.jpg",
        Marfim: "../images/products/kit_grosso280.jpg",
        Cerejeira: "../images/products/kit_grosso280.jpg",
        Titanio: "../images/products/kit_grosso280.jpg",
        "Ouro Velho": "../images/products/kit_grosso280.jpg",
        Rosa: "../images/products/kit_grosso280.jpg",
        Azul: "../images/products/kit_grosso280.jpg",
        Palha: "../images/products/kit_grosso280.jpg",
        Preto: "../images/products/kit_grosso280.jpg",
        Cromado: "../images/products/kit_grosso280.jpg",
      },
      2000: {
        Branco: "../images/products/kit_grosso280.jpg",
        Tabaco: "../images/products/kit_grosso280.jpg",
        Mogno: "../images/products/kit_grosso280.jpg",
        Marfim: "../images/products/kit_grosso280.jpg",
        Cerejeira: "../images/products/kit_grosso280.jpg",
        Titanio: "../images/products/kit_grosso280.jpg",
        "Ouro Velho": "../images/products/kit_grosso280.jpg",
        Rosa: "../images/products/kit_grosso280.jpg",
        Azul: "../images/products/kit_grosso280.jpg",
        Palha: "../images/products/kit_grosso280.jpg",
        Preto: "../images/products/kit_grosso280.jpg",
        Cromado: "../images/products/kit_grosso280.jpg",
      },
      2500: {
        Branco: "../images/products/kit_grosso280.jpg",
        Tabaco: "../images/products/kit_grosso280.jpg",
        Mogno: "../images/products/kit_grosso280.jpg",
        Marfim: "../images/products/kit_grosso280.jpg",
        Cerejeira: "../images/products/kit_grosso280.jpg",
        Titanio: "../images/products/kit_grosso280.jpg",
        "Ouro Velho": "../images/products/kit_grosso280.jpg",
        Rosa: "../images/products/kit_grosso280.jpg",
        Azul: "../images/products/kit_grosso280.jpg",
        Palha: "../images/products/kit_grosso280.jpg",
        Preto: "../images/products/kit_grosso280.jpg",
        Cromado: "../images/products/kit_grosso280.jpg",
      },
      3000: {
        Branco: "../images/products/kit_grosso280.jpg",
        Tabaco: "../images/products/kit_grosso280.jpg",
        Mogno: "../images/products/kit_grosso280.jpg",
        Marfim: "../images/products/kit_grosso280.jpg",
        Cerejeira: "../images/products/kit_grosso280.jpg",
        Titanio: "../images/products/kit_grosso280.jpg",
        "Ouro Velho": "../images/products/kit_grosso280.jpg",
        Rosa: "../images/products/kit_grosso280.jpg",
        Azul: "../images/products/kit_grosso280.jpg",
        Palha: "../images/products/kit_grosso280.jpg",
        Preto: "../images/products/kit_grosso280.jpg",
        Cromado: "../images/products/kit_grosso280.jpg",
      },
      3500: {
        Branco: "../images/products/kit_grosso280.jpg",
        Tabaco: "../images/products/kit_grosso280.jpg",
        Mogno: "../images/products/kit_grosso280.jpg",
        Marfim: "../images/products/kit_grosso280.jpg",
        Cerejeira: "../images/products/kit_grosso280.jpg",
        Titanio: "../images/products/kit_grosso280.jpg",
        "Ouro Velho": "../images/products/kit_grosso280.jpg",
        Rosa: "../images/products/kit_grosso280.jpg",
        Azul: "../images/products/kit_grosso280.jpg",
        Palha: "../images/products/kit_grosso280.jpg",
        Preto: "../images/products/kit_grosso280.jpg",
        Cromado: "../images/products/kit_grosso280.jpg",
      },
      4000: {
        Branco: "../images/products/kit_grosso280.jpg",
        Tabaco: "../images/products/kit_grosso280.jpg",
        Mogno: "../images/products/kit_grosso280.jpg",
        Marfim: "../images/products/kit_grosso280.jpg",
        Cerejeira: "../images/products/kit_grosso280.jpg",
        Titanio: "../images/products/kit_grosso280.jpg",
        "Ouro Velho": "../images/products/kit_grosso280.jpg",
        Rosa: "../images/products/kit_grosso280.jpg",
        Azul: "../images/products/kit_grosso280.jpg",
        Palha: "../images/products/kit_grosso280.jpg",
        Preto: "../images/products/kit_grosso280.jpg",
        Cromado: "../images/products/kit_grosso280.jpg",
      },
    },
    image: "../images/products/kit_grosso280.jpg",
    cardImage: "/src/public/images/products/cards/66.jpg",
  },
  67: {
    name: "Suporte Avulso Simples",
    category: "Construção Civil",
    description:
      "Um suporte de cortina é um acessório de fixação, instalado na parede ou teto, responsável por segurar o varão ou trilho, garantindo estabilidade e o caimento correto do tecido. Eles permitem a abertura e fechamento das cortinas e podem ser simples, duplos, ajustáveis, de metal ou madeira.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "/src/public/images/products/suporteAvulso.jpg",
        Preto: "src/public/images/products/suporteAvulso.jpg",
        Brilhante: "src/public/images/products/suporteAvulso.jpg",
      },
    },
    image: "../images/products/suporteAvulso.jpg",
    cardImage: "/src/public/images/products/suporteAvulso.jpg",
  },
  68: {
    name: "Suporte Avulso Grosso",
    category: "Construção Civil",
    description:
      "Um suporte avulso grosso é um acessório de fixação, instalado na parede ou teto, responsável por segurar o varão ou trilho, garantindo estabilidade e o caimento correto do tecido. Eles permitem a abertura e fechamento das cortinas e podem ser simples, duplos, ajustáveis, de metal ou madeira.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suporteAvulso.jpg",
        Preto: "../images/products/suporteAvulso.jpg",
        Brilhante: "../images/products/suporteAvulso.jpg",
      },
    },
    image: "../images/products/suporteAvulso.jpg",
    cardImage: "/src/public/images/products/suporteAvulso.jpg",
  },
  69: {
    name: "Suporte Avulso Duplo",
    category: "Construção Civil",
    description:
      "Um suporte avulso duplo é um acessório de fixação, instalado na parede ou teto, responsável por segurar o varão ou trilho, garantindo estabilidade e o caimento correto do tecido. Eles permitem a abertura e fechamento das cortinas e podem ser simples, duplos, ajustáveis, de metal ou madeira.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "src/public/images/products/suporteAvulsoDuplo.jpg",
        Preto: "src/public/images/products/suporteAvulsoDuplo.jpg",
        Brilhante: "src/public/images/products/suporteAvulsoDuplo.jpg",
      },
    },
    image: "../images/products/suporteAvulsoDuplo.jpg",
    cardImage: "/src/public/images/products/suporteAvulsoDuplo.jpg",
  },
  70: {
    name: "Suporte Avulso Grosso/Fino",
    category: "Construção Civil",
    description:
      "Um suporte avulso grosso/fino é um acessório de fixação, instalado na parede ou teto, responsável por segurar o varão ou trilho, garantindo estabilidade e o caimento correto do tecido. Eles permitem a abertura e fechamento das cortinas e podem ser simples, duplos, ajustáveis, de metal ou madeira.",
    medidas: {
      "50 x 15 x 15": {
        Branco: "../images/products/suporteAvulso.jpg",
        Preto: "../images/products/suporteAvulso.jpg",
        Brilhante: "../images/products/suporteAvulso.jpg",
      },
    },
    image: "../images/products/suporteAvulsoDuplo.jpg",
    cardImage: "/src/public/images/products/suporteAvulsoDuplo.jpg",
  },
  71: {
    name: "Emenda Varão",
    category: "Construção Civil",
    description:
      "Uma emenda para varão é um pequeno conector, geralmente de plástico resistente ou metal, utilizado para unir dois ou mais varões de cortina, permitindo aumentar o comprimento total do suporte. Ela facilita a instalação de cortinas em janelas grandes ou paredes inteiras, garantindo que o conjunto fique firme e alinhado.",
    medidas: {
      "19 x 19 x 70": {
        Grafite: "../images/products/emendaVarao.jpg",
      },
    },
    image: "../images/products/emendaVarao.jpg",
    cardImage: "/src/public/images/products/cards/71.jpg",
  },
};

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products[productId];
function generateProductDetails() {
  if (product) {
    document.getElementById("productCategory").textContent = product.category;
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productDescription").innerHTML =
      product.description;
    document.getElementById("productImage").src = product.image;
    const productMeasures = document.getElementById("productMeasures");
    const colorContainer = document.getElementById("productColors");
    const titleSize = document.getElementById("titleSize");
    const titleColor = document.getElementById("titleColor");
    if (product.medidas) {
      titleSize.textContent = "Tamanhos disponíveis:";
      Object.keys(product.medidas).forEach((medida) => {
        const btnMedida = document.createElement("button");
        btnMedida.textContent = medida + " cm";
        btnMedida.addEventListener("click", () => {
          colorContainer.innerHTML = "";
          titleColor.textContent = "Cores disponíveis:";
          if (product.medidas[medida]) {
            Object.keys(product.medidas[medida]).forEach((cor) => {
              const btn = document.createElement("button");
              btn.textContent = cor;
              btn.addEventListener("click", () => {
                document.getElementById("productImage").src =
                  product.medidas[medida][cor];
              });
              colorContainer.appendChild(btn);
            });
            const primeiraCor = Object.keys(product.medidas[medida])[0];
            document.getElementById("productImage").src =
              product.medidas[medida][primeiraCor];
          }
        });
        productMeasures.appendChild(btnMedida);
      });
    }
  }
}
// links de produtos relacionados
const links = document.querySelectorAll(".card-link");
let availableIds = Object.keys(products).map(Number);
availableIds = availableIds.filter((id) => id !== Number(productId));
availableIds.sort(() => Math.random() - 0.5);
const selectedIds = availableIds.slice(0, links.length + 1);
function generateRandomSuggestion() {
  links.forEach((link, index) => {
    const randomId = selectedIds[index];
    const cardImage = link.querySelector(".card-image");
    const cardName = link.querySelector(".card-name");

    link.href = `/src/public/pages/product.html?id=${randomId}`;
    cardImage.src = products[randomId].cardImage;
    cardName.textContent = products[randomId].name;
  });
}
const catalogue = document.querySelector(".catalogue");
function generateCivilCatalogue() {
  catalogue.innerHTML = "";

  Object.entries(products).forEach(([id, product]) => {
    if (product.category !== "Construção Civil") return;
    const card = document.createElement("a");

    card.classList.add("card-link");
    card.href = `../pages/product.html?id=${id}`;
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = product.cardImage;

    const cardName = document.createElement("p");
    cardName.classList.add("card-name");
    cardName.textContent = product.name;
    cardDiv.appendChild(cardImage);
    card.appendChild(cardDiv);
    card.appendChild(cardName);

    catalogue.appendChild(card);
  });
}
function generateIndustrialCatalogue() {
  catalogue.innerHTML = "";
  Object.entries(products).forEach(([id, product]) => {
    if (product.category !== "Perfis Industriais") return;
    const card = document.createElement("a");
    card.classList.add("card-link");
    card.href = `../pages/product.html?id=${id}`;
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = product.cardImage;

    const cardName = document.createElement("p");
    cardName.classList.add("card-name");
    cardName.textContent = product.name;
    cardDiv.appendChild(cardImage);
    card.appendChild(cardDiv);
    card.appendChild(cardName);

    catalogue.appendChild(card);
  });
}

const searchFn = document.getElementById("searchInput");

function searchItems() {
  const title = document.getElementById("catalogueTitle");
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  catalogue.innerHTML = "";
  Object.entries(products).forEach(([id, product]) => {
    if (
      product.name.toLowerCase().includes(searchInput) &&
      title.textContent.includes(product.category)
    ) {
      const card = document.createElement("a");
      card.classList.add("card-link");
      card.href = `../pages/product.html?id=${id}`;
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      const cardImage = document.createElement("img");
      cardImage.classList.add("card-image");
      cardImage.src = product.cardImage;

      const cardName = document.createElement("p");
      cardName.classList.add("card-name");
      cardName.textContent = product.name;
      cardDiv.appendChild(cardImage);
      card.appendChild(cardDiv);
      card.appendChild(cardName);

      catalogue.appendChild(card);
    }
  });
}
searchFn.addEventListener("input", searchItems);
