import { useEffect, useState } from "react";
import ShortenForm from "../MyComponents/shorten-form";
import LinksTile from "../MyComponents/links-tile";

function ShortenLink() {
  const [userLinks, setUserLinks] = useState([]);
  function updateLinks() {
    setUserLinks(JSON.parse(localStorage.getItem("saved links")) || []);
  }
  function deleteLink(linkToDlt) {
    const updatedList = userLinks.filter((link) => link.id !== linkToDlt);
    setUserLinks(updatedList);
    localStorage.setItem("saved links", JSON.stringify(updatedList));
  }

  useEffect(() => {
    updateLinks();
  }, []);

  return (
    <section id="#getstarted" className=" w-full mt-12 ">
      <div className="flex flex-col justify-center items-center w-full bg-gradient-to-b from-white from-50% to-main-bg to-50%  gpad">
        <ShortenForm setUserLinks={setUserLinks} userLinks={userLinks} />
      </div>
      <div className="bg-main-bg gpad pt-8 flex flex-col gap-4">
        {userLinks.map((item) => (
          <LinksTile item={item} deleteLink={deleteLink} />
        ))}
      </div>
    </section>
  );
}

export default ShortenLink;
