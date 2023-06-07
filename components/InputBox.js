"use client";

import React, { useState } from "react";

const InputBox = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [specificTask, setSpecificTask] = useState("");
  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const editTask = (value, index) => {
    // console.log("index ", index);
    const newTasks = tasks.map((item) => {
      if (item === tasks[index]) {
        return value;
      }
      return item;
    });
    setTasks(newTasks);
  };

  const saveTask = (value, index) => {
    console.log("save task", index);
    console.log("value", value);
    let newTasks = [];
    if (value === "") {
      newTasks = tasks.filter((task) => {
        if (task !== tasks[index]) {
          return task;
        }
        console.log("task ", task, " tasksindex: ", index);
      });
      setTasks(newTasks);
    }
    console.log("newtasks", newTasks);
    console.log("tasks", tasks);
    return;
  };

  return (
    <div className="flex flex-col h-screen gap-10">
      <div className="inline-flex gap-2">
        <input
          type="text"
          className="border rounded-md px-2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-green-600 rounded-md w-fit py-2 px-4 text-white"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col gap-5 text-blue-500">
        {tasks.map((task, index) => (
          <div className="inline-flex gap-2" key={index}>
            <input
              type="text"
              className="border rounded-md px-2 outline-none border-l-4 "
              value={task}
              onChange={(e) => editTask(e.target.value, index)}
            />
            <button
              className="bg-gray-600 rounded-md w-fit py-2 px-4 text-white"
              onClick={() => saveTask(task, index)}
            >
              Save
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputBox;
