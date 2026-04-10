import PropTypes from 'prop-types';

export default function ErrorMessage({ message, align = 'center', className, classNameP }) {
  return (
    <div
      className={className}
      style={{
        textAlign: align,
        width: '100%',
        color: '#bbb',
      }}
    >
      <p className={classNameP} >{message}</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
  align: PropTypes.string,
  className: PropTypes.string,
  classNameP: PropTypes.string,
};
