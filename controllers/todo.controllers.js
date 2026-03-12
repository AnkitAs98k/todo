import Task from "../models/todo.models.js";

export const createTask = async (req, res) => {
  try {

    const { title, content, author } = req.body;

    if (!title) {
      return res.status(400).json({
        error: "Title is required"
      });
    }

    const newTask = await Task.create({
      title,
      content,
      author
    });

    res.status(201).json(newTask);

  } catch (error) {

    console.log(error);   // important for debugging

    res.status(500).json({
      error: "Task not created"
    });

  }
};


//finding the task from the db
export const findtask = async (req, res) => {

  try {
    const { title } = req.query;
    const task = await Task.find({ title });
    if (!title.length) {
      res.status(404).json({
        message: "user not found"
      })
    }

    res.status(200).json(task);



  } catch (error) {
    console.error(404, "Something went wrong");

  }
}


export const updatedTask = async (req, res) => {
  try {
    
      

      //find 
      const update = await Task.findOneAndUpdate(
        { title: req.params.title }, //this will filter
        req.body,           //this will update
        { new: true }               //this will deliver the new one
      );
    

     if (!update) {
      return res.status(404).json({
        message: "Task not found"
      });
    }
    res.status(200).json(update);
  } catch (error) {
    console.error(404, "Something went wrong");
  }
}
