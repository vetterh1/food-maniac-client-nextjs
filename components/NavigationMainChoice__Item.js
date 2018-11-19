import Link from 'next/link'


const NavigationMainChoice__Item = ({icon, title, subtitle, link}) => (
    <div className="navigation-main-choice__item">
        <div className="card">
            <div className="icon">
                <i className="material-icons md-64">{icon}</i>
            </div>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{subtitle}</p>
            </div>
        </div>

        <style jsx>{`

            .card {
                flex-direction: row;
            }

            .navigation-main-choice__item .icon {
                text-align: center;
                padding-left: 15px;
                padding-top: 20px;
            } 
                        
        `}</style>
    </div>
)

export default NavigationMainChoice__Item
