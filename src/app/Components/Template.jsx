import React, { useState } from 'react';
import DragAndDrop from './DragAndDrop';

function Template(props) {
    const { onClose, option } = props;
  const [showDragAndDrop , setDragAndDrop] = useState(true);
  const handleClick = () => {
    onClose();
  }
  return (
    <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 ">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{props.option}</h3>
        <svg
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 15 15"
          className="cursor-pointer"
         
        >
          <path
            fill="black"
            fillRule="evenodd"
            d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <hr className="mb-4" />
      {showDragAndDrop && <DragAndDrop/>}
    </div>
  );
}

export default Template;
