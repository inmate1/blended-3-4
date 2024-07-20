import fs from "node:fs/promises";
import { PATH_PRODUCTS } from "../constans/path.js";

const getFiles = async () => {
  try {
    const files = await fs.readdir(PATH_PRODUCTS);
    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    console.log(error);
  }
};

getFiles();
