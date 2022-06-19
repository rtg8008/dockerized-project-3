import { ThemeContext, themes } from './Theme';
import { ModeLogo } from './ThemeStyle';
import './Theme.css';
import { useState } from 'react';


function LightDarkMode () {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Consumer> 
        {({ changeTheme }) => (
          <ModeLogo 
            color="link"
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          >
            <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
            <span className="d-lg-none d-md-block">LIGHT/DARK</span>
          </ModeLogo> 
        )}
      </ThemeContext.Consumer>
    </>
  )
}

export default LightDarkMode;