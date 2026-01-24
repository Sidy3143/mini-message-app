const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log("Messages: ", messages);

  res.render('index', { messages: messages });
}

async function createMessageGet(req, res) {
  res.render('form');
}

async function createMessagePost(req, res) {
  const { user, text } = req.body;
  await db.insertMessage({ user, text });

  res.redirect("/");
}

async function searchMessage(req, res) {
  const messages = await db.search(req.query) ;

  res.render('index', { messages });
}

async function deleteUserMessage(req, res) {
  const { id } = req.body;

  await db.deleteMessageById(id) ;

  res.redirect("/");
}

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
  searchMessage,
  deleteUserMessage
};