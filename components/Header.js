import PropTypes from 'prop-types';
import { ThemeConsumer, themes } from '../components/ThemeProvider.js'

const linkStyle = {
  marginRight: 15
}

class Header extends React.Component {
  render () {
    const { darkMode, handleDarkModeClick } = this.props;
    return(
      <nav className="header split-nav">
        <div className="nav-brand">
          <h3><a href="#">Food Maniac</a></h3>
        </div>
        <div className="collapsible">
          <input id="collapsible1" type="checkbox" name="collapsible1" />
          <button>
          <label htmlFor="collapsible1">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </label>
          </button>
          <div className="collapsible-body">
            <ul className="inline">
                <li>
                  <ThemeConsumer>      
                    {({ theme, toggleTheme }) => (
                      <a style={linkStyle} onClick={toggleTheme}>{theme === themes.dark ? "Switch to light" : "Switch to dark"}</a>
                    )}
                  </ThemeConsumer>
              </li>
            </ul>
          </div>
        </div>
      </nav>      
    )
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
  hideHeader: PropTypes.bool,
  next: PropTypes.string,
};

Header.defaultProps = {
  user: null,
  hideHeader: false,
  next: '',
};

export default Header
