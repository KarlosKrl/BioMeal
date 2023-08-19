"use client";

import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TodosPage() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [savedTask, setSavedTask] = useState(null);

  useEffect(() => {
    getTasks();
  }, []);

  function getTasks() {
    axios.get("/api/todos").then((res) => setTasks(res.data));

    console.log(tasks);
  }

  async function completeTask(task) {
    const data = { id: task.id, isCompleted: task.isCompleted };
    await axios.put("/api/todos", data);
    getTasks();
  }
  async function deleteTask(id) {
    await axios.delete("api/todos?id=" + id);
    getTasks();
  }

  async function showValue() {
    if (!savedTask) {
      const data = { value };
      await axios.post("/api/todos", data);
    } else {
      const data = {
        id: savedTask.id,
        taskName: value,
        isCompleted: savedTask.isCompleted,
      };
      await axios.put("/api/todos", data);
      setSavedTask(null);
    }
    setValue("");
    getTasks();
  }

  async function editTask(task) {
    setSavedTask(task);
    setValue(task.taskName);
    getTasks();
  }

  return (
    <div className="bg-[#111] h-screen w-full flex flex-col justify-center items-center">
      <label className="text-white font-semibold pb-3">Task</label>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="task"
          className="px-2 py-1 rounded-md"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
        />
        <button
          onClick={showValue}
          className="bg-blue-500 text-white px-4 py-1 rounded-md font-semibold"
        >
          {savedTask ? "Edit" : "Add"}
        </button>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center py-3">
        {tasks.map((task) => (
          <div className="bg-white text-black px-4 py-2 flex gap-3 w-[550px] justify-between font-semibold rounded-md">
            <div
              onClick={() => completeTask(task)}
              className={`${
                task.isCompleted ? "line-through" : ""
              }  hover:bg-gray-400 w-full h-full py-1 px-3 rounded-md`}
            >
              {task.taskName}
            </div>
            <div className="flex gap-3">
              <button onClick={() => editTask(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
