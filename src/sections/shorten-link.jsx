import { useEffect, useState } from "react";
import ShortenForm from "../MyComponents/shorten-form";

function ShortenLink() {
  const [userLinks, setUserLinks] = useState([]);
  function updateLinks() {
    setUserLinks(JSON.parse(localStorage.getItem("saved links")) || []);
  }
  
  useEffect(() => {
    updateLinks();
  }, []);

  console.log(userLinks);
  return (
    <section className=" w-full mt-12 ">
      <div className="flex flex-col justify-center items-center w-full bg-gradient-to-b from-white from-50% to-main-bg to-50%  gpad">
        <ShortenForm
          setUserLinks={setUserLinks}
          userLinks={userLinks}
          
        />
      </div>
      <div className="bg-main-bg h-[500px]">

      </div>
    </section>
  );
}

export default ShortenLink;
