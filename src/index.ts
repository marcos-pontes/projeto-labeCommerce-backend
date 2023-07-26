
import express from "express";
import cors from "cors";
import { getAllUsers } from "./EndPoints/Users/GetAllUsers";
import { createUser } from "./EndPoints/Users/CreateUsers";
import { createProduct } from "./EndPoints/Products/CreateProduct";
import { getAllProducts } from "./EndPoints/Products/GetAllProduct";
import { editProduct } from "./EndPoints/Products/EditProduct";
import { deleteProduct } from "./EndPoints/Products/DeleteProduct";
import { getPurchases } from "./EndPoints/Purchases/GetPurchasesById";
import { deletePurchases } from "./EndPoints/Purchases/DeletePurchaseById";
import { CreatePurchase } from "./EndPoints/Purchases/CreatePurchase";
import { deleteUser } from "./EndPoints/Users/DeleteUser";
import { editUser } from "./EndPoints/Users/EditUser";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Service listening on gate 3003");
});

app.post('/users', createUser);

app.get('/users', getAllUsers);

app.delete('/users/:id', deleteUser)

app.put('/users/:id', editUser);



app.post('/products', createProduct);

app.get('/products', getAllProducts);

app.delete('/products/:id', deleteProduct);

app.put('/products/:id', editProduct); 



app.post('/purchases',CreatePurchase)

app.get('/purchases/:id',getPurchases) 
 
app.delete('/purchases/:id',deletePurchases)

