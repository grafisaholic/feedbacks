import Layout from '~/components/layout';
import Heading from '~/components/utils/Heading';
import React from 'react';

function FeedbackSites() {
  return (
    <Layout>
      <Heading title="Sites" />

      <div className="py-2 mb-8">
        <form action="">
          <textarea
            name=""
            id=""
            autoFocus
            rows={4}
            className="block mb-4 p-3.5 text-sm text-gray-700 bg-white rounded-lg border border-gray-300 w-2/3 "
            placeholder="Leave a comment..."
          ></textarea>
          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-5 py-2 text-white"
          >
            <div className="flex items-center gap-2">Sending Comment</div>
          </button>
        </form>
      </div>

      <div className="max-w-4xl">
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
}

export default FeedbackSites;
