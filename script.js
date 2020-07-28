const inputValue = document.getElementById("input");
const message = document.getElementById("message");
const enter = document.getElementById("enter");
// document.addEventListener("DOMContentLoaded", () => {}) can also be used
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    enter.onclick = () => callback();
    document.getElementById("input").addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        callback();
      }
    });
  }
};
const callback = function () {
  console.log("callback");
  let input = inputValue.value;
  inputValue.value = "";
  message.innerHTML = `<span class="has-text-link has-text-weight-bold">${input}: </span>
  <span class="has-text-black-bis">${input}</span>`;
};
