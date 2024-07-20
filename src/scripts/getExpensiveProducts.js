import { PATH_TO_DB } from "../constans/path.js";
import fs from "node:fs/promises";

async function getExpensiveProducts() {
  try {
    const limit = 700;
    const products = await fs.readFile(PATH_TO_DB, "utf-8");
    const data = JSON.parse(products);
    const filteredProducts = data.filter((product) => product.price >= limit);
    console.log(filteredProducts);
  } catch (error) {
    console.log(error);
  }
}

getExpensiveProducts();
