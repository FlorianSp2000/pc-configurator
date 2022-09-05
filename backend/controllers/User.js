// Import function from Product Model
import { getUsers, getUserById, } from "../models/userModel.js";
  
// Get All Products
export const showUsers = (req, res) => {
    getUsers((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Product 
export const showUserById = (req, res) => {
    getUserById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Product
// export const createUser = (req, res) => {
//     const data = req.body;
//     insertUser(data, (err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }
  
// // Update Product
// export const updateProduct = (req, res) => {
//     const data  = req.body;
//     const id    = req.params.id;
//     updateProductById(data, id, (err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }
  
// // Delete Product
// export const deleteProduct = (req, res) => {
//     const id = req.params.id;
//     deleteProductById(id, (err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }