import React from 'react'
import Rooms from './Rooms';

export default function RoomList({rooms}) {
    console.log("In room")
    console.log({rooms})
    
    
    
    
    if(rooms.length === 0){
        return (
        <div className="empty-search">
            <h3>Unfortunately no rooms are available</h3>
        </div>
        )

    }
    return (
       
       <section className = "roomslist">
           <div className = "roomslist-center">
               {
                   rooms.map(item => {
                       return <Rooms key = {item.id} room ={item}></Rooms>
                   })
               }
               
          

           </div>

       </section>
        
    )
}
