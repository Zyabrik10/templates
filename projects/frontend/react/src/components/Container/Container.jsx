import css from './Container.module.css';
import PropTypes from 'prop-types';

/**
 * @param
 * className:string -> ".selector1 .selector2 ..."
 * type:string -> "container"(default) | "section"
 * children: React nodes
 */

function Container({ className, type = 'container', children }) {
  if (type === 'section') {
    return <section className={`${className || ''} ${css[type]}`}>{children}</section>;
  }

  if (type === 'flex') {
    return <ul className={`${className || ''} ${css[type]}`}>{children}</ul>;
  }

  return <div className={`${className || ""} ${css[type]}`}>{children}</div>;
  
}

export default Container;

Container.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['container', 'section', 'flex']),
  children: PropTypes.node.isRequired,
};
