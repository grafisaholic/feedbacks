import React from 'react';
import NextLink from 'next/link';

import ButtonDelete from '~/components/utils/button-delete';

function SiteTables() {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
      <table className="w-full text-sm text-left text-gray-700 ">
        <thead className="bg-slate-300 uppercase">
          <tr className="text-left">
            <th scope="col" className="px-6 py-2">
              Name
            </th>
            <th scope="col" className="px-4 py-2">
              Site Link
            </th>
            <th scope="col" className="px-4 py-2">
              Feedback Link
            </th>
            <th scope="col" className="px-4 py-2">
              Created At
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
                <NextLink href={`/sites/${s}`} passHref>
                  Apple MacBook Pro 17
                </NextLink>
              </th>
              <td className="px-4 py-2">
                <a
                  href="#"
                  target="_blank"
                  className="font-semibold hover:underline"
                >
                  Google
                </a>
              </td>
              <td className="px-4 py-2">1961</td>
              <td className="px-4 py-2">12, Aust 2021</td>
              <td className="px-2 py-2">
                <ButtonDelete message="Are you sure to remove this site ? " />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SiteTables;
