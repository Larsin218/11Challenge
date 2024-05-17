const router = require("express").Router();
const fs = require("fs");
const util = require("util");
const { v4: uuid } = require("uuid");

const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile);

router.get("/notes", async (req, res) => {
  const data = await readFileSync("db/db.json", "utf8");
  return res.json(JSON.parse(data));
});

router.post("/notes", async (req, res) => {
  const { title, text } = req.body;
  const data = await readFileSync("db/db.json", "utf8");
  const notes = JSON.parse(data);
  const newNote = { id: uuid(), title, text };
  notes.push(newNote);
  await writeFileSync("db/db.json", JSON.stringify(notes, null, 2));
  return res.json(newNote);
});

module.exports = router;
