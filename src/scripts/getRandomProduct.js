import { PATH_TO_DB } from "../constans/path.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import fs from "node:fs/promises";

const getRandomProduct = async () => {
  try {
    const data = await fs.readFile(PATH_TO_DB, "utf-8");
    const products = JSON.parse(data);
    const index = getRandomNumber(0, products.length - 1);
    console.log({ index, products: products[index] });
  } catch (error) {
    console.log(error);
  }
};

getRandomProduct();
