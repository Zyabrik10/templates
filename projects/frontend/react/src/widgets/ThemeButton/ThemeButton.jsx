import {useLocalStorage} from 'hooks';
import css from './ThemeButton.module.css';
import { useState } from 'react';

export default function ThemeButton() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [checked, setChecked] = useState(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      return true;
    }

    return false;
  });

  function changeTheme() {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      setChecked(false);
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      setChecked(true);
      setTheme('dark');
    }
  }

  return (
    <label className={css['change-theme-switcher']} htmlFor="change-theme">
      <input
        id="change-theme"
        name="change-theme"
        type="checkbox"
        onChange={changeTheme}
        checked={checked}
      />
      <div className={css['change-theme-ball']}></div>
    </label>
  );
}
