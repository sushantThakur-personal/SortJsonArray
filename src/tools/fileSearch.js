import { readSync, ABSOLUTE_PATHS, CASELESS_SORT } from "readdir";
export const fileName = (folder) => {
  const options = ABSOLUTE_PATHS + CASELESS_SORT;
  var files = readSync(folder, options);
  return files;
};
