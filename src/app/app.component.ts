import { Component } from '@angular/core';
import { VesselService } from './vessel.service';
import { BsDatepickerModule,BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  title = 'vessel-project';

  lat=51.678418
  lng=7.809007
  iconUrl="assets/images/navigation.png"
  mapshow=false


  vesselData: any={
    sourcemmsi:null,
    navigationalstatus:null,
    rateofturn:null,
    speedoverground:null,
    courseoverground:null,
    shiptype:null,
    trueheading:null,
    maritime_area:null,
    ship_name:null,
    country:null,
    dt:null,
    location:null
   
  };

  vesselData2: any={
    sourcemmsi:null,
    navigationalstatus:null,
    rateofturn:null,
    speedoverground:null,
    courseoverground:null,
    trueheading:null,
    maritime_area:null,
    ship_name:null,
    country:null,
    dt:null,
    location:null
   
  };
  
  vesselData3: any={
    sourcemmsi:null,
    navigationalstatus:null,
    rateofturn:null,
    speedoverground:null,
    courseoverground:null,
    trueheading:null,
    maritime_area:null,
    ship_name:null,
    country:null,
    dt:null,
    location:null
   
  };

  bsValue = new Date();
   bsRangeValue: Date[];
   maxDate = new Date();
   minDate = new Date();



  // vesselmmsi=""
  func1=false;

  public vessels=[] as any;
  public vesselsmap=[] as any;
  public vesselspoly=[] as any;
 
  // let areas_array: {[key: string]: number}


  // let indexedArray: {[key: string]: number}

  indexedArray: {[key: string]: number[][] } = {
    port_de_brest: [   [
      -5.0712901,
      47.3944853
    ],
    [
      -7.0927745,
      49.7220773
    ],
    [
      -13.6845714,
      44.6160776
    ],
    [
      -9.8173839,
      43.3825802
    ],
    [
      -3.9726573,
      44.11313
    ],
    [
      -5.0712901,
      47.3944853
    ]],
    celtic_sea:  [
      [
        -5.7788086,
        50.1205781
      ],
      [
        -5.4492188,
        51.7134161
      ],
      [
        -7.1630859,
        51.8629239
      ],
      [
        -12.1508789,
        50.6250731
      ],
      [
        -12.6342773,
        48.4292006
      ],
      [
        -8.2177734,
        46.5890691
      ],
      [
        -4.9438477,
        48.004625
      ],
      [
        -5.7788086,
        50.1205781
      ]
    ]
  }
  


// // port= 'port_de_brest';
// areas_array={
// "port_de_brest":[   [
//   -5.0712901,
//   47.3944853
// ],
// [
//   -7.0927745,
//   49.7220773
// ],
// [
//   -13.6845714,
//   44.6160776
// ],
// [
//   -9.8173839,
//   43.3825802
// ],
// [
//   -3.9726573,
//   44.11313
// ],
// [
//   -5.0712901,
//   47.3944853
// ]],
// "port_rene":[ 
//   -5.0712901,
//   47.3944853
// ]
// };

searchPort=''
searchPort2=''
  constructor(private _vesselService:VesselService) { 
    // let searchPort='port_de_brest';
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }


  ngOnInit() {
    // this.vessels =this._vesselService.getVessels();
    // this._vesselService.getAllVessels()
    //                 .subscribe(data=>this.vessels = data );
  }


  onChoseLocation(event: any){
    // this._vesselService.getAllVessels()
    // .subscribe(data=>this.vessels = data );
  }

  func(){
    this.func1=true;
    this._vesselService.getAllVessels(this.vesselData)
    .subscribe(data=>this.vessels = data );
  
  }

  func2(){
    
    this.func1=false;
    this._vesselService.getVesselsPointsbyCountry(this.vesselData2)
    .subscribe(data=>this.vesselsmap = data );
  }

  
  func3(){
    console.log('rsr'+this.searchPort)
    for (let key in this.indexedArray){
      if (key == this.searchPort){
        console.log(this.indexedArray[this.searchPort]);
      }
    }
    this.func1=false;
    this._vesselService.getVesselsInsidePolygon(this.indexedArray[this.searchPort]).subscribe(data=>this.vesselsmap = data );
   
   
  }

  func4(){
    console.log('rsr'+this.searchPort2)
    for (let key in this.indexedArray){
      if (key == this.searchPort2){
        console.log(this.indexedArray[this.searchPort2]);
      }
    }
    console.log(this.bsRangeValue)
    this.func1=false;
    this._vesselService.getVesselsInsidePolygonDateRange(this.indexedArray[this.searchPort2],this.bsRangeValue).subscribe(data=>this.vesselsmap = data );
   
   
  }



}
