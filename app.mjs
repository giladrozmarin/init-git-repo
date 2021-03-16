import {Flight} from './flight.mjs'
import { FlightManager } from './flightManager.mjs'
import log from '@ajar/marker'
import fs from 'fs';



fs.readFile('./flight-data.json', 'utf-8', (err,data) => {
    if(err) {
        log.red(err.message);}
        else {
        let flight  =  new FlightManager();
        let flights = JSON.parse(data);
        for (const x of flights.flights) {
          
                flight.flightsManager(x)
        }  
            log.magenta("=============================================")
            log.yellow(`${flight.mycounter}` ,`flights were created `)
            log.cyan('destinaions:' ,`${flight.mydestinations}`)
            log.magenta("=============================================")
        }
})

