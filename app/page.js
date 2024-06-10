"use client" // Indicate that this code runs on the client side since Next.js defaults to server-side rendering.
import { Exo } from "next/font/google";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState(""); // Use useState to create state variables for title and description.
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]); // Container to store tasks.

  const submitHandler = (e) => {
    // Prevent form from auto-submitting.
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]); // Add title and description to the task array.
    settitle(""); // Clear the input fields after adding the task.
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    // Function to delete a task.
    let copytask = [...mainTask];
    copytask.splice(i, 1); // Remove the task at index i.
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>; // Default message when no tasks are available.

  if (mainTask.length > 0) {
    // Map through tasks and render them.
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center mb-7">
          <div className="flex justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i); // Delete task on button click.
            }}
            className="bg-red-800 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">Prajwal's Todo List</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border-zinc-800 border-4 text-2xl m-5 px-5 py-2"
          placeholder="Enter Task Title Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="border-zinc-800 border-4 text-2xl m-5 px-5 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black rounded text-white text-2xl font-bold h-12 w-40 ml-16 mt-0 px-2 py-2">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
