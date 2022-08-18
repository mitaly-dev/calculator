let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("#btn");
for (let btn of buttons) {
  btn.addEventListener("click", function (event) {
    inputBox.value += event.target.value;
    btn.classList.add("active");
    setTimeout(() => {
      btn.classList.remove("active");
    }, 500);
  });
}

document.getElementById("result").addEventListener("click", function () {
  let toalResult = eval(inputBox.value);
  inputBox.value = toalResult;
});

document.getElementById("clear").addEventListener("click", function () {
  inputBox.value = "";
});

document.getElementById("delete").addEventListener("click", function () {
  inputBox.value = inputBox.value.slice(0, -1);
});
