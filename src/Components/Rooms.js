//it contain the Featured rooms info in home page
import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Rooms({room}) {
    let {name , slug ,price,images} = room;
    return (
        <article className ="room">
            <div className ="img-container">
                <img src ={images[0] } alt = "single room"></img>
                <div className ="price-top"><h6>${price}</h6><p>per night</p></div>
                <Link to = {`/rooms/${slug}`} className ="btn-primary room-link">Features</Link>
                <p className ="room-info">{name}</p> 
                

            </div>

        </article>
    )
}
Rooms.propTypes = {
    room : PropTypes.shape({
        name : PropTypes.string.isRequired,
        slug : PropTypes.string.isRequired,
        images  : PropTypes.arrayOf(PropTypes.string).isRequired,
        price :PropTypes.number.isRequired
    })
}
