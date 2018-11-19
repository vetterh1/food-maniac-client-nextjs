import Link from 'next/link'
import NavigationMainChoice__Item from './NavigationMainChoice__Item';



const NavigationMainChoice = () => (
    <div className="navigation-main-choice">

        <NavigationMainChoice__Item icon="star_half" title="Rate" subtitle="Give stars to the pizza you just ate!" />
        <NavigationMainChoice__Item icon="restaurant" title="Search" subtitle="Where's the best burger around you?" />

        <style jsx global>{`

            .navigation-main-choice {
                display: grid;
                grid-template-columns: repeat(2, minmax(auto, 320px));
                justify-content: space-evenly;
                grid-gap: 0px;

                padding: 25px 15px;
            }
        
            @media only screen and (max-width: 768px)  {	
                .navigation-main-choice {
                    grid-template-columns: 1fr;
                    grid-gap: 25px;
                }
            }	        

        `}</style>
    </div>
)

export default NavigationMainChoice
