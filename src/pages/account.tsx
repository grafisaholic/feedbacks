import Image from 'next/image';
import React from 'react';
import NextLink from 'next/link';

import Layout from '~/components/layout';
import { useAuth } from 'context/Auth';

function Account() {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="w-full lg:w-4/5 px-4 mx-auto pt-14">
        <div className="relative shadow-xl bg-gray-100 rounded-xl rounded-lgflex flex-col w-full">
          <div className="flex flex-col px-6 text-center">
            <div className="w-full relative -mt-16 justify-center">
              <Image
                src={`${user?.picture}`}
                alt="Profile"
                width={120}
                height={120}
                // layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="w-fulll px-4 ">
              <div className="flex justify-center p-4 ">
                <div className="mr-3 p-3 text-center">
                  <span className="text-xl block font-bold">22</span>
                  <span className="text-sm">Sites</span>
                </div>
                <div className="mr-3 p-3 text-center">
                  <span className="text-xl block font-bold">22</span>
                  <span className="text-sm">Sites</span>
                </div>
                <div className="mr-3 p-3 text-center">
                  <span className="text-xl block font-bold">22</span>
                  <span className="text-sm">Sites</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold">{user?.name}</h2>
              <span className="text-md text-slate-500">{user?.email}</span>

              <div className="md:px-20 py-4 md:py-6">
                <p className="text-slate-500 font-light text-xs md:text-base">
                  Fast Feedback uses Stripe to update, change, or cancel your
                  subscription. You can also update card information and billing
                  addresses through the secure portal.
                </p>
              </div>
            </div>

            <div className="border-t py-4">
              <div className="flex justify-end">
                <button className="px-5 py-2 rounded-lg">Logout</button>
                <NextLink href="/upgrade" passHref>
                  <button className="rounded-lg bg-slate-900 px-5 py-2 text-white">
                    <div className="flex items-center gap-2">
                      Manage Billing
                    </div>
                  </button>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Account;
