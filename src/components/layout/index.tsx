import Image from 'next/image';
import React from 'react';
import NextLink from 'next/link';

import { BsFillMoonStarsFill } from 'react-icons/bs';

type Props = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: Props) {
  return (
    <div className="mx-auto max-w-6xl justify-center pb-4">
      <div className="flex flex-col">
        <nav className="flex items-center gap-4 px-6 py-6">
          <NextLink href="/" passHref>
            <a>
              <Image
                src="/logo.png"
                width="30"
                height="30"
                alt="Fastfeedback"
              />
            </a>
          </NextLink>
          <div className="bg-red flex w-full items-center justify-between">
            <div className="flex gap-4">
              <NextLink href="/sites" passHref>
                <a className="font-medium text-md hover:underline">Sites</a>
              </NextLink>
              <NextLink href="/feedbacks" passHref>
                <a href="#" className="font-medium text-md hover:underline">
                  Feedbacks
                </a>
              </NextLink>
            </div>
            <div className="flex gap-4">
              <button>
                <BsFillMoonStarsFill className="h-5 w-5" />
              </button>
              <NextLink href="/account" passHref>
                <button className="overflow-hidden rounded-full">
                  <Image
                    src="/avatar-default.png"
                    alt="Account"
                    height={35}
                    width={35}
                  />
                </button>
              </NextLink>
            </div>
          </div>
        </nav>
      </div>
      <main className="flex flex-col justify-center px-6 py-2">{children}</main>
    </div>
  );
}

export default Layout;
