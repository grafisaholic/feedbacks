import Layout from '@components/layout';
import SiteTables from '@components/sites/site-table';
import Heading from '@components/utils/Heading';
import React from 'react';

function index() {
  return (
    <Layout>
      <Heading title="Sites" />
      <SiteTables />
    </Layout>
  );
}

export default index;
