const form = document.querySelector("form");
const addInput = document.querySelectorAll(".add__input");
const container = document.querySelector(".add__cards");

let items = [];

const getInput = () => {
  event.preventDefault();
  let arr = [];
  addInput.forEach((element) => {
    arr.push(element.value);
  });
  items.push({
    name: arr[0],
    dsc: arr[1],
    url: arr[2],
    price: arr[3],
  });
  //   console.log(arr);
};
const renderItems = () => {
  container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="add__card">
      <button data-index="${items.length - 1}" class="add__remove">
   
      </button>
      <div class="add__img">
        <img
          src="${items[items.length - 1].url}"
          alt=""
          srcset=""
        />
      </div>
      <div class="add__text">
        <div class="add__name">${items[items.length - 1].name}</div>
        <div class="add__dsc">${items[items.length - 1].dsc}</div>
        <div class="add__price">${items[items.length - 1].price} руб</div>
      </div>
    </div>
      `
  );
  const removeBtn = document.querySelectorAll(".add__remove");
  removeBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      e.target.parentNode.remove();
      items = [];
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
  getInput();
  console.log(items);
  renderItems();
  clearForm();
});

// .remove();
// элемент.parentNode
