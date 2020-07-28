const inputValue = document.getElementById("input");
const message = document.getElementById("message");
const enter = document.getElementById("enter");
let attempts = 0;
const reply = [
  //0
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  //1
  [
    "Nothing much",
    "Exciting things!",
    "Glad to hear it",
    "Fantastic",
    "Pretty well",
    "Same",
    "You're welcome",
  ],
  //2
  [
    "Why?",
    "Cheer up buddy",
    "What about?",
    "Once upon a time...",
    "No problem",
    "I'm listening...",
    "Go on...",
  ],
  //3
  [
    "Kiddo, don't waste my time.",
    "Pal, you understand English?",
    "See you later, moron!",
    "Dude, are you sure you can read?",
  ],
  //4
  ["Goodbye", "Bye!"],
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
  let input = inputValue.value;
  inputValue.value = "";
  output(input);
};
function output(input) {
  attempts++;
  const regex = /[^\w\s\d]/gi;
  let text = input.toLowerCase().replace(regex, "");
  user(input);
  if (text.includes("yes")) {
    console.log("contains YES");
    let messagesYes = reply[1];
    let replyYes = messagesYes[Math.floor(Math.random() * messagesYes.length)];
    bot(replyYes);
  } else if (text.includes("no")) {
    console.log("contains NO");
    let messagesNo = reply[2];
    let replyNo = messagesNo[Math.floor(Math.random() * messagesNo.length)];
    bot(replyNo);
  } else if (attempts > 3) {
    let messagesMad = reply[3];
    let replyMad = messagesMad[Math.floor(Math.random() * messagesMad.length)];
    bot(replyMad);
    bot("Bye!");
    inputValue.disabled = true;
  } else {
    bot("I didn't understand, can you please try again.");
  }
}

function bot(reply) {
  message.innerHTML += `<p><span class="has-text-link has-text-weight-bold">Bot: </span>
  <span class="has-text-black-bis">${reply}</span></p>`;
}
function user(reply) {
  message.innerHTML += `<p><span class="has-text-link has-text-weight-bold">You: </span>
    <span class="has-text-black-bis">${reply}</span></p>`;
}
