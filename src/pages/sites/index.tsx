import Layout from '~/components/layout';
import SiteTables from '~/components/sites/site-table';
import Heading from '~/components/utils/Heading';
import React from 'react';
import ModalSite from '~/components/sites/modal-sites';

function index() {
  return (
    <Layout>
      <div className="flex flex-row justify-between">
        <Heading title="Sites" />

        <ModalSite />
      </div>
      <SiteTables />
    </Layout>
  );
}

export default index;
