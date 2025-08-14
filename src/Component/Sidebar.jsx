import React from "react";
import Cat_items from "../assets/Categories.json";
import Categories from "./Categories";

const Sidebar = () => {
  return (
    <div className="w-[30%] bg-amber-100 px-4 h-[95vh]">
      <h2 className="text-[1.4rem]  text-black">All Categories</h2>
      <Categories cat={Cat_items} />
    </div>
  );
};

export default Sidebar;
