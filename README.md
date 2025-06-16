# Shortly

This single page App helps you to shorten your long links with a professional shorter links.

all your Shorten links will be saved on the local storage, and you can copy or remove any of them.


# API and Backend logic

I am utilizing the Vercel serverless backend to fetch the API that shorten the links, for those who need to clone the repo and 
try it on local host you MUST edit the "onSubmit" function in the "shorten-form" component with this :
"  async function onSubmit(data) {
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
  }"

## Get access to the CORSE

then as we use "CORSE anywhere" to pass the CORSE as we are hosting it locally, after editing the "onSubmit" function as explained above, you need to visit this site : https://cors-anywhere.herokuapp.com/corsdemo, and take a temp access. this is
so easy with just on button click. 

## Feed-Back matters

please let me know if you have any positive or negative comments or ideas you need to share with me.
