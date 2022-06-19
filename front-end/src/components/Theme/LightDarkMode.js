import { ThemeContext, themes } from './Theme';
import './Theme.css';
import { useState } from 'react';


function LightDarkMode () {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Consumer> 
        {({ changeTheme }) => (
          <label class="switch">
            <input type="checkbox" color="link" onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.dark : themes.light);
              }}
              />
            <span class="slider round"></span>
          </label>
     
        )}
      </ThemeContext.Consumer>
    </>
  )
}

export default LightDarkMode;