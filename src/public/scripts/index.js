//tratando formulário
class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.button = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }
  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }
  displayError() {
    this.form.innerHTML = this.settings.error;
  }
  getFormObject() {
    const formObject = {};
    const fields = document.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }
  validateForm() {
    const fields = this.form.querySelectorAll("[name]");
    let valid = true;
    fields.forEach((field) => {
      field.classList.remove("error-field");
      if (!field.value.trim()) {
        valid = false;
        field.classList.add("error-field");
        return;
      }
      if (field.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(field.value)) {
          valid = false;
          field.classList.add("error-field");
        }
      }
    });
    return valid;
  }
  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }
  async sendForm(event) {
    if (!this.validateForm()) {
      alert("Por favor, preencha todos os campos  corretamente.");
      return;
    }
    try {
      this.onSubmission(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess();
    } catch (error) {
      this.displayError();
      throw new Error(error);
    }
  }

  init() {
    if (this.form) {
      this.button.addEventListener("click", this.sendForm);
    }
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1  class='success'>Mensagem enviada com sucesso!</h1>",
  error: "<h1 class='error>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();
//definindo ano
var year = new Date().getFullYear();

var rights = document.getElementById("year");
rights.textContent = year;
//selecionando item de mission
const missionRow = document.querySelectorAll(".object .row");
const contents = document.querySelectorAll(".content");
let current = document.querySelector(".content.show");
missionRow.forEach((row) => {
  const arrow = row.querySelector(".arrow");

  arrow.addEventListener("click", () => {
    const targetId = row.dataset.target;

    missionRow.forEach((i) => i.classList.remove("selected"));
    row.classList.add("selected");

    contents.forEach((content) => {
      content.classList.add("inactive");
      content.classList.remove("selected");

      if (content.id === targetId) {
        content.classList.add("selected");
      }
    });
  });
});

//menu mobile
const menuButton = document.querySelector("#menu-btn");
const menuNav = document.querySelector(".menu-nav");
const body = document.querySelector("body");
menuButton.addEventListener("click", () => {
  if (!menuNav.classList.contains("open")) {
    menuNav.classList.add("open");
    body.classList.add("block-page");
    menuNav.classList.remove("close");
  } else {
    menuNav.classList.add("close");
    menuNav.classList.remove("open");
    body.classList.remove("block-page");
  }
});
//selecionando produtos
document.addEventListener("DOMContentLoaded", () => {
  const productItems = document.querySelectorAll(".catalogue .card");

  productItems.forEach((item) => {
    item.addEventListener("click", () => {
      productItems.forEach((i) => i.classList.remove("selected"));
      item.classList.add("selected");
    });
  });
});
console.log(document.querySelectorAll(".catalogue .card").length);
