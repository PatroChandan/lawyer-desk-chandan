import React from "react";
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileAlt } from "react-icons/fa";

const FileIcon = ({ fileName }) => {
  const getIconAndColor = (fileName) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "pdf":
        return { icon: <FaFilePdf />, color: "text-red-500" };
      case "doc":
      case "docx":
        return { icon: <FaFileWord />, color: "text-blue-500" };
      case "xls":
      case "xlsx":
        return { icon: <FaFileExcel />, color: "text-green-500" };
      default:
        return { icon: <FaFileAlt />, color: "text-gray-500" };
    }
  };

  const { icon, color } = getIconAndColor(fileName);

  return (
    <div className="flex gap-2">
      <span className={`text-2xl ${color}`}>{icon}</span>
      <span>{fileName}</span>
    </div>
  );
};

export default FileIcon;
