import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail , FaHiking ,FaShuttleVan ,FaBeer } from 'react-icons/fa'

export default class Service extends Component {
    state ={
        services :[
            {
                icon :<FaCocktail></FaCocktail>,
                title : "free cockTail",
                info : 'Lorem info frre coikm nhyuo ankjk hojnh ngkd hohksk jhoshnns hhwh hiuhkhk hhd ddhujlk'
            },
            {
                icon :<FaBeer></FaBeer>,
                title : "Strongest Beer",
                info : 'Lorem info frre coikm nhyuo ankjk hojnh ngkd hohksk jhoshnns hhwh hiuhkhk hhd ddhujlk'
            },
            {
                icon :<FaHiking></FaHiking>,
                title : "EndLess Hiking",
                info : 'Lorem info frre coikm nhyuo ankjk hojnh ngkd hohksk jhoshnns hhwh hiuhkhk hhd ddhujlk'
            },
            {
                icon :<FaShuttleVan></FaShuttleVan>,
                title : "free ShuttleVan",
                info : 'Lorem info frre coikm nhyuo ankjk hojnh ngkd hohksk jhoshnns hhwh hiuhkhk hhd ddhujlk'
            }
        ]
    }
    render() {
        
        return (
            <section className = "services">
                 <Title title="Services"></Title>
                 <div className = "services-center">
                     {this.state.services.map( (item , index)=> {
                         return <article key ={index} className = "service">
                             <span>{item.icon}</span>
                             <h6>{item.title}</h6>
                             <p>{item.info}</p>
                         </article>
                         

                     })}

                 </div>

            </section>
           
        )
    }
}
