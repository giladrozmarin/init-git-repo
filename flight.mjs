
import EventEmitter from "events";
import dayjs from 'dayjs'


export class Flight extends EventEmitter{

    number=''
    origin =''
    destination='' 
   
    constructor(number,origin,destination)
    {
      super()
      this.number = number
      this.origin = origin
      this.destination = destination
    }
      //getters number, origin & destination 

      get mynumber(){return this.number}
      get myorigin(){return this.origin}
      get mydestination(){return this.destination}
      
      //setters number, origin & destination 
      set mynumber(number) {this.number=number}
      set myorigin(origin) {this.origin=origin}
      set mydestination(destination) {this.destination=destination}

    
      //The Flight module will also have two public methods: depart() and arrive() 
      depart() {
        
        return dayjs().format("MMM.D-YYYY, HH:MM:ss")
      }
      arrive() {

          let r = 1500 + Math.random () * 3000
          setTimeout( () => this.emit('arrive',dayjs().format("MMM.D-YYYY, HH:MM:ss")), r);

      }

} 
