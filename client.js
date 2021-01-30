const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const fs = require("fs");
const folder =
  "C:\\Users\\am660\\OneDrive\\Desktop\\pagetest\\SortJsonArray\\src\\Data";
// "D:\\Personal\\desktop\\work\\trial\\src\\Data";

const getFileNames = async (dir) => {
  return await fs.readdirSync(folder);
};

const getFileData = async (fileName) => {
  var fullPath = folder + `${fileName}` + ".js";
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
    // var dataFromfile = await getFileData(req.params.data);
    // console.log(dataFromfile);
    let stockData = JSON.parse(
      fs.readFileSync(folder + "\\" + req.params.data)
    );
    res.send(stockData.stockData);
  })();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
