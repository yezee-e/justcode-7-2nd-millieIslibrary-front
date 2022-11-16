import React, { useContext } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { FaRegMoon } from 'react-icons/fa';
import { ThemeContext } from '../../App.js';

function DarkMode() {
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme}>
      {theme === 'light' ? <BsFillSunFill /> : <FaRegMoon />}
    </div>
  );
}

export default DarkMode;
