import  "../components/themes/bootswatch_sketchy.min.css"
import ThemeProvider, { ThemeConsumer, themes } from '../components/themes/ThemeProvider.js'
import HtmlHead from './HtmlHead'
import Header from './Header'
import Footer from './Footer';
import Info from './Info';
import Message from './Message';
import LeftBorder from './LeftBorder';
import RightBorder from './RightBorder';

// <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
// <link rel="stylesheet" href="https://unpkg.com/papercss/dist/paper.min.css" />
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>

console.log("File MyLayout.js... ");


class Layout extends React.Component {
  state = {
  };


  render() {
    // const containerClasses = "layout container" style={{backgroundColor: theme === themes.dark ? "white" : "white"}}
    const containerClasses = "layout container";
    return(
      <ThemeProvider>
          <HtmlHead />

          <Header />
          
          <div className={containerClasses}>
            <Info />
            <Message />
            <LeftBorder />
            <RightBorder />
            <div className="content">
              {this.props.children}
            </div>
            <Footer />
          </div>

          <style jsx global>{`

            .layout {
            }

            .header {
              margin-top: 8px;
              margin-bottom: 30px;
              margin-left: 8px;
              margin-right: 8px;
            }

            .paper {
              
            }

            .info {
            }
            .message {
            }
            .content {
            }
            .footer {
            }
          `}</style>

          <style jsx global>{`

            .material-icons.md-18 { font-size: 18px; }
            .material-icons.md-24 { font-size: 24px; }
            .material-icons.md-36 { font-size: 36px; }
            .material-icons.md-48 { font-size: 48px; }
            .material-icons.md-64 { font-size: 64px; }
            .material-icons.md-96 { font-size: 96px; }

            .material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
            .material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }
            .material-icons.md-light { color: rgba(255, 255, 255, 1); }
            .material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }   

          `}</style>
      </ThemeProvider>        
    )
  }
}

export default Layout
