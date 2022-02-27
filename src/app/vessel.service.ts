import { Injectable } from '@angular/core';

import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { IVessel } from './vessel';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VesselService {

  private _vesels="http://localhost:3000/api/vessels"
  private _veselsbycount="http://localhost:3000/api/vesselsbycountry"
  private _vesselsinspol="http://localhost:3000/api/vesselsinsidepolygon"
  private _vesselsinspoldate="http://localhost:3000/api/vesselsinsidepolygondate"
  // private _url:string ="/assets/data/vessels.json";
  
  constructor(private http:HttpClient) { }

  // getVessels(){
  //   return [
  //     {"sourcemmsi":"245257000",
  //     "navigationalstatus":0,
  //     "rateofturn":0,
  //     "speedoverground":0.1,
  //     "courseoverground":13.1,
  //     "trueheading":36,
  //     "maritime_area":null,
  //     "ship_name":null,
  //     "country_code":"245",
  //     "date":{"$numberLong":"1443650402000"},
  //     "location":{"type":"Point",
  //                   "coordinates":[48.38249,-4.4657183]}
  //                 }
  //   ];
  // }

getAllVessels(vessel:any){
  console.log("country is:"+vessel)

  return this.http.post<any>(this._vesels,vessel ) 
                    .pipe(catchError(this.errorHandler))

}

getVesselsPointsbyCountry(vessel:any){
  console.log("country is:"+vessel.country)

  return this.http.post<any>(this._veselsbycount,vessel ) 
                    .pipe(catchError(this.errorHandler))

}

getVesselsInsidePolygon(vessel:any){
  console.log("coords of poly:"+vessel)

  return this.http.post<any>(this._vesselsinspol,vessel ) 
                    .pipe(catchError(this.errorHandler))

}
getVesselsInsidePolygonDateRange(vessel:any,date:any){
  console.log("coords of poly with Range:"+vessel)
  console.log("dateRange:"+date)
  return this.http.post<any>(this._vesselsinspoldate,{date,vessel} ) 
                    .pipe(catchError(this.errorHandler))

}


errorHandler(error: HttpErrorResponse){
  return throwError(error);
}


}
