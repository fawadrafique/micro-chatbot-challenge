const inputValue = document.getElementById("input");
const message = document.getElementById("message");
const enter = document.getElementById("enter");
const trigger = [
  //0
  ["hi", "hey", "hello"],
  //1
  ["how are you", "how are things"],
  //2
  ["what is going on", "what is up"],
  //3
  ["happy", "good", "well", "fantastic", "cool"],
  //4
  ["bad", "bored", "tired", "sad"],
  //5
  ["tell me story", "tell me joke"],
  //6
  ["thanks", "thank you"],
  //7
  ["bye", "good bye", "goodbye"],
];

const reply = [
  //0
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  //1
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?",
  ],
  //2
  ["Nothing much", "Exciting things!"],
  //3
  ["Glad to hear it"],
  //4
  ["Why?", "Cheer up buddy"],
  //5
  ["What about?", "Once upon a time..."],
  //6
  ["You're welcome", "No problem"],
  //7
  ["Goodbye", "See you later"],
];

const alternative = [
  "Same",
  "Go on...",
  "Try again",
  "I'm listening...",
  "Bro...",
];
// document.addEventListener("DOMContentLoaded", () => {}) can also be used
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    enter.onclick = () => callback();
    document.getElementById("input").addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        callback();
      }
    });
    let firsteGreetings = reply[0];
    let firsteGreeting = `${
      firsteGreetings[Math.floor(Math.random() * firsteGreetings.length)]
    } how do you feel today?`;
    bot(firsteGreeting);
  }
};
const callback = function () {
  console.log("callback");
  let input = inputValue.value;
  inputValue.value = "";
  output(input);
};
function output(input) {
  const regex = /[^\w\s\d]/gi;
  let response;
  let text = input.toLowerCase().replace(regex, "");
  user(text);
}

function bot(reply) {
  message.innerHTML += `<p><span class="has-text-link has-text-weight-bold">Bot: </span>
  <span class="has-text-black-bis">${reply}</span></p>`;
}
function user(reply) {
  message.innerHTML += `<p><span class="has-text-link has-text-weight-bold">You: </span>
    <span class="has-text-black-bis">${reply}</span></p>`;
}
