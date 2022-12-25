let result_text_div = document.querySelector(".result");
let result_text = result_text_div.innerHTML;

const updateText = function (text) {
  result_text_div.innerHTML = result_text;
};

document.querySelector("#clear").addEventListener("click", function (event) {
  result_text = "0";
  updateText();
});

document.querySelector("#paranthesis").addEventListener("click", function () {
  if (result_text[0] != "-" && result_text[0] != "0") {
    result_text = "-" + result_text;
  } else if (result_text[0] == "-") {
    result_text = result_text.substring(1);
  }
  updateText();
});

document.querySelector("#equals").addEventListener("click", function (event) {
  result_text_div.innerHTML = eval(result_text.replace("X", "*"));
  result_text = result_text_div.innerHTML;
});

document.querySelectorAll(".eval").forEach(function (number) {
  number.addEventListener("click", function (event) {
    if (result_text === "0") {
      result_text = "";
    }
    result_text += event.target.innerHTML;
    updateText();
  });
});
