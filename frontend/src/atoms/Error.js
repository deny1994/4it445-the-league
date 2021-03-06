import React from 'react';
import classNames from 'classnames';

export const Error = ({ className, children, ...props }) => (
  <div className={classNames('red', className)} {...props}>
    {children}
  </div>
);
