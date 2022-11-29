import ButtonDelete from './button-delete';
import React from 'react';

function FeedbacksTable() {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
      <table className="w-full text-sm text-left text-gray-700 ">
        <thead className="bg-slate-300 uppercase">
          <tr className="text-left">
            <th scope="col" className="px-6 py-2">
              Name
            </th>
            <th scope="col" className="px-4 py-2">
              Feedback
            </th>
            <th scope="col" className="px-4 py-2">
              slug / path
            </th>
            <th scope="col" className="px-4 py-2">
              Visible
            </th>
            <th scope="col" className="px-4 py-2" />
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((s, i) => (
            <tr key={i} className="border-b bg-white text-sm">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple
              </th>
              <td className="px-4 py-2">Malcolm Lockyer</td>
              <td className="px-4 py-2">1961</td>
              <td className="px-4 py-2">
                <label
                  htmlFor={`tiggle-visible-${i}`}
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={`tiggle-visible-${i}`}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                </label>
              </td>
              <td className="px-4 py-2 flex">
                <ButtonDelete
                  feedbackId={s}
                  message="Are you sure to remove this site ? "
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeedbacksTable;
