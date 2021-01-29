import axios from "axios";

export const fileList = () => axios.get("http://localhost:8080");

export const filedata = (datapoint) =>
  axios.get("http://localhost:8080/" + `${datapoint}`);
