const express = require("express");
const path = require("path");
const app = express();
const port = "3000";
const fs = require("fs");
const bodyParser = require("body-parser");

const util = require("util");
const writeFile = util.promisify(fs.writeFile);

const value = `Текст`;

app.use(bodyParser.json());

app.post("/", async (req, res) => {
  const result = await writeFile(
    path.join(__dirname, "/static/helloworld.txt"),
    JSON.stringify(req.body, null, 2),
    {
      encoding: "utf-8"
    }
  );
  res.download(path.resolve(__dirname, `static`,`helloworld.txt`));
});

app.get("/static", async (req, res) => {
    res.download(path.resolve(__dirname, `static`,`helloworld.txt`));
});

app.use(express.static("./public/"));
app.use(express.static("./static/"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

