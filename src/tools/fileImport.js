// import { fileName } from "../Data/data - Copy";
const fileName = "../Data/data - Copy";
export default import(fileName)
  .then((res) => res.stockData)
  .catch((err) => "File Not Found");
