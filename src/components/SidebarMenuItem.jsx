import React from "react";

const SidebarMenuItem = ({ text, Icon, active }) => {
  return (
    <div className="flex items-center space-x-3 hoverEffect text-gray-700 justify-center xl:justify-start ">
      <Icon size={30} className="" />
      <span className={`${active && "font-bold"} hidden xl:inline`}>
        {text}
      </span>
    </div>
  );
};

export default SidebarMenuItem;
