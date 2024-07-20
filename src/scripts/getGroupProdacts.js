import fs from "node:fs/promises";
import { PATH_TO_DB } from "../constans/path.js";

const getGroupProdacts = async () => {
  try {
    const data = await fs.readFile(PATH_TO_DB, "utf-8");
    const products = JSON.parse(data);

    const groupProdactsCategory = products.reduce((acc, prodct) => {
      return {
        ...acc,
        [prodct.category]: [],
      };
    }, {});

    console.log(groupProdactsCategory);
  } catch (error) {
    console.log(error);
  }
};

getGroupProdacts();
