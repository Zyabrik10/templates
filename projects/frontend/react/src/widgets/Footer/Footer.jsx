import Container from 'components/Container/Container';
import css from './Footer.module.css';
import { Logo } from 'components';

export default function Footer() {
  return (
    <footer className={css['footer']}>
      <Container className={css['footer-container']}>
        <Logo />
      </Container>
    </footer>
  );
}