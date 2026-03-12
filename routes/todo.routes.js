import {createTask,
        findtask,
        updatedTask
    } from "../controllers/todo.controllers.js"

import express from "express"
const router = express.Router();

router.post("/tasks", createTask);
router.get("/find",findtask);
router.put("/task/:title",updatedTask)
export default router;