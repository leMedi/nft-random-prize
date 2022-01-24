import { useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai'

export const AccordionItem = ({ question, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="border-t-0 border-l-0 border-r-0 rounded-none border border-white">
      <button
        className="flex items-center w-full py-4 px-2 text-base text-left border-0 rounded-none focus:outline-none"
        type="button"
        onClick={() => setOpen(!isOpen)}
      >
        <AiOutlinePlus className="mr-2" />
        {question}
      </button>
      {isOpen && <div className="border-0 collapse show">
        <div className="py-4 px-5">
          {children}
        </div>
      </div>}
    </div>
  );
};
