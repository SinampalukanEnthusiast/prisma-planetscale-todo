"use client";

import React, { useEffect, useRef, useState } from "react";

const InputBox = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskFocused, setTaskFocused] = useState("");
  const [tasksDone, setTasksDone] = useState([]);

  const addTask = (e) => {
    if (task === "") {
      return;
    }

    if (e === "click") {
      setTasks([...tasks, task]);
      setTask("");
    } else if (e.key === "Enter") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const editTask = (value, index) => {
    // console.log("index ", index);
    const newTasks = tasks.map((item, itemIndex) => {
      if (itemIndex === index) {
        return value;
      }
      return item;
    });

    setTasks(newTasks);
  };

  const taskDoneHandler = (taskDone) => {
    let newTasks = [...tasksDone];
    if (newTasks.includes(taskDone)) {
      newTasks.splice(newTasks.indexOf(taskDone), 1);
      // console.log("new tasks", newTasks);
      console.log("removed: ", taskDone);
      setTasksDone(newTasks);
    } else {
      setTasksDone([...tasksDone, taskDone]);
    }

    console.log("tasks done");
    tasksDone.forEach((item) => console.log(item));
    console.log("````````");
  };

  // Rename to Task Interactions
  const taskOptions = (e, value, index) => {
    console.log("save task", index);
    console.log("value", value);
    let newTasks = [];
    if (e.key === "Enter") {
      console.log("enter pressed");
    }
    if (value === "") {
      if (e === "empty") {
        newTasks = tasks.filter((task) => {
          if (task !== tasks[index]) {
            return task;
          }
          console.log("task ", task, " tasksindex: ", index);
        });
        setTasks(newTasks);
      } else if (e.key === "Enter") {
        newTasks = tasks.filter((task) => {
          if (task !== tasks[index]) {
            return task;
          }
          console.log("task ", task, " tasksindex: ", index);
        });
        setTasks(newTasks);
      }
    }

    if (e === "delete") {
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
      <div className="flex gap-2 justify-between">
        <input
          type="text"
          className="border rounded-md px-2 w-full"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => addTask(e)}
        />
        <button
          className="bg-blue-600 rounded-md w-fit p-2 text-white"
          onClick={() => addTask("click")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-5 text-blue-500">
        {tasks.map((task, index) => (
          <div className="inline-flex gap-2" key={index}>
            <input
              type="text"
              className={`rounded-md px-2 ${
                index === taskFocused ? "  outline-none border-l-4 " : ""
              }  ${tasksDone.includes(index) ? "line-through" : ""}`}
              value={task}
              onChange={(e) => editTask(e.target.value, index)}
              onFocus={() => setTaskFocused(index)}
              onBlur={(e) => {
                setTaskFocused("");
                taskOptions("empty", task, index);
              }}
              onKeyDown={(e) => taskOptions(e, task, index)}
            />
            {/* 
            Gray Edit
            <button
              className="bg-gray-600 rounded-md w-fit p-2  text-white"
              onClick={() => taskOptions("click", task, index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </button> */}
            {/* Task Done Button */}
            <button
              className="bg-green-600 rounded-md w-fit p-2  text-white"
              onClick={() => taskDoneHandler(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </button>
            {/* Delete Button */}
            <button
              className="bg-red-600 rounded-md w-fit p-2  text-white"
              onClick={() => taskOptions("delete", task, index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputBox;
