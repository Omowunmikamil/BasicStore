import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const NewsTeller = (e) => {
  const handelFormSubmition = () => {
    e.preventDefault();
    toast.success("You have successfully subscribed to our newsletter");
  };

  return (
    <div className="flex justify-center items-center relative mt-20">
      <img
        src={assets.subcribeBg}
        alt="Newsteller Background"
        className="rounded-xl w-full z-4 h-[300px] md:h-[360px]"
      />

      <div className="absolute z-10 top-0 bottom-0 w-full text-white flex flex-col justify-center">
        <h2 className="text-white text-3xl mb-1">Subscribe Us Now</h2>
        <p className="text-gray-100 text-center text-sm md:text-base">
          Get Latest News, Updates And Deals Directly Mailed To Your Inbox.
        </p>

        <form
          className="w-full w-11/12 sm:w-2/5 h-12 flex items-center gap-3 mx-auto my-6 pl-4 rounded-lg bg-white"
          onSubmit={handelFormSubmition}
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address here"
            required
            className="w-full sm:flex-1 outline-none bg-transparent"
          />
          <button
            type="submit"
            className="bg-orange text-white text-sm px-6 py-2 rounded-lg h-12"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsTeller;
