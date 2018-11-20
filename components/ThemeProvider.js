import React, { Component } from 'react'

console.log("File ThemeProvider.js... ");


export const themes = {
    light: {
      name: 'light',
      foreground: '#000000',
      background: '#eeeeee',
      backgroundColor: 'var(--background-color,#fff)',
      bootstrap: {
        navbar: 'navbar-light bg-primary',
      },
    },
    dark: {
      name: 'dark',
      foreground: '#ffffff',
      background: '#222222',
      bootstrap: {
        navbar: 'navbar-dark bg-dark',
      },    
    },
  };
  

/* First we will make a new context */
const ThemeContext = React.createContext();

/* Then create a provider Component */
class ThemeProvider extends Component {
  state = {
    theme: themes.light,
  }

  toggleTheme = () => {
    console.log("Theme state: ", this.state);
    this.setState({
      theme:  this.state.theme === themes.dark ? themes.light : themes.dark
    });
  };

  render () {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

/* then make a consumer which will surface it */
const ThemeConsumer = ThemeContext.Consumer

export default ThemeProvider
export { ThemeConsumer, ThemeContext }