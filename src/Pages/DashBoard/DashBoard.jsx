import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { data, Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const DashBoard = () => {
  //   const taskData = useLoaderData();
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  //   console.log(tasks);
  console.log(search);

  useEffect(() => {
    fetch(
      `https://task-management-server-pearl-two.vercel.app/tasks?searchParams=${search}`
    )
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [search]);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://task-management-server-pearl-two.vercel.app/tasks/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              const filtering = tasks.filter((task) => task._id !== id);
              setTasks(filtering);
              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className=" w-11/12 mx-auto mt-10">
      <h2 className=" text-4xl text-center font-semibold my-7">
        Task Dashboard
      </h2>
      <div className=" flex items-center justify-center mb-8">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            className="grow"
            placeholder="Search"
          />
        </label>
      </div>
      {/* for desktop view table */}
      <div className="overflow-x-auto hidden md:block rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tasks.map((task, index) => (
              <tr key={task._id}>
                <th>{index + 1}</th>
                <td>{task.title}</td>
                <td className=" max-w-[400px]">{task.description}</td>
                <td>{task.deadline}</td>
                <td>{task.priority}</td>
                <td className=" flex items-center gap-2">
                  <Link
                    to={`/viewTasks/${task._id}`}
                    className="btn btn-sm btn-outline btn-info"
                  >
                    <FaEye />
                  </Link>
                  <Link
                    to={`/editTask/${task._id}`}
                    className="btn btn-sm btn-outline btn-info"
                  >
                    <FaEdit></FaEdit>
                  </Link>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn btn-sm btn-outline btn-info"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* for mobile view card grid */}
      <div>
        <div className="block md:hidden space-y-4">
          {tasks.map((task, index) => (
            <div
              key={task._id}
              className="bg-base-200 rounded-lg p-4 shadow-md"
            >
              <h3 className="font-bold text-lg mb-1">
                {index + 1}. {task.title}
              </h3>
              <p className="text-sm mb-1">
                <strong>Description:</strong> {task.description}
              </p>
              <p className="text-sm mb-1">
                <strong>Deadline:</strong> {task.deadline}
              </p>
              <p className="text-sm mb-2">
                <strong>Priority:</strong>{" "}
                <span className="badge badge-accent">{task.priority}</span>
              </p>
              <div className="flex gap-2 justify-end">
                <Link
                  to={`/viewTasks/${task._id}`}
                  className="btn btn-sm btn-outline btn-info"
                >
                  <FaEye />
                </Link>
                <Link
                  to={`/editTask/${task._id}`}
                  className="btn btn-sm btn-outline btn-info"
                >
                  <FaEdit></FaEdit>
                </Link>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="btn btn-sm btn-outline btn-info"
                >
                  <FaTrash></FaTrash>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
