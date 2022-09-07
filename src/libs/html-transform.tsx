import React from 'react';
import NextLink from 'next/link';

const htmlTransform = {
  a: (props: JSX.IntrinsicElements['a']) => {
    const { href, children, ...rest } = props;

    if (href) {
      if (href.substr(0, 4) === 'http') {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
            {children}
          </a>
        );
      }

      return (
        <NextLink href={href} passHref>
          <a {...rest}>{children}</a>
        </NextLink>
      );
    }
  },
};

export default htmlTransform;
