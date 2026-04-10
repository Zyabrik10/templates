import { ThemeButton } from 'widgets';
import css from './Other.module.css';
import { MobileMenuButton } from 'components';

export default function Other() {
  return (
    <div className={css['other']}>
      <ThemeButton />
      <MobileMenuButton />
    </div>
  );
}
