import React from 'react';

import Layout from '~/components/layout';
import Heading from '~/components/utils/Heading';
import SiteTables from '~/components/sites/site-table';
import ModalSite from '~/components/sites/modal-sites';

const SitePage = () => {
  return (
    <Layout>
      <div className="flex flex-row justify-between">
        <Heading title="Sites" />

        <ModalSite />
      </div>

      <SiteTables />
    </Layout>
  );
};

export default SitePage;
