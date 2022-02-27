export interface IVessel {
    sourcemmsi:string,
    navigationalstatus:number,
    rateofturn:number,
    speedoverground:number,
    courseoverground:number,
    trueheading:number,
    maritime_area:null,
    shiptype:string,
    ship_name:string,
    country:string,
    dt:Date,
    location:corr
}

interface corr {
   type: string,
    
    coordinates:[],
}

