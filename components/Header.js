import PropTypes from 'prop-types';
import { ThemeContext } from '../components/themes/ThemeProvider.js'

class Header extends React.Component {
  render () {
    const themeSwitchText = this.context.theme.name === 'dark' ? "Switch to light" : "Switch to dark";
    const navbarClasses = "header navbar navbar-expand-sm " + this.context.theme.bootstrap.navbar;
    return(
      <nav className={navbarClasses}>

        <div className="nav-brand"><a href="#">FM next</a></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerHeader" aria-controls="navbarTogglerHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerHeader">
          <ul className="navbar-nav mr-auto mt-2 mt-sm-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={this.context.toggleTheme}>{themeSwitchText}</a>
            </li>
          </ul>
        </div>

      </nav>      
    )
  }
}
Header.contextType = ThemeContext;

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
