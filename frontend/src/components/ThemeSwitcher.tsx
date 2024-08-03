import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme, selectActiveTheme } from '../services/uiSlice';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const activeTheme = useSelector(selectActiveTheme);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', activeTheme);
    document.body.classList.remove('bg-light', 'bg-dark');
    document.body.classList.add(activeTheme === 'dark' ? 'bg-dark' : 'bg-light');
  }, [activeTheme]);

  const toggleTheme = () => dispatch(changeTheme());

  return (
    <Button variant={activeTheme} onClick={toggleTheme}>
      {activeTheme === 'dark' ? <i className='bi bi-moon-stars-fill'></i> : <i className='bi bi-sun'></i>}
    </Button>
  );
};
