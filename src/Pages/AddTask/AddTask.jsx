import React from "react";
import Swal from "sweetalert2";

const AddTask = () => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const deadline = e.target.deadline.value;
    const priority = e.target.priority.value;
    const taskData = {
      title,
      description,
      deadline,
      priority,
    };
    // console.log(taskData);
    fetch("https://task-management-server-pearl-two.vercel.app/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Task Added Successfully done",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className=" w-11/12 mx-auto">
      {" "}
      <div className="max-w-xl mx-auto mt-10 p-6 bg-base-200 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Add New Task
        </h2>

        <form onSubmit={handleAddTask} className="space-y-4">
          {/* Title */}
          <div>
            <label className="label">
              <span className="label-text">Task Title</span>
            </label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              rows="4"
              placeholder="Write task details (optional)"
            ></textarea>
          </div>

          {/* Deadline */}
          <div>
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Priority */}
          <div>
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select name="priority" className="select select-bordered w-full">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Submit */}
          <div className="text-center mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
