"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchUserByName = exports.searchProductsByName = exports.getAllProducts = exports.getAllUsers = exports.createProduct = exports.createUser = exports.product = exports.user = void 0;
exports.user = [
    {
        id: "u001",
        name: "Samuel",
        email: "samuel@gmail.com",
        password: "samuel123",
        createdAt: new Date().toISOString()
    }, {
        id: "u002",
        name: "Ruan",
        email: "ruan@gmail.com",
        password: "ruan123",
        createdAt: new Date().toISOString()
    }
];
exports.product = [
    {
        id: "prod001",
        name: "Mouse gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        imageURL: "https://picsum.photos/seed/Mouse%20gamer/400",
    }, {
        id: "prod002",
        name: "Monitor",
        price: 900,
        description: "Monitor LED Full HD 24 polegadas",
        imageURL: "https://picsum.photos/seed/Monitor/400",
    },
];
const createUser = (id, name, email, password) => {
    const createdAt = new Date().toISOString();
    const newUser = { id, name, email, password, createdAt };
    exports.user.push(newUser);
    return "Cadastro realizado com sucesso";
};
exports.createUser = createUser;
const createProduct = (id, name, price, description, imageURL) => {
    const newProduct = { id, name, price, description, imageURL };
    exports.product.push(newProduct);
};
exports.createProduct = createProduct;
const getAllUsers = () => {
    return exports.user;
};
exports.getAllUsers = getAllUsers;
const getAllProducts = () => {
    return exports.product;
};
exports.getAllProducts = getAllProducts;
const searchProductsByName = (name) => {
    const searchProduct = name.toLowerCase();
    return exports.product.filter(product => product.name.toLowerCase().includes(searchProduct));
};
exports.searchProductsByName = searchProductsByName;
const searchUserByName = (name) => {
    const searchUser = name.toLowerCase();
    return exports.user.filter(user => user.name.toLowerCase().includes(searchUser));
};
exports.searchUserByName = searchUserByName;
