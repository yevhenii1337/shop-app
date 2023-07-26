import { FC } from 'react';
import { useTheme } from '../../../theme/useTheme'
import styles from './theme-switch.module.scss';
import { Theme } from '../../../theme/ThemeContext';

export const ThemeSwitch: FC = () => {

  const { toggleTheme, theme } = useTheme();

  return (
    <div className={`${styles.toggleThemeSwitch} ${theme === Theme.DARK ? styles.dark : ''}`} onClick={toggleTheme}>
      <div className={styles.switchKnob}></div>
    </div>
  );
};