import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(NavLink)`
  color: var(--color-2);

  &.active {
    color: orange;
  }
`;

/**
 * @param
 * navClassName:string -> ".selector1 .selector2 ..."
 * listClassName:string -> ".selector1 .selector2 ..."
 * isInHeader:boolean -> true
 * children: React nodes
 */

export default function Nav({ navClassName = "", listClassName = "", isInHeader = true }) {
  return (
    <nav
      className={`${css['nav']} ${isInHeader ? css['header'] : ''} ${navClassName}`}
      role="navigation"
    >
      <ul className={`${css['list']} ${listClassName}`}>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
        <li>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  navClassName: PropTypes.string,
  listClassName: PropTypes.string,
  isInHeader: PropTypes.bool,
};