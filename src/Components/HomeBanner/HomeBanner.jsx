import React from "react";
import bannerImg from "../../assets/banner-task.png";
import { Link } from "react-router";

const HomeBanner = () => {
  return (
    <div className="hero min-h-[80vh] mt-2 w-11/12 mx-auto bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Image */}
        <img
          src={bannerImg}
          className="max-w-sm w-full rounded-lg shadow-2xl"
          alt="Task Banner"
        />

        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Organize Your Daily Tasks!
          </h1>
          <p className="py-6 text-base md:text-lg text-gray-500">
            Manage, update and complete your tasks easily. Start your productive
            journey with our Task Manager.
          </p>
          <Link to="/dashBoard">
            <button className="btn btn-primary">Go to Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
