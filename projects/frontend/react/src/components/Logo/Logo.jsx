import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import PropTypes from 'prop-types';

/**
 * @param 
 * className:string -> ".selector1 .selector2 ..."
 */

export default function Logo({className}) {
    return <Link className={`${className} ${css["logo"]}`} to="/">Logo</Link>;
}

Logo.propTypes = {
    className: PropTypes.string,
}