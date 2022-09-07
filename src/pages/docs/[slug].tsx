import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import convert from 'htmr';

import { getContentBySlug } from '@libs/content';
import Layout from '@components/layout';
import htmlTransform from '@libs/html-transform';

type DocProps = {
  post: {
    title: string;
    lead: string;
    content: JSX.Element | JSX.Element[];
  };
};

const Doc: NextPage<DocProps> = ({ post }) => {
  const { content } = post;

  if (content)
    return <Layout>{convert(content, { transform: htmlTransform })}</Layout>;

  return (
    <Layout>
      <span>Page is not found</span>
    </Layout>
  );
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as IParams;
  const post = await getContentBySlug(slug, ['title', 'lead', 'content']);

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { slug: 'about' },
      },
    ],
    fallback: false,
  };
};

export default Doc;
