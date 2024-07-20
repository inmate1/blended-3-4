import { createFakeProduct } from "../utils/createFakeProduct.js";
import fs from "node:fs/promises";
import { PATH_TO_DB } from "../constans/path.js";

async function generateProducts(count) {
  try {
    const data = await fs.readFile(PATH_TO_DB, "utf-8");
    const parsedData = JSON.parse(data);
    for (let i = 1; i <= count; i++) {
      const product = createFakeProduct();
      parsedData.push(product);
    }
    fs.writeFile(PATH_TO_DB, JSON.stringify(parsedData, null, 2));
  } catch (error) {
    console.log(error);
  }
}

generateProducts(10);
