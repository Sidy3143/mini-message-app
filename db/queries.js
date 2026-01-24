const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(message) {
  await pool.query("INSERT INTO messages (user_name, text) VALUES ($1, $2)", [message.user, message.text]);
}

async function search(query){
  let username = query.username;

  const { rows } = await pool.query(`SELECT * FROM messages WHERE user_name LIKE $1`, [`%${username}%`]);
  return rows;
}

async function deleteMessageById(id) {

  await pool.query(`DELETE FROM messages WHERE id = $1`, [id]);
  console.log("Message deleted");
}

module.exports = {
  getAllMessages,
  insertMessage,
  search,
  deleteMessageById
};
