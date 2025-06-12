import { Trash2 } from "lucide-react";
import { useState } from "react";

function LinksTile({ item, deleteLink }) {
  const [isCopied, setCopied] = useState(false);
  function handleCopy(valueTocpy) {
    setCopied(true);
    navigator.clipboard.writeText(valueTocpy);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <div className=" w-full bg-white rounded-sm flex flex-col gap-4 p-4 md:flex-row md:items-center">
      <div className="w-full  relative overflow-hidden flex justify-between gap-2 ">
        <p className="text-lg text-black font-shortly font-normal text-left text-ellipsis text-nowrap truncate w-full">
          {item.oldlink}
        </p>
        <button onClick={() => deleteLink(item.id)}>
          <Trash2 color="gray" className="hover:stroke-red-400 " />
        </button>
      </div>
      <hr className="md:hidden block  border-gray-300" />
      <div className="w-full">
        <p className="text-lg text-prime-light font-shortly font-normal text-left md:text-right text-ellipsis">
          {item.shortenLink}
        </p>
      </div>
      <div className="w-full md:w-fit">
        {" "}
        <button
          onClick={() => handleCopy(item.shortenLink)}
          disabled={isCopied}
          className={`frm-btn w-full  ${isCopied && "bg-prime-dark!"}`}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default LinksTile;
