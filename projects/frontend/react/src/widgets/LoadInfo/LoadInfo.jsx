import { Loader, ErrorMessage } from 'components';
import PropTypes from 'prop-types';

export default function LoadInfo({
  isLoading,
  renderComponent,
  isFound,
  message = "",
}) {

  function showInfo() {
    return isFound ? (
      <ErrorMessage message={message} />
    ) : (
      renderComponent()
    );
  }
  
  return isLoading ? <Loader /> : showInfo();
}

LoadInfo.propTypes = {
  renderComponent: PropTypes.func,
  isFound: PropTypes.bool,
  message: PropTypes.string,
  isLoading: PropTypes.bool,
};