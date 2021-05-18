//using hooks to get data from context api;


import React from 'react'
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from './Title';
//get All unique vale;
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))];
}
export default function RoomFilter({rooms}) {
    console.log({rooms})
    const context = useContext(RoomContext);
    const { 
        handleChange,
        type,
        capacity,
        breakfast,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        pets
    } = context;
    console.log("sagar")
    console.log({maxPrice})

    //get unique types
    let types = getUnique(rooms,'type');
    types = ["all" , ...types];
   types = types.map((item,index) => {
        return <option key = {index} value = {item}>{item}</option>
    })
    //get unique capacity
    let guest = getUnique(rooms,"capacity");
    guest = guest.map((item,index) => {
        return <option value = {item} key ={index}>{item}</option>
    })


    
    return (
        
       <section className= "filter-container">
           <Title  title = "search rooms"> </Title>
           <form className = "filter-form">
               {/* types with select option */}
               <div className = "form-group">
                    <label htmlFor="type">room type</label>
                    <select  className = "form-control" name = "type" id = "type" value = {type} onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* capacity with select option */}
               <div className = "form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select  className = "form-control" name = "capacity" id = "capacity" value = {capacity} onChange={handleChange}>
                        {guest}
                    </select>
                </div>
                {/*price filter*/}
                <div className = "form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range"
                     name = "price" 
                     max={maxPrice} 
                     min={minPrice} 
                     value ={price} 
                     className="form-control"
                     id="price"
                     onChange={handleChange}
                     ></input>

                </div>
                {/*size filter */}
                <div className = "form-group">
                    <label htmlFor="size">room size</label>
                    <div className = "size-inputs">
                        <input className="size-input" 
                        type="number" 
                        name="minSize"
                        id ="size"
                        value={minSize}
                        onChange={handleChange}
                        >
                        </input>
                        <input className="size-input" 
                        type="number" 
                        name="maxSize"
                        id ="size"
                        value={maxSize}
                        onChange={handleChange}
                        >
                        </input>

                    </div>
                    </div>
                    {/*extras */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type ="checkbox" name="breakfast" id ="breakfast" checked={breakfast} onChange={handleChange}></input>
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input type ="checkbox" name="pets" id ="pets" checked={pets} onChange={handleChange}></input>
                            <label htmlFor="pets">pets</label>
                        </div>


                    </div>

               
                

             </form>

               
          

       </section>
    )
}
