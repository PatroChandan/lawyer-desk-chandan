import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GrGroup } from "react-icons/gr";
import { VscHome } from "react-icons/vsc";
import { BsChatRightText } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const navigation = [
  {
    name: "News feed",
    icon: <IoNewspaperOutline />,
    href: "#",
    current: "/newsFeed",
  },
  {
    name: "Find loyers",
    icon: <GrGroup />,
    href: "#",
    current: "/findLowers",
  },
  { name: "Home", icon: <VscHome />, href: "#", current: "/" },
  {
    name: "Connections",
    icon: <FaPeopleArrows />,
    href: "#",
    current: "/connections",
  },
  { name: "Chats", icon: <BsChatRightText />, href: "#", current: "/charts" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="w-full bg-gray-100 flex items-center justify-around py-2 px-5">
      <div className="">
        <Link>
          <img
            className="h-8 w-auto"
            src="https://advocase.ai/assets/images/brand_round/advocase_full.png"
            alt="Your Company"
            height={50}
            width={150}
          />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.current}
              className={classNames(
                currentPath === item.current
                  ? "bg-custom-gradient text-white"
                  : "text-gray-800",
                "flex item-center rounded-full px-3 py-2 text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <span className="text-xl px-1">{item.icon}</span>
              <span className="px-1">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex text-2xl text-gray-800 cursor-pointer items-center justify-center gap-4">
        <IoSettingsOutline />
        <IoIosNotificationsOutline />
        <div className="relative rounded-full  h-10 w-10 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1715512518630-18b8f4aea693?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            height={10}
            width={10}
            className="object-fill h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
