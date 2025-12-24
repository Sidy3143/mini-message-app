// app.js
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'));

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }

  console.log(`listening on port 3000!`);
});

const messages = [
  {
    text: "Hi Dummy!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get("/", (req, res) => 
    res.render('index', { title: "Mini Messageboard", messages: messages })
);

app.get("/new", (req, res) => 
    res.render('form')
);

app.use(express.urlencoded({ extended: true }));

app.post("/new", (req, res) => {
    messageText = req.body.message;
    messageUser = req.body.author;

    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
})
app.post("/delete", (req, res) => {
    const index = parseInt(req.body.index);
    if (index >= 0 && index < messages.length) {
        messages.splice(index, 1);
    }
    res.redirect("/");
});