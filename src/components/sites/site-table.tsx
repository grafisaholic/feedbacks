import React from 'react';
import useSWR from 'swr';
import NextLink from 'next/link';
import { format, parseISO } from 'date-fns';

import ButtonDelete from './button-delete';

import { fetcherWithAuth } from '~/utils/fetcher';
import { useAuth } from '../../context/Auth';
import { Site } from '~/types/global';

function SiteTables() {
  const { user } = useAuth();
  const { data: sites } = useSWR(user ? ['/api/sites'] : null, fetcherWithAuth);

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
          {sites &&
            sites.data.map((site: Site, i: number) => (
              <tr key={i} className="border-b bg-white text-sm">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  {site.name}
                </th>
                <td className="px-4 py-2">
                  <a
                    href={site.link}
                    rel="noreferrer"
                    target="_blank"
                    className="font-semibold hover:underline"
                  >
                    {site.link}
                  </a>
                </td>
                <td className="px-4 py-2">
                  <NextLink href={`/sites/${site.id}`} passHref>
                    View Feedback
                  </NextLink>
                </td>
                <td className="px-4 py-2">
                  {format(parseISO(site.created_at), 'dd MMM yyyy')}
                </td>
                <td className="px-2 py-2">
                  <ButtonDelete
                    siteId={site.id}
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

export default SiteTables;
