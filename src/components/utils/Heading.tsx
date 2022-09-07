import React from 'react';
import NextLink from 'next/link';

interface Props {
  title?: string;
}

function Heading({ title }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl mb-1 font-bold">{title}</h2>
      <div className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <NextLink href="/" passHref>
              <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 ">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </a>
            </NextLink>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2">
                {title}
              </span>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Heading;
