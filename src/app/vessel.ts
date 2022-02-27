export interface IVessel {
    sourcemmsi:string,
    navigationalstatus:number,
    rateofturn:number,
    speedoverground:number,
    courseoverground:number,
    trueheading:number,
    maritime_area:null,
    ship_name:string,
    country:string,
    date:number
    location:corr
}

interface corr {
   type: string,
    
    coordinates:[],
}

