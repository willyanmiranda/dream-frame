import React from "react";

const Header = (props) => {
  return (
    <div className="w-full h-[45px] max-w-[190px] border-2 border-gray-700 rounded-[12px] flex items-center">
      <span
        className={`flex items-center justify-center w-full h-full text-gray-700 text-[15px] ${
          !props.hasPhotos
            ? "text-white bg-[#242940]"
            : "bg-transparent"
        } max-w-[120px] rounded-[12px_5px_5px_12px]`}
      >
        Propriedades
      </span>
      <span
        className={`flex items-center justify-center w-full h-full text-gray-700 text-[15px] ${
          props.hasPhotos
            ? "text-white bg-[#242940]"
            : "bg-transparent"
        } max-w-[70px] rounded-[5px_12px_12px_5px]`}
      >
        Info
      </span>
    </div>
  );
};

export default Header;