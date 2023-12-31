"use client";
import Swal from "sweetalert2";
import { MdOutlineFeedback } from "react-icons/md";
import { postreview } from "@/utils/async/guest/reviews/postreviews";
import "./ReviewForm.css";

const ReviewForm = ({ id }) => {
  const handleReview = async (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const rating = form.rating.value;
    const abc = await postreview(id, comment, rating);
    Swal.fire({
      title: "Success!",
      text: "Review Successfully",
      icon: "success",
      confirmButtonText: "Thank you",
    });
    form.reset("");
  };

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
        data-hs-overlay="#hs-static-review"
      >
        <MdOutlineFeedback /> Review
      </button>
      <div
        id="hs-static-review"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto [--overlay-backdrop:static]"
        data-hs-overlay-keyboard="false"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-end items-center py-3 px-4 dark:border-gray-700">
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-static-review"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3.5 h-3.5"
                  width={8}
                  height={8}
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="p-8 mx-auto overflow-y-auto">
              <form
                onSubmit={handleReview}
                className="form bg-white dark:bg-gray-900"
              >
                <div className="title">Share Your Experience</div>
                <div className="w-full">
                  <div className="w-full relative ">
                    <h1 className="text-gray-700 dark:text-gray-200">
                      Your Rating
                    </h1>
                    <select
                      name="rating"
                      className="block appearance-none w-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-400 text-gray-700 dark:text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </select>
                    <div className="pointer-events-none absolute -inset-y-2 right-4 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 5"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="text-gray-700 dark:text-gray-200">
                  Your Comment
                </h1>
                <textarea
                  name="comment"
                  className="bg-white border-gray-200 text-black dark:text-white dark:border-gray-400 dark:bg-gray-800"
                  placeholder="Write your experience !!! "
                  defaultValue={""}
                />
                <h1 className="hidden" name="id">
                  {id}
                </h1>

                <div className="flex justify-center items-center gap-x-2 py-4 dark:border-gray-700">
                  <button
                    type="button"
                    className="hs-dropdown-toggle hover:bg-gray-500 py-3 px-4 inline-flex bg-slate-200 justify-center items-center gap-2 rounded-md border font-medium  text-gray-700 shadow-sm align-middle  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-500 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-200 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    data-hs-overlay="#hs-static-review"
                  >
                    Close
                  </button>

                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-green-600 dark:hover:bg-slate-900 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    href="#"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
