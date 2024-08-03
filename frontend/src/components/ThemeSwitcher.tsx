import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

type Theme = 'dark' | 'light';

const getInitialTheme = (): Theme => {
  return (localStorage.getItem('theme') as Theme) || 'dark';
};

export const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
    document.body.classList.remove('bg-light', 'bg-dark');
    document.body.classList.add(theme === 'dark' ? 'bg-dark' : 'bg-light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Button variant={theme} onClick={toggleTheme}>
      {theme === 'dark' ? <i className='bi bi-moon-stars-fill'></i> : <i className='bi bi-sun'></i>}
    </Button>
  );
};
