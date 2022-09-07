import React from 'react';

import Layout from '@components/layout';
import Heading from '@components/utils/Heading';
import FeedbackTable from '@components/feedbacks/feedback-table';

function Feedbacks() {
  return (
    <Layout>
      <Heading title="Feedbacks" />
      <FeedbackTable />
    </Layout>
  );
}

export default Feedbacks;
