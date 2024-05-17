const express = require("express");
const noteRoutes = require("./routes/noteRoutes");
const app = express();

const PORT = precess.exv.port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("./api/notes", noteRoutes);

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
