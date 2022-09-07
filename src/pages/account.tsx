import Image from 'next/image';
import React from 'react';
import NextLink from 'next/link';

import Layout from '@components/layout';

function Account() {
  return (
    <Layout>
      <div className="w-full lg:w-4/5 px-4 mx-auto pt-14">
        <div className="relative shadow-xl bg-gray-100 rounded-xl rounded-lgflex flex-col w-full">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="rounded-full overflow-hidden justify-center -m-16 md:-ml-2">
                <Image
                  src="/avatar-default.png"
                  width={150}
                  height={150}
                  alt="Profile"
                />
              </div>
              <div className="w-full px-4">
                <div className="flex justify-center p-4 pt-14">
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
              </div>
            </div>
            <div className="text-center mt-4">
              <h2 className="text-2xl md:text-4xl font-bold">
                Khabibur Rokhman
              </h2>
              <span className="text-md text-slate-500">
                khabiburrokhman13@gmail.com
              </span>
            </div>
            <div className="mt-4 md:px-20 py-4 md:py-8">
              <p className="text-slate-500 font-light">
                Fast Feedback uses Stripe to update, change, or cancel your
                subscription. You can also update card information and billing
                addresses through the secure portal.
              </p>
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
