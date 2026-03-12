import {createTask,
        findtask,
        updatedTask,
        deleteTask
    } from "../controllers/todo.controllers.js"



import express from "express"
const router = express.Router();

router.post("/tasks", createTask);
router.get("/find",findtask);
router.put("/task/:title",updatedTask)
router.delete("/task/:title",deleteTask)
export default router;