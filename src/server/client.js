const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const fs = require("fs");

const getFileNames = async (dir) => {
  return await fs.readdirSync("D:\\Downloads");
};

app.get("/", cors(), (req, res) => {
  (async (dir) => {
    var fileList = await getFileNames(dir);
    res.send(fileList);
  })();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
