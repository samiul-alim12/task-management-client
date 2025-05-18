import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const ViewTask = () => {
  const task = useLoaderData();

  return (
    <div>
      <div
        key={task._id}
        className="bg-base-200 my-20 w-11/12 mx-auto p-8 rounded-lg  shadow-md"
      >
        <p className="text-md py-2">
          <strong className="text-lg">Title:</strong> {task.title}
        </p>
        <p className="text-md py-2">
          <strong className="text-lg">Description:</strong> {task.description}
        </p>
        <p className="text-md py-2">
          <strong className=" text-lg">Deadline:</strong> {task.deadline}
        </p>
        <p className="text-md py-2">
          <strong className="text-lg">Priority:</strong>{" "}
          <span className="badge badge-accent">{task.priority}</span>
        </p>
        <div className="flex gap-2 justify-end">
          <Link className="btn btn-sm btn-outline btn-info">
            <FaEdit></FaEdit>
          </Link>
          <button className="btn btn-sm btn-outline btn-info">
            <FaTrash></FaTrash>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
