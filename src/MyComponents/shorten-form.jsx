import { useEffect } from "react";
import { useForm } from "react-hook-form";

function ShortenForm({ setUserLinks, userLinks }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ url: data?.link }).toString(),
        }
      );
      const results = await response.json();
      //handle the respnse err
      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText || "something went wrong");
      }
      // if response is ok
      const newLink = {
        id: crypto.randomUUID(),
        oldlink: data.link,
        shortenLink: results.result_url,
      };
      const updatedLinks = [...userLinks, newLink];
      setUserLinks(updatedLinks);
      localStorage.setItem("saved links", JSON.stringify(updatedLinks));
      reset();
    } catch (error) {
      setError("link", { type: "manual", message: error.message });
    }
  }

  return (
    <div className="w-full bg-prime-dark relative isolate lg:h-35 rounded-md overflow-hidden">
      <img
        src="bg-shorten-mobile.svg"
        alt="bg"
        className="w-fit md:w-1/2 absolute right-0 top-0 lg:hidden -z-10"
      />
      <img
        src="bg-shorten-desktop.svg"
        alt="bg"
        className="w-full h-full absolute right-0 top-0 lg:block hidden -z-10"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex justify-center p-4 md:p-6 lg:px-8 lg:pb-10 lg:pt-11   "
      >
        <div className="w-full flex flex-col lg:flex-row gap-4 h-fit    ">
          <div className="w-full ">
            <input
              {...register("link", { required: "Please enter valid link" })}
              type="text"
              placeholder="Shorten a link here..."
              className={`bg-white w-full rounded-sm py-2.5 px-4 ${
                errors.link && "placeholder:text-red-400! outline-red-400 "
              } placeholder:tracking-wide! placeholder:text-lg! border-none `}
            />
            {errors.link && (
              <p className="text-red-400 italic font-shortly text-sm mt-1 leading-tight">
                {errors.link.message}{" "}
              </p>
            )}
          </div>

          <div className="w-full lg:w-fit flex justify-center items-center h-fit">
            <button
              className="frm-btn flex-1 text-nowrap "
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading" : "Shorten It!"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ShortenForm;
