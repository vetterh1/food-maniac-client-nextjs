import { ThemeConsumer, themes } from '../components/themes/ThemeProvider.js'


const Footer = () => (
    <div className="footer">
      <ThemeConsumer>
        {({ theme }) => (
          <div>
            <p>Theme: {theme === themes.dark ? "Dark" : "Light"}</p>
            {/* 
              <div className="form-group child-borders">
                <textarea style={{fontFamily: 'Neucha, sans-serif'}}>  </textarea>
              </div> 
            */}
          </div>
        )}
      </ThemeConsumer>
    </div>
)

export default Footer
