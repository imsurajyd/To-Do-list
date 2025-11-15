let save = document.querySelector("#save");
let parent = document.querySelector("#parent");
let input = document.querySelector("#input");

save.addEventListener("click", function () {
  let enter = input.value;

  if (enter === "") {
    alert("Bhai Pahle item likh le..!");
  } else {
    let li = document.createElement("li");
    let delet = document.createElement("button");

    li.textContent = enter;
    li.style.textTransform = "capitalize";
    delet.textContent = "Delete";

    parent.appendChild(li);
    li.appendChild(delet);

    delet.addEventListener("click", function () {
      li.remove();
    });
  }

  input.value = "";
  input.focus();
});
