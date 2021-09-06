const form = document.querySelector("form"),
  addInput = document.querySelectorAll(".add__input"),
  container = document.querySelector(".add__cards"),
  required = document.querySelectorAll(".required"),
  addSubmit = document.querySelector(".add__submit");

let items = [];

const getInput = () => {
  addInput.forEach((element) => {
    items.push(element.value);
  });
};
const renderItems = () => {
  container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="add__card">
      <button class="add__remove">
   
      </button>
      <div class="add__img">
        <img
          src="${items[2]}"
          alt=""
          srcset=""
        />
      </div>
      <div class="add__text">
        <div class="add__name">${items[0]}</div>
        <div class="add__dsc">${items[1]}</div>
        <div class="add__price">${items[3]} руб</div>
      </div>
    </div>
      `
  );
  items = [];
  const removeBtn = document.querySelectorAll(".add__remove");
  removeBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      e.target.parentNode.style.transform = "scale(0)";
      e.target.parentNode.style.opacity = "0";
      setTimeout(() => {
        e.target.parentNode.remove();
      }, 300);
    });
  });
};
const clearForm = () => {
  addInput.forEach((element) => {
    element.value = "";
  });
};
form.addEventListener("submit", () => {
  event.preventDefault();
  if (
    required[0].lastElementChild.value != "" &&
    required[1].lastElementChild.value != "" &&
    required[2].lastElementChild.value != ""
  ) {
    getInput();
    renderItems();
    clearForm();
    addSubmit.removeAttribute("disabled");
  } else {
    addSubmit.setAttribute("disabled", "disabled");
    required.forEach((element) => {
      if (element.lastElementChild.value != "") {
        element.classList.remove("active");
      } else {
        element.classList.add("active");
      }
    });
  }
});
form.addEventListener("input", () => {
  required.forEach((element) => {
    element.classList.remove("active");
  });
  if (
    required[0].lastElementChild.value != "" &&
    required[1].lastElementChild.value != "" &&
    required[2].lastElementChild.value != ""
  ) {
    addSubmit.removeAttribute("disabled");
  } else {
    addSubmit.setAttribute("disabled", "disabled");
    required.forEach((element) => {
      if (element.lastElementChild.value != "") {
        element.classList.remove("active");
      } else {
        element.classList.add("active");
      }
    });
  }
});

