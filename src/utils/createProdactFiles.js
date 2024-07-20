import fs from "node:fs/promises";
import { PATH_PRODUCTS, PATH_TO_DB } from "../constans/path.js";
import path from "node:path";

const createProdactFiles = async () => {
  try {
    const data = await fs.readFile(PATH_TO_DB, "utf-8");
    const prodcts = JSON.parse(data);

    prodcts.forEach((prodct, index) => {
      const pathFile = path.join(PATH_PRODUCTS, `${index + 1}.json`);

      fs.writeFile(pathFile, JSON.stringify(prodct, null, 2));
    });
  } catch (error) {
    console.log(error);
  }
};

createProdactFiles();
