// import * as fs from 'fs-web';

import axios from "axios";
// import { accessSync } from 'fs';

// export const fileNames = (dir) => {
//   const files = fs.readdir(dir)
//   console.log(files);
//   return fetch;
// };

export const fileList = () => {
  return axios.get("http://localhost:8080");
  // .then((response) => {
  //   // console.log(response.data);
  //   // response.data.forEach(element => {
  //   // data2.push(element);
  //   console.log(response);
  //   return response.data;

  //   // });
  //   // console.log(data2);

  //   // data = response.data;
  //   // return response.data;
  // })
  // .catch((err) => {
  //   console.log(err);
  // });

  // console.log(data2);
  // return data2;
};

// console.log(data);

// return data;
// const e = fetch("http://localhost:8080", {
//   "method": "GET"
// }
// )
// console.log(e);
// return e

// const { fs } = require('filer');
// export const fileNames = (dir) => {
//   fs.readdir(dir, function (err, files) {
//     if (err) throw err;

//     console.log(__dirname);
//     return files;
//   });

// };


export const filedata = (datapoint) => {
  return axios.get("http://localhost:8080/" + `${datapoint}`);
}