// Express server connection initialization

import express from "express";
import cors from "cors";
import users from "./routes/users.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", users); // the "users" collection

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});