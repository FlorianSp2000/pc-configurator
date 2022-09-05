// import express
import express from "express";
  
// import function from controller
// import { showUsers, showUserById, createUser,  } from "../controllers/User.js";

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// init express router
const router = express.Router();
  
import db from '../config/database.js'
import { validateRegister } from '../middleware/users.js'
import { v4 as uuidv4 } from 'uuid';

// /api/sign-up
// Create New user
router.post('/sign-up', validateRegister, (req,res,next) => {
    db.query(`SELECT * FROM users WHERE LOWER(username) = LOWER(${db.escape(req.body.username)})`, (err, results) => {             
        if(results.length) { //error
            // console.log(err);
            return res.status(409).send({
                message: 'This username is already in use'
            })
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err){
                    return res.status(500).send({
                        message: err,
                    })
                } else {
                    db.query(`INSERT INTO users (id, username,password, registered) VALUES ('${uuidv4()}',${db.escape(req.body.username)}, '${hash}', NOW())`,
                    (err, results) => {
                        if(err) {
                            throw err;
                            return res.status(400).send({
                                message: err,
                            })
                        }
                        return res.status(201).send({
                            message: "Registered!",
                        })
                    }
                    )
                }
            })
        }
    });   
}
);

// /api/login
// Get All user
router.post('/login', (req,res,next) => {
    console.log("req.body", req.body)
    db.query(`SELECT * FROM users WHERE username = ${db.escape(req.body.username)}`,
    (err, result) => {
        console.log("result", result)
        if (err) {
            throw err;
            return res.status(400).send({
                message: err,
            })
        }
        if(!result.length) {
            return res.status(400).send({
                message: `Username or password incorrect -`
            })
        }
        bcrypt.compare(req.body.password, result[0]['password'], (bErr, bResult) => {
            console.log("bResult", bResult)
            if(bErr) {
                throw bErr;
                return res.status(400).send({
                    message: "Username or password incorrect"
                })
            }
            if(bResult) {
                const token = jwt.sign({
                    username: result[0].username,
                    userId: result[0].id
                },
                "SECRETKEY",
                {expiresIn: "7d"});
                db.query(`UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`)
                return res.status(200).send({
                    message: "Logged in!",
                    token,
                    user: result[0]
                })
            }
            return res.status(401).send({
                message:"Username or password incorrect!"
            })
        }
        )
    }
    )
});

// /api/secret-route

// Get Single user
// router.get('/users/:id', showUserById);

  
  
  
// // Update user
// router.put('/users/:id', updateuser);
  
// // Delete user
// router.delete('/users/:id', deleteuser);
  
// export default router
export default router;