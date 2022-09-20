import React, { useState } from 'react';

function ModalSite() {
  const [showModal, setShoModal] = useState(false);

  return (
    <>
      <div className="">
        <button
          className="rounded-lg bg-slate-900 px-5 py-2 text-white"
          onClick={() => setShoModal(true)}
        >
          <div className="flex items-center gap-2">Add Site</div>
        </button>
      </div>

      <div
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          showModal ? 'block' : 'hidden'
        } flex justify-center top-32 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow border">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              onClick={() => setShoModal(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-8 text-xl font-medium text-gray-900 ">
                Add Site
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    autoFocus
                    type="text"
                    placeholder="Google"
                    name="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="link"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Link
                  </label>
                  <input
                    type="text"
                    name="link"
                    id="password"
                    placeholder="https://example.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSite;
