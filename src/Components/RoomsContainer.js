/*import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomConsumer} from '../Context';
import Loading from './Loading';
//used for loading the page of all romms from nav tab

export default function RoomsContainer() {
    return (
      <div>
            <RoomConsumer>
                {value => {
                const {loading,sortedRooms,rooms} = value;
                console.log("in room container"+sortedRooms);
                if(loading){
                    return <Loading></Loading>}
                return(
                            <React.Fragment>
                                <RoomFilter rooms = {sortedRooms}></RoomFilter>
                                <RoomList rooms = {rooms}></RoomList>
                            </React.Fragment>
                        )
                    }
                }
            </RoomConsumer>
        </div>
        
    )
}
*/

//Higher Order Function

import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {withRoomConsumer} from '../Context';
import Loading from './Loading';

function RoomsContainer({context}){
    const {loading,sortedRooms,rooms} = context;
    if(loading){
        return <Loading></Loading>

    }
    return(
        <div>
            <RoomFilter rooms = {rooms}></RoomFilter>
            <RoomList rooms = {sortedRooms}></RoomList>
        </div>
    )


}
export default withRoomConsumer(RoomsContainer);
