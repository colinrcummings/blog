import * as React from 'react';
import Head from 'react-helmet';
import {
  BodyRenderer,
  textRenderer
} from '@phenomic/preset-react-app/lib/client';

import Layout from './Layout';
import ActivityIndicator from './ActivityIndicator';

const PostLayoutDefault = ({ isLoading, post }) => (
  <Layout
    title={post && post.node && post.node.title}
    image={post && post.node && post.node.image}
  >
    {isLoading && <ActivityIndicator />}
    {!isLoading &&
      post.node && (
        <React.Fragment>
          <Head>
            <meta
              name="description"
              content={textRenderer(post.node.body).slice(0, 150) + '…'}
            />
          </Head>
          <p className="small text-muted text-center">
            {new Date(post.node.date).toDateString()}
          </p>
          <BodyRenderer>{post.node.body}</BodyRenderer>
        </React.Fragment>
      )}
  </Layout>
);

export default PostLayoutDefault;
