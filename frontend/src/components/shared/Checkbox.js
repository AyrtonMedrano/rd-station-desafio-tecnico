import React from 'react';

function Checkbox({ children, ...props }) {
  return (
    <label className=" flex items-center cursor-pointer">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 cursor-pointer" {...props} />
      <span className="ml-2 font-serif ">{children}</span>
    </label>
  );
}

export default Checkbox;
