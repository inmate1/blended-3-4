import { PATH_TO_DB } from "../constans/path.js";
import fs from "node:fs/promises";

async function getTotalPrice() {
  try {
    const products = await fs.readFile(PATH_TO_DB, "utf-8");
    const parsedData = JSON.parse(products);
    const total = parsedData.reduce((acc, product) => {
      return acc + Number(product.price);
    }, 0);
    console.log(total);
  } catch (error) {
    console.log(error);
  }
}

getTotalPrice();
