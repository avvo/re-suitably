import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Link from './Link';

const ButtonLink = (props) => {
  const buttonProps = Object.assign({}, props, {children: undefined, href: undefined});
  return (
    <Link href={props.href} onClick={props.onClick}>
      <Button {...buttonProps}>{props.children}</Button>
    </Link>
  );
};

ButtonLink.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonLink.defaultProps = {
  href: '#',
  onClick: null,
};

export default ButtonLink;
