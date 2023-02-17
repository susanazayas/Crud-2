const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
      index: (req, res) => {
            let productsVisited = products.filter((product) => {
                  return product.category === "visited";
            });
            let productsInSale = products.filter((product) => {
                  return product.category == "in-sale";
            });
            res.render("index", { productsVisited, productsInSale, toThousand });
      },
      search: (req, res) => {
            // Do the magic
      },
};

module.exports = controller;
