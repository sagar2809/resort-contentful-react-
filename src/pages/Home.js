import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import Service from '../Components/Service'
import FeaturedRooms from '../Components/FeaturedRooms'

export default function Home() {
    return (
        <React.Fragment>
               <Hero><Banner title = "luxurious room" subtitle ="deluxe rooms starting from Rs 2000">
            <Link to = '/rooms' className="btn-primary">Our Rooms</Link>
            </Banner></Hero>
            <Service></Service>
            <FeaturedRooms></FeaturedRooms>
        </React.Fragment>
     
           
    )
}
