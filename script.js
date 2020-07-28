// document.addEventListener("DOMContentLoaded", () => {}) can also be used
document.onreadystatechange = function () {
  console.log("Ready");
  const inputValue = document.getElementById("input");
  const message = document.getElementById("message");
  const enter = document.getElementById("enter");

  if (document.readyState === "interactive") {
    console.log("interactive");

    enter.onclick = () => callback(message, inputValue);
    document.getElementById("input").addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        callback();
      }
    });
  }
};
const callback = function (message, inputValue) {
  let input = inputValue.value;
  inputValue.value = "";
  message.innertext = input;
};
