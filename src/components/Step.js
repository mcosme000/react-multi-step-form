import React from "react";

const Step = (props) => {
  const {number, step, title} = props;

  return (
    <div className="flex items-center md:mb-3">
      <p className="text-sm mr-6 w-9 h-9 text-white font-bold rounded-full border-solid border-2 border-slate-400
      flex justify-center items-center">
        <span>{number}</span></p>
      <div className="d-none md:block">
        <p className="text-white text-sm">{step.toUpperCase()}</p>
        <p className="text-white font-bold">{title.toUpperCase()}</p>
      </div>
  </div>
  )
}

export default Step;
