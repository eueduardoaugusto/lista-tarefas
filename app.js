const tarefa = document.querySelector("#input-tarefa");
const btnAdicionar = document.querySelector("#btn-adicionar");
const cardList = document.querySelector(".card-list");
const list = document.querySelector("#list");

btnAdicionar.addEventListener("click", (e) => {
  e.preventDefault();

  const newTarefa = tarefa.value.trim();
  if (!newTarefa) return;

  cardList.style.display = "block";

  const li = document.createElement("li");
  li.className = "item";

  const span = document.createElement("span");
  span.textContent = newTarefa;

  const button = document.createElement("button");
  button.className = "btn-delete";
  button.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

  button.addEventListener("click", () => {
    li.remove();
    if (list.children.length === 0) {
      cardList.style.display = "none";
    }
  });

  li.append(span, button);
  list.appendChild(li);

  tarefa.value = "";
});
