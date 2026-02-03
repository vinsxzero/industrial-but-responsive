const products = {
  1: {
    category: "Perfis Industriais",
    name: "Perfil Industrial Em Alumínio",
    description:
      "Sendo o metal um dos materiais mais utilizados em diversas áreas e segmentos, na linha de perfil de alumínios industrial a extrusão de um material é usada para dar forma a ele visando garantir a qualidade e resistência de quando aplicada nos mais variados cenários.",
    cores: null,
    image: "../images/products/large-steel-factory-warehouse-1024x683.jpg",
  },
};

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products[productId];
if (product) {
  document.getElementById("productCategory").textContent = product.category;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productDescription").textContent =
    product.description;
  document.getElementById("productImage").src = product.image;
}
