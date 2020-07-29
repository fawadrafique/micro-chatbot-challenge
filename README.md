# 💬 Micro chatbot challenge

- Repository name: `micro-chatbot-challenge`
- Type of Challenge: `learning`
- Written in : `HTML, CSS and JS`
- Build: `90% completed`

> Create a _micro_ chatbot

---

Sending a message to the bot is done by clicking the _send_ button **or** typing `ENTER`.

> **Bonus/hardmode challenge:** support _multi-line_ messages: by typing `SHIFT+ENTER`, you create a new line in the textarea.

On loading of the page, the bot welcomes the user with a random greeting message
(bot needs _at least_ **three different** welcoming message), then, he ask the user _"how do you feel today?"_.

> **Bonus challenge:** add "in progress" animation and timeout to simulate "bot thinking"

The user can reply freely, and the bot need to check in the response if he can find a "yes" or a "no":

- if the script find a "yes" in the message, the bot answers with a random sentence from a specific set (minimum **three different**)
- if the script find a "no" in the message, the bot answers with a random sentence from a specific set (minimum **three different**)
- if the script cannot find a "yes" or a "no" in the message, the bot answer something like "I didn't understand, can you please try again"
- if the script cannot find a "yes" or a "no" in the message after three attempts, the bot begins to be mad and use "passive-agressive" answer, like "dude, are you sure you can read?"

After this answer, the bot has finish his routine. He says "bye" to the user and the textarea go to `disabled` mode.

---

That's all.
