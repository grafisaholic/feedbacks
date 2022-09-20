import Layout from '~/components/layout';
import Heading from '~/components/utils/Heading';
import React from 'react';

interface Plan {
  name: string;
  isRecommendate?: boolean;
  feature: string[];
}

const PakcagePlan = ({ name, feature, isRecommendate }: Plan) => {
  return (
    <div
      className={`px-7 rounded-2xl  py-10 flex-1 ${
        isRecommendate
          ? 'bg-gradient-to-br from-[#4f45b8] to-purple-900 text-white'
          : 'bg-gray-100'
      }`}
    >
      <div className="flex justify-between flex-col pb-12">
        <div className="justify-between flex items-baseline">
          <h2 className="text-4xl font-bold leading-none">{name}</h2>
          <p>Free</p>
        </div>
        <div className="justify-between flex items-baseline">
          <span
            className={`h-1 w-8 ${
              isRecommendate ? 'bg-white' : 'bg-purple-700'
            }`}
          ></span>
        </div>
      </div>

      <div className="text-sm pb-8">
        <p className="pb-4">Plan Includes :</p>
        <ul className="flex flex-col">
          {feature.map((f, i) => (
            <li key={i} className="flex flex-row item-center gap-1">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`rounded-2xl flex ${
          isRecommendate ? 'border' : 'bg-purple-700 text-white'
        } font-bold text-center p-5`}
      >
        Start 14 days of free pro plan
      </button>
    </div>
  );
};

function Upgrade() {
  return (
    <Layout>
      <Heading title="Upgrade Plan" />

      <div className="flex justify-between flex-col py-6 gap-6">
        <div className="">
          <h2 className="text-4xl font-light leading-9">Start Now</h2>
          <span className="font-bold">Free plan</span>
        </div>
        <div className="relative flex flex-col lg:flex-row gap-10">
          <PakcagePlan
            name="Lite"
            isRecommendate={true}
            feature={[
              'Manage conversations directly from your website',
              'Archive chat for 30 days.',
              'Free, for always.',
            ]}
          />
          <PakcagePlan
            name="Lite"
            feature={[
              'Manage conversations directly from your website',
              'Archive chat for 30 days.',
              'Free, for always.',
              'Manage conversations directly from your website',
              'Archive chat for 30 days.',
              'Free, for always.',
            ]}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Upgrade;
