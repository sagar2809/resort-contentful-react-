import React, { Component } from 'react'
import {RoomContext} from '../Context'
import Loading from './Loading';
import Rooms from './Rooms';
import Title from './Title';
//used contexttype to get the dATA... static contextType = RoomContext ,line no 14;


export default class FeaturedRooms extends Component {
    
    
    static contextType = RoomContext;
    render() {
        let {loading , featuredRooms:rooms}  =  this.context;
        rooms = rooms.map(room => {
            return <Rooms key={room.id} room = {room}></Rooms>
        })
        
        return (
            <section className = "featured-rooms">
                <Title title = "Featured Rooms"></Title>
                <div className = "featured-rooms-center">{loading?<Loading></Loading>:rooms}</div>

            </section>
            
        )
    }
}
