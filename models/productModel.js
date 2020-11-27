let products = require('../data/products.json');
const { v4: uuidv4 } = require('uuid');
const { writeDataToFile } = require('../utils');

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}

function create(data) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...data };
    products.push(newProduct);
    writeDataToFile('./data/products.json', products);
    resolve(newProduct);
  });
}

function update(id, data) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { id, ...data };
    writeDataToFile('./data/products.json', products);
    resolve(products[index]);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    products = products.filter((p) => p.id !== id);
    writeDataToFile('./data/products.json', products);
    resolve();
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
