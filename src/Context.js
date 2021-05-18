import React, { Component } from 'react'
//import items from './data'
import client from './Contentful'



const RoomContext = React.createContext();


//<RoomContext.provider value = {'hello'}
 class RoomProvider extends Component {
     state  = {
        rooms : [],
        sortedRooms : [],
        featuredRooms : [],
        loading : true,
        pets:false,
        breakfast : false,
        type : "all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0



     };
     //get data
     getData = async ()=>{
         try {
             let response = await client.getEntries({
                 content_type : "beachResortRoom",
                 //order: 'sys.createdAt'
                 //order: 'fields.price' //ordering by price
                 order: '-fields.price' //reverse order
                })
             let rooms = this.formatData(response.items)
             console.log(response.items)
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => {return item.price}));
            let maxSize = Math.max(...rooms.map(item => {return item.size}));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize
        })
             
         } catch (error) {
            console.log(error)

             
         }
     }



    componentDidMount(){
        this.getData();
        
    }
    formatData (items){
        let tempItems = items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image =>
                image.fields.file.url);
            let room = {...item.fields , images , id}
            return room

        });
        return tempItems

    }
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        const rooms = tempRooms.find(room => room.slug === slug);
        return rooms
    };
    handleChange = (event) => {
        const target = event.target
        const value = (target.type === "checkbox" ? target.checked:target.value)
        console.log(event.target);
        console.log(event.type);
        //const type = event.target.type; //one
        const name = event.target.name; //type
        //const value = event.target.value; //double
       this.setState(
          { [name] : value },this.filterRooms ///[name=type] = value(=double)
       )

    };
    filterRooms =() =>{

        let {rooms,
            type,
            capacity,
            minSize,
            price,
            maxSize,
            breakfast,
            pets
        } = this.state;
        
        let tempRooms = [...rooms]
        // converting string in int
         capacity = parseInt(capacity);
         price = parseInt(price)

        
       
        //filter by types(all,sinle, doublee...)
        if(type != "all"){
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        //filter by capacity(1,2,3,..)
        if(capacity !== 1){
            tempRooms = tempRooms.filter(rooms  => rooms.capacity >= capacity)
            
        }
        //filter by price(200,400,600)
        tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by breakfast
    if(breakfast){
        tempRooms = tempRooms.filter(room => room.breakfast === true)
    }
    //filter by breakfast
    if(pets){
        tempRooms = tempRooms.filter(room => room.pets === true)
    }

    //filter by size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
    //change the state
        this.setState({
            sortedRooms : tempRooms
        })
    }
    render() {
      
        
        return (
           <RoomContext.Provider value = {{...this.state,
            getRoom : this.getRoom,
            handleChange : this.handleChange
        
        }}>{this.props.children}</RoomContext.Provider>
        )
    }
}
const RoomConsumer  = RoomContext.Consumer;
export{RoomConsumer , RoomProvider , RoomContext}
//Higher Oreder Function can be used for rendoring the data on another way

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context = {value}></Component>}
        </RoomConsumer>
    }

}