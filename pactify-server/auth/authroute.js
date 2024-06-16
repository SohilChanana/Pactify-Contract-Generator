// Router for users schema
import express from "express";

// auth functions from auth.js
import { register, login, deleteUser, userAuth } from "./auth.js";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /users.
const router = express.Router();

// set /api/auth/register to register func in auth.js
router.route("/register").post(register);

// set /api/auth/login to login func in auth.js
router.route("/login").post(login);

// set /api/auth/deleteUser to deleteUser func in auth.js
router.route("/deleteUser").delete(deleteUser);

router.route("/authenticate", userAuth, (req, res) => {});

export default router;