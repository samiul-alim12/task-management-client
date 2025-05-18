import React from "react";

const AddTask = () => {
  return (
    <div>
      {" "}
      <div className="max-w-xl mx-auto mt-10 p-6 bg-base-200 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Add New Task
        </h2>

        <form className="space-y-4">
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
