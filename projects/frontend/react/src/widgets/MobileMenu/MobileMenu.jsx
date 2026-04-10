import { Container } from 'components';
import css from './MobileMenu.module.css';
import Nav from 'widgets/Nav/Nav';
import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * @param
 * isOpened:boolean -> false
 * setIsOpened:boolean -> useState function
 */

export default function MobileMenu({ isOpened, setIsOpened }) {
  const closeWindow = useCallback(() => {
    setIsOpened(false);
  }, [setIsOpened]);

  const closeOnEscape = useCallback(
    ({ key }) => {
      if (key === 'Escape') {
        closeWindow();
      }
    },
    [closeWindow]
  );

  const closeOnChoose = () => {
    setIsOpened(false);
  }

  useEffect(() => {
    if (isOpened) {
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', closeOnEscape);
    } else {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    }
  }, [isOpened, closeOnEscape]);

  return (
    <div
      className={`${css['mobile-backdrop']} ${isOpened ? css['active'] : ''}`}
    >
      <Container className={css['content']}>
        <button className={css["close-button"]} type='button' onClick={closeWindow}>&times;</button>
        <div onClick={closeOnChoose}>
          <Nav listClassName={css['list']} isInHeader={false} />
        </div>
      </Container>
    </div>
  );
}

MobileMenu.propTypes = {
    isOpened: PropTypes.bool,
    setIsOpened: PropTypes.func
};
