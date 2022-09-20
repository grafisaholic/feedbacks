import type { NextPage } from 'next';
import Image from 'next/image';

import Layout from '~/components/layout';
import ButtonSignIn from '~/components/utils/button-sigin';
import NextLink from 'next/link';
import { useAuth } from 'context/Auth';

const Home: NextPage = () => {
  const { isLogin } = useAuth();

  return (
    <Layout>
      <div className="flex-row gap-4">
        <div className="flex flex-col md:flex-row md:item-center justify-center pb-20 pt-8">
          <div className="relative mb-10 md:mb-0">
            <Image
              src="/logo.png"
              width="120"
              height="120"
              alt="Fastfeedback"
            />
          </div>
          <div className="md:pl-12 font-sans">
            <h1 className="mb-4 text-3xl font-bold">Fastfeedback</h1>
            <p className="text-sm text-gray-500">
              Fast Feedback was built as part of React 2025. It&apos;s the
              easiest way to add comments or reviews to your static site. Try it
              out by leaving a comment below. After the comment is approved, it
              will display below.
            </p>
            <div className="mt-4 gap-2 flex">
              {!isLogin ? (
                <ButtonSignIn />
              ) : (
                <NextLink href="/sites" passHref>
                  <button className="rounded-lg bg-slate-900 px-5 py-2 text-white">
                    <div className="flex items-center gap-2">
                      View Dashboard
                    </div>
                  </button>
                </NextLink>
              )}
            </div>
          </div>
        </div>

        {[1, 2, 3, 4, 5, 6].map((f, i) => (
          <div key={i} className="border-b border-gray-200 py-6">
            <div className="mb-5">
              <h4 className="mb-0 text-lg font-bold">Lee Loreb</h4>
              <p className="m-0 text-xs text-slate-400">
                Aug 8, 2020, 6:55:45 AM
              </p>
            </div>
            <p className="text-md text-slate-500">
              Comments are initially in a &quot;pending&quot; status. The site
              owner then has moderation tools to approve or delete comments.
              After I approve your comment, it will show up here.
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
