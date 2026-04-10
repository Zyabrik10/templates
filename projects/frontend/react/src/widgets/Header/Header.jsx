import { Container, Logo } from 'components';
import { Nav } from 'widgets';
import Other from './Other/Other';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css['header']}>
      <Container className={css['header-container']}>
        <Logo />
        <Nav />
        <Other />
      </Container>
    </header>
  );
}
