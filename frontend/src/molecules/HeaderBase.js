import React, { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar, NavbarBrand, Collapse, NavbarToggler } from 'reactstrap';

const navLinkTextStyle = 'f6 dib white';

export const navLinkStyle = classNames(navLinkTextStyle, 'dim');
export const navButtonStyle = classNames(
  navLinkTextStyle,
  'bg-transparent bg-animate hover-bg-white hover-dodger-blue pv2 ph3 mh3 br-pill ba b--white-20',
);

export const HeaderBase = ({ homeLinkTo, children }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prevState => !prevState);

  return (
    <Navbar color="primary" light expand="md">
      <NavbarBrand className="text-white" href={homeLinkTo}>
        <FontAwesomeIcon className="text-white mr-1" icon={faFutbol} />
        {t('Molecules.HeaderBase.HomeLink')}
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {children}
        </Nav>
      </Collapse>
    </Navbar>
  );
};
