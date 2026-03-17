const products = {
  1: {
    category: "Perfis Industriais",
    name: "Perfil Industrial Em Alumínio",
    description:
      "Sendo o metal um dos materiais mais utilizados em diversas áreas e segmentos, na linha de perfil de alumínios industrial a extrusão de um material é usada para dar forma a ele visando garantir a qualidade e resistência de quando aplicada nos mais variados cenários.",
    cores: null,
    image: "../images/products/industrial-profiles.jpg",
    cardImage: "../images/products/cards/1.jpeg",
  },
  2: {
    category: "Perfis Industriais",
    name: "Perfil em Alumínio",
    description:
      "Contamos com a linha completa de perfis, para fabricação de esquadrias, corrimão, portas de vidro, entre outros. Além de grande variedade, temos um estoque pronta entrega  garantindo agilidade do seu material.",

    medidas: null,
    image: "../images/products/aluminum-profiles.jpg",
    cardImage: "../images/products/cards/2.jpg",
  },
  3: {
    category: "Perfis Industriais",
    name: "Esquadrias em Alumínio",
    description:
      "Na nossa linha de esquadrias, você encontra uma ampla variedade de produtos versáteis e altamente duráveis. As esquadrias em alumínio se destacam pelo excelente custo-benefício, aliando resistência, baixa manutenção e longa vida útil. <br/><br/> Além disso, o design moderno e a estética sofisticada contribuem diretamente para a valorização do imóvel. Afinal, quem não deseja uma casa com portas e janelas bonitas, resistentes e fáceis de conservar?",

    medidas: null,
    image: "../images/products/aluminum-frames.jpg",
    cardImage: "../images/products/cards/3.jpg",
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
    cardImage: "../images/products/cards/4.jpg",
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
    cardImage: "../images/products/cards/5.jpg",
  },
  6: {
    category: "Construção Civil",
    name: "Alçapão para Forro Drywall",
    description: "",
    medidas: {
      200: { Branco: "../images/products/alcapao_branco.jpg" },
      300: { Branco: "../images/products/alcapao_branco.jpg" },
      400: { Branco: "../images/products/alcapao_branco.jpg" },
      500: { Branco: "../images/products/alcapao_branco.jpg" },
      600: { Branco: "../images/products/alcapao_branco.jpg" },
    },
    image: "../images/products/alcapao_branco.jpg",
    cardImage: "../images/products/cards/6.jpg",
  },
  7: {
    category: "Construção Civil",
    name: "Alçapão Invisível para Tampa",
    description: "",
    medidas: {
      200: { Branco: "../images/products/alcapaoInvisivel_branco.jpg" },
      300: { Branco: "../images/products/alcapaoInvisivel_branco.jpg" },
      400: { Branco: "../images/products/alcapaoInvisivel_branco.jpg" },
      500: { Branco: "../images/products/alcapaoInvisivel_branco.jpg" },
      600: { Branco: "../images/products/alcapaoInvisivel_branco.jpg" },
    },
    image: "../images/products/alcapaoInvisivel_branco.jpg",
    cardImage: "../images/products/cards/7.jpg",
  },
  8: {
    category: "Construção Civil",
    name: "Alçapão Invisível Com Tampa ",
    description: "",
    medidas: {
      200: { Branco: "../images/products/alcapaoInvisivelCTampa_branco.jpg" },
      300: { Branco: "../images/products/alcapaoInvisivelCTampa_branco.jpg" },
      400: { Branco: "../images/products/alcapaoInvisivelCTampa_branco.jpg" },
      500: { Branco: "../images/products/alcapaoInvisivelCTampa_branco.jpg" },
      600: { Branco: "../images/products/alcapaoInvisivelCTampa_branco.jpg" },
    },
    image: "../images/products/alcapaoInvisivelCTampa_branco.jpg",
    cardImage: "../images/products/cards/8.jpg",
  },
  9: {
    category: "Construção Civil",
    name: "Cantoneira L ",
    description: "",
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
    cardImage: "../images/products/cards/9.jpg",
  },
  10: {
    category: "Construção Civil",
    name: "Cantoneira Sextavada ",
    description: "",
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
    cardImage: "../images/products/cards/10.jpg",
  },
  11: {
    category: "Construção Civil",
    name: "Cantoneira Redonda ",
    description: "",
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
    cardImage: "../images/products/cards/11.jpg",
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
    cardImage: "../images/products/cards/9.jpg",
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
    image: "../images/products/cantoReboco.jpg",
    cardImage: "../images/products/cards/13.jpg",
  },
  14: {
    name: "Canto Móveis / Divisórias",
    category: "Construção Civil",
    description: "",
    medidas: {
      "3/4'": {
        Bicromado: "../images/products/cantoMoveis_bicromado.jpg",
        Zincado: "../images/products/cantoMoveis_zincado.jpg",
      },
      "1'": {
        Bicromado: "../images/products/cantoMoveis_bicromado.jpg",
        Zincado: "../images/products/cantoMoveis_zincado.jpg",
      },
      "1 1/2'": {
        Bicromado: "../images/products/cantoMoveis_bicromado.jpg",
        Zincado: "../images/products/cantoMoveis_zincado.jpg",
      },
      "2'": {
        Bicromado: "../images/products/cantoMoveis_bicromado.jpg",
        Zincado: "../images/products/cantoMoveis_zincado.jpg",
      },
      "3'": {
        Bicromado: "../images/products/cantoMoveis_bicromado.jpg",
        Zincado: "../images/products/cantoMoveis_zincado.jpg",
      },
      "4'": {
        Bicromado: "../images/products/cantoMoveis_bicromado.jpg",
        Zincado: "../images/products/cantoMoveis_zincado.jpg",
      },
    },
    image: "../images/products/cantoMoveis.jpg",
    cardImage: "../images/products/cards/14.jpg",
  },
  15: {
    name: "Friso Junção",
    category: "Construção Civil",
    description: "",
    medidas: {
      "30x15x2000": {
        Branco: "../images/products/frisoJuncao_branco.jpg",
        Preto: "../images/products/frisoJuncao_preto.jpg",
        Acetinado: "../images/products/frisoJuncao_acetinado.jpg",
      },
    },
    image: "../images/products/frisoJuncao_branco.jpg",
    cardImage: "../images/products/cards/15.jpg",
  },
  16: {
    name: "Friso Soleira",
    category: "Construção Civil",
    description: "",
    medidas: {
      "30x15x2000": {
        Branco: "../images/products/frisoSoleira_branco.jpg",
        Preto: "../images/products/frisoSoleira_preto.jpg",
        Acetinado: "../images/products/frisoSoleira_acetinado.jpg",
      },
    },
    image: "../images/products/frisoSoleira_branco.jpg",
    cardImage: "../images/products/cards/16.jpg",
  },
  17: {
    name: "Perfil Led Sobrepor",
    category: "Construção Civil",
    description: "",
    medidas: {
      "17x7": {
        Branco: "../images/products/perfilLedSobrepor_branco.jpg",
        Preto: "../images/products/perfilLedSobrepor_preto.jpg",
        Acetinado: "../images/products/perfilLedSobrepor_acetinado.jpg",
      },
    },
    image: "../images/products/perfilLedSobrepor_branco.jpg",
    cardImage: "../images/products/cards/17.jpg",
  },
  18: {
    name: "Perfil Led Baby Sobrepor",
    category: "Construção Civil",
    description: "",
    medidas: {
      "11x11": {
        Branco: "../images/products/perfilLedBabySobrepor_branco.jpg",
        Preto: "../images/products/perfilLedBabySobrepor_preto.jpg",
        Acetinado: "../images/products/perfilLedBabySobrepor_acetinado.jpg",
      },
    },
    image: "../images/products/perfilLedBabySobrepor_branco.jpg",
    cardImage: "../images/products/cards/18.jpg",
  },
  19: {
    name: "Perfil Led Embutir",
    category: "Construção Civil",
    description: "",
    medidas: {
      "24x7": {
        Branco: "../images/products/perfilLedEmbutir_branco.jpg",
        Preto: "../images/products/perfilLedEmbutir_preto.jpg",
        Acetinado: "../images/products/perfilLedEmbutir_acetinado.jpg",
      },
    },
    image: "../images/products/perfilLedEmbutir_branco.jpg",
    cardImage: "../images/products/cards/19.jpg",
  },
  20: {
    name: "Perfil Led Baby Embutir",
    category: "Construção Civil",
    description: "",
    medidas: {
      "20x11": {
        Branco: "../images/products/perfilLedBabyEmbutir_branco.jpg",
        Preto: "../images/products/perfilLedBabyEmbutir_preto.jpg",
        Acetinado: "../images/products/perfilLedBabyEmbutir_acetinado.jpg",
      },
    },
    image: "../images/products/perfilLedBabyEmbutir_branco.jpg",
    cardImage: "../images/products/cards/20.jpg",
  },
  21: {
    name: "Kit Corrimão Chato",
    category: "Construção Civil",
    description: "",
    medidas: {
      1000: {
        Branco: "../images/products/kitCorrimaoChato_branco.jpg",
        Preto: "../images/products/kitCorrimaoChato_preto.jpg",
        Polido: "../images/products/kitCorrimaoChato_polido.jpg",
      },
      1500: {
        Branco: "../images/products/kitCorrimaoChato_branco.jpg",
        Preto: "../images/products/kitCorrimaoChato_preto.jpg",
        Polido: "../images/products/kitCorrimaoChato_polido.jpg",
      },
      2000: {
        Branco: "../images/products/kitCorrimaoChato_branco.jpg",
        Preto: "../images/products/kitCorrimaoChato_preto.jpg",
        Polido: "../images/products/kitCorrimaoChato_polido.jpg",
      },
      3000: {
        Branco: "../images/products/kitCorrimaoChato_branco.jpg",
        Preto: "../images/products/kitCorrimaoChato_preto.jpg",
        Polido: "../images/products/kitCorrimaoChato_polido.jpg",
      },
      4000: {
        Branco: "../images/products/kitCorrimaoChato_branco.jpg",
        Preto: "../images/products/kitCorrimaoChato_preto.jpg",
        Polido: "../images/products/kitCorrimaoChato_polido.jpg",
      },
    },
    image: "../images/products/kitCorrimaoChato_branco.jpg",
    cardImage: "../images/products/cards/21.jpg",
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

    link.href = `../pages/product.html?id=${randomId}`;
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

searchFn.addEventListener("input", searchItems);
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
