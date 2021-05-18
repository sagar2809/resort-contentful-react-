import React from 'react'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import{Link} from 'react-router-dom'

export default function Error() {
    return (
        <Hero>
            <Banner title="404" subtitle ="Page Not Found">
                <Link to = '/' className ="btn-primary">return Home</Link>
            </Banner>
        </Hero>
    )
}
