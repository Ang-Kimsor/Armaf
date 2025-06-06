import { useState } from "react";
const Drop = ({ icon, header, title, des, top, mid, base }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="relative flex flex-col items-center w-full py-4 tracking-wider border-t cursor-pointer text-black/80 border-black/20 selection:bg-transparent"
    >
      <div className="flex items-center w-full gap-3">
        <i className={`bi bi-${icon}`}></i>
        <p>{header}</p>
        <i
          className={`${
            open ? "rotate-180" : "rotate-0"
          } absolute bi bi-chevron-down right-1`}
        ></i>
      </div>
      {open && (
        <div className="text-[10px] text-center text-black/50 w-[80%] my-2 gap-2 flex flex-col">
          {title && <p className="font-medium text-black">{title}</p>}
          {des && <p>{des}</p>}
          {top && mid && base && (
            <>
              <p className="font-medium text-black">Notes Details:</p>
              <p>Top Note: {top}</p>
              <p>Heart Note : {mid}</p>
              <p>Sandalwood: {base}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Drop;
