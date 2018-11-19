import ThemeProvider from './ThemeProvider.js'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer';
import Info from './Info';
import Message from './Message';
import LeftBorder from './LeftBorder';
import RightBorder from './RightBorder';

//       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />

console.log("File MyLayout.js... ");


class Layout extends React.Component {
  state = {
    darkMode: false,
  };

  handleDarkModeClick = () => {
    this.setState({darkMode: !this.state.darkMode});
  }

  render() {

    return(
      <div className="layout paper container">
        <Head>
          <title>Food Maniac (next.js version)</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="https://unpkg.com/papercss@1.6.0/dist/paper.min.css" />
          <meta name="description" content="Know the best pizza in town? Share it!"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"/>
        </Head>
        <ThemeProvider>

<nav class="border fixed split-nav">
  <div class="nav-brand">
    <h3><a href="#">Get PaperCSS</a></h3>
  </div>
  <div class="collapsible">
    <input id="collapsible1" type="checkbox" name="collapsible1" />
    <button>
    <label for="collapsible1">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </label>
    </button>
    <div class="collapsible-body">
      <ul class="inline">
        <li><a href="#">Documentation</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Github</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="card" style={{width: 20 + 'rem'}}>
  <img src="https://picsum.photos/768" alt="Card example image" />

  <div class="card-body">
    <h4 class="card-title">My awesome Paper card!</h4>
    <h5 class="card-subtitle">Nice looking subtitle.</h5>
    <p class="card-text">Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.</p>
    <button>Let me go here!</button>
  </div>
</div>



          <Header darkMode={this.state.darkMode} handleDarkModeClick={this.handleDarkModeClick} />
          <Info />
          <Message />
          <LeftBorder />
          <RightBorder />
          <div className="content">
            {this.props.children}
          </div>
          <Footer />
        </ThemeProvider>        


        <style jsx global>{`

          .layout {
            display: grid;
            grid-template-rows: 100px 300px 50px 1fr 100px;
            grid-template-columns: 1fr minmax(auto, var(--content-max-width,960)) 1fr;
            grid-template-areas:
              'h h h'
              'i i i'
              'm m m'
              'l c r'
              'f f f';
            grid-gap: 0px;
            background-color: var(--background-color,#fff);
          }
          
          @media only screen and (max-width: 768px)  {	
            .layout {
              display: grid;
              grid-template-rows: 30px 200px 50px 0px 1fr 0px 70px;
              grid-template-columns: auto;
              grid-template-areas:
                'h'
                'i'
                'm'
                'l'
                'c'
                'r'
                'f';
                grid-gap: 0px;
              }
          }	

          .header {
              grid-area: h;
              background-color: #FEE;
          }
          .info {
            grid-area: i;
            background-color: #EFE;
          }
          .message {
            grid-area: m;
            background-color: #EEF;
          }
          .leftborder {
            grid-area: l;
          }    
          .rightborder {
            grid-area: r;
          }
          .content {
            grid-area: c;
          }
          .footer {
            grid-area: f;
            background-color: #EFF;
          }



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
          
          
          :root {

            --background-color: #fff;
            --light-background-color: #fff;
            --dark-background-color: #000;

            --front-color: #000;
            --light-front-color: #000;
            --dark-front-color: #fff;

            --content-max-width: 960px;

            --blue: #007bff;
            --indigo: #6610f2;
            --purple: #6f42c1;
            --pink: #e83e8c;
            --red: #dc3545;
            --orange: #fd7e14;
            --yellow: #ffc107;
            --green: #28a745;
            --teal: #20c997;
            --cyan: #17a2b8;
            --white: #fff;
            --gray: #6c757d;
            --gray-dark: #343a40;
            --primary: #007bff;
            --secondary: #6c757d;
            --success: #28a745;
            --info: #17a2b8;
            --warning: #ffc107;
            --danger: #dc3545;
            --light: #f8f9fa;
            --dark: #343a40;
            --breakpoint-xs: 0;
            --breakpoint-sm: 576px;
            --breakpoint-md: 768px;
            --breakpoint-lg: 992px;
            --breakpoint-xl: 1200px;
            --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
            --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
          }    
          
          
          html {
            font-family: sans-serif;
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: transparent
          }

          @-ms-viewport {
            width: device-width
          }

          body {
            margin: 0;
            font-family: var(--font-family-sans-serif);
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: left;
            background-color: var(--background-color)
          }
        

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
              margin-top: 0;
              margin-bottom: .5rem
          }
          
          p {
              margin-top: 0;
              margin-bottom: 1rem
          }


          .h1,
          .h2,
          .h3,
          .h4,
          .h5,
          .h6,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
              margin-bottom: .5rem;
              font-family: inherit;
              font-weight: 500;
              line-height: 1.2;
              color: inherit
          }
          
          .h1,
          h1 {
              font-size: 2.5rem
          }
          
          .h2,
          h2 {
              font-size: 2rem
          }
          
          .h3,
          h3 {
              font-size: 1.75rem
          }
          
          .h4,
          h4 {
              font-size: 1.5rem
          }
          
          .h5,
          h5 {
              font-size: 1.25rem
          }
          
          .h6,
          h6 {
              font-size: 1rem
          }
          
        `}</style>

      </div>
    )
  }
}

export default Layout
