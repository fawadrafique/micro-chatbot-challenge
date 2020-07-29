const inputValue = document.getElementById("input");
const message = document.getElementById("message");
const loading = document.getElementById("inprogress");
const enter = document.getElementById("enter");
let attempts = 0;
const reply = [
  //Response 1
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  //Response 2
  ["How do you feel today?", "How you doing today?", "How's everything?"],
  //Response 3
  [
    "Nothing much",
    "Exciting things!",
    "Glad to hear it",
    "Fantastic",
    "Pretty well",
    "Same",
    "You're welcome",
  ],
  //Response 4
  [
    "Why?",
    "Cheer up buddy",
    "What about?",
    "Once upon a time...",
    "No problem",
    "I'm listening...",
    "Go on...",
  ],
  //Response 5
  [
    "Kiddo, don't waste my time.",
    "Pal, you understand English?",
    "See you later, moron!",
    "Dude, are you sure you can read?",
  ],
  //Response 6
  ["Goodbye", "Bye!"],
];
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    enter.onclick = () => callback();
    document.getElementById("input").addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        callback();
      }
    });
    response(0);
    response(1);
  }
};
const callback = function () {
  let input = inputValue.value;
  inputValue.value = "";
  output(input);
};
function output(input) {
  attempts++;
  const regex = /[^\w\s\d]/gi;
  let text = input.toLowerCase().replace(regex, "");
  user(input);
  inputValue.placeholder = "in progress...";
  loading.classList.add("is-loading");
  setTimeout(() => {
    inputValue.placeholder = "Type something...";
    loading.classList.remove("is-loading");
    if (text.includes("yes")) {
      attempts--;
      response(2);
    } else if (text.includes("no")) {
      attempts--;
      response(3);
    } else if (attempts > 3) {
      response(4);
      response(5);
      inputValue.disabled = true;
    } else {
      bot("I didn't understand, can you please try again.");
    }
  }, 2000);
}
function response(n) {
  let responses = reply[n];
  let response = responses[Math.floor(Math.random() * responses.length)];
  bot(response);
}

function bot(reply) {
  message.innerHTML += `<p><span class="has-text-link has-text-weight-bold">Bot: </span>
  <span class="has-text-black-bis">${reply}</span></p>`;
}
function user(reply) {
  message.innerHTML += `<p><span class="has-text-link has-text-weight-bold">You: </span>
    <span class="has-text-black-bis">${reply}</span></p>`;
}
