const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const fs = require("fs");

const getFileNames = async (dir) => {
  return await fs.readdirSync("C:\\Users\\am660\\OneDrive\\Desktop\\pagetest\\SortJsonArray\\src\\Data");
};

const getFileData = async (fileName) => {
  var fullPath = "C:\\Users\\am660\\OneDrive\\Desktop\\pagetest\\SortJsonArray\\src\\Data\\" + `${fileName}` + ".js";
  var fileData = fs.readFileSync(fullPath);
  // console.log(fileData);
  return fileData.toString();
};

app.get("/", cors(), (req, res) => {
  (async (dir) => {
    var fileList = await getFileNames(dir);
    res.send(fileList);
  })();
});

app.get("/:data", cors(), (req, res) => {
  (async () => {
    var dataFromfile = await getFileData(req.params.data);
    // console.log(dataFromfile);
    res.send(dataFromfile);
  })();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
