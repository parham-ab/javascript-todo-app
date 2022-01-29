// elements
const input = document.querySelector("input");
const AddToto = document.querySelector(".add");
const ul = document.querySelector("ul");
const list = document.querySelector(".list");
// function's
AddToto.addEventListener("click", function () {
  // variables
  const li = document.createElement("li");
  const deleteTodos = document.createElement("button");
  const complete = document.createElement("button");
  const inputVal = input.value;
  //   prevent adding todo's if input was empty
  if (!input.value.length || input.value.startsWith(" ")) {
    alert("Please type somethig todo !");
  } else {
    //   append
    list.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(deleteTodos);
    ul.appendChild(complete);
    //   adding classes
    deleteTodos.innerHTML = `<i class="fa fa-trash"></i>`;
    deleteTodos.classList.add("delete");
    complete.innerHTML = `<i class="fa fa-check"></i>`;
    complete.classList.add("complete");
    li.innerHTML = inputVal;
    deleteTodos.addEventListener("click", function () {
      ul.removeChild(li);
      deleteTodos.remove();
      complete.remove();
    });
  }
  //   toggle complete todo's
  complete.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
  //   clear input after adding todo
  input.value = "";
});
