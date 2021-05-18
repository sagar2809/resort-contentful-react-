//while click on features room it will dispaly the rooms inmfo matching with slug
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultBcg from '../images/room-1.jpeg'
import {RoomContext} from '../Context';
import { Link } from 'react-router-dom';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import StyledHero from '../Components/StyledHero';

class SingleRoom extends Component {
    static contextType = RoomContext;

    constructor(props) {
        super(props);
        this.state = {
            slug : this.props.match.params.slug,
            defaultBcg


        }

    }

    componentWillMount() {

    }



    render() {

        let {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        
        if (!room){
            return ( <div className = "error"><h3>no such rooms</h3>
            <Link to = '/rooms' className = "btn-primary">Back to room</Link>
            
            </div> )
            
        }
        const {name,description,capacity,size,price,pets,images,breakfast,extras} = room;
        const [mainImg , ...defaultImg] = images;
        return (
            <React.Fragment>
                <StyledHero img = {mainImg}>
                <Banner title = {`${name} rooms`}>
                    <Link to = '/rooms' className= "btn-primary">Back to Rooms</Link>

                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className = "single-room-images">
                    {defaultImg.map((item, index) => {
                        
                        return <img key={index} src={item}  alt={name}></img>
                        
                    })}

                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className ="info">
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : {size} sqft</h6>
                        <h6>
                            max capacity : {" "}
                            {
                                capacity > 1 ? `${capacity} people`: `${capacity} person`

                            }
                             
                        </h6>
                        <h6>
                            {pets ? "pets allowed" : "No Pets allowed"}
                        </h6>
                        <h6>
                            {breakfast && "free breakfast included"}
                        </h6>

                    </article>

                </div>

            </section>
            <section className="room-extras">
                <h6>
                    extras
                </h6>
                <ul className="extras">
                    {extras.map((item,index) =>{
                        return <li key = {index}>-{item}</li>
                    } )}

                </ul>

            </section>

            </React.Fragment>
            
        );
    }
}

SingleRoom.propTypes = {

};

export default SingleRoom;