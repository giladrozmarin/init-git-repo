import EventEmitter from "events";
import date from 'date.js'
import log from '@ajar/marker'

import {Flight} from './flight.mjs'

export class FlightManager extends EventEmitter{
    #counter = 0 
    #destinations = []
    constructor()
    {
        super()
    }
    
    flightsManager({number,origin,destination} = data){

         let flight = new Flight()
         flight.number=number
         flight.origin=origin
         flight.destination=destination
         log.magenta(`depart :`,flight.depart())
         this.#destinations.push(flight.destination)
         this.#counter++
         flight.arrive()
         flight.on('arrive' , (...args)=> {
         log.blue(`arrive:`, `${args[0]}`)
       })
    }

    get mycounter(){return this.#counter} 
    get mydestinations(){return [...new Set(this.#destinations)]}
}