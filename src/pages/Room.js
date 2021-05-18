import React from 'react'
import Hero from '../Components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../Components/Banner'
import RoomsContainer from '../Components/RoomsContainer'


export default function Room() {
    return (
        <React.Fragment>
            <Hero hero="roomsHero">
           <Banner title = "our Rooms">
               <Link to ="/" className = "btn-primary">return Home</Link>
           </Banner>
       </Hero>
       
       <RoomsContainer></RoomsContainer>
        </React.Fragment>
       
    )
}
