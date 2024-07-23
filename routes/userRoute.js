import express from "express";
const route = express.Router();
import {
  fetch,
  create,
  findUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

route.get("/", fetch);
route.post("/", create);
route.get("/:name", findUser);
route.put("/:id", updateUser);
route.delete("/:id", deleteUser);

export default route;
