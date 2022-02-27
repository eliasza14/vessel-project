import { Component, OnInit } from '@angular/core';
import { VesselService } from '../vessel.service';

@Component({
  selector: 'app-vessel-list',
  template: `
    <p>
      vessel-list works!
    </p>
    
    <ul *ngFor="let vessel of vessels">
    <li>SourceMMsi: {{vessel._id}}</li> 
    <li>ShipName:{{ vessel.ship_name}}
     <li>Status:{{vessel.navigationalstatus}}</li>
     <li>location lon:{{vessel.location.coordinates[0]}}
     <li>location lat:{{vessel.location.coordinates[1]}}
    </ul>
  `,
  styles: [
  ]
})


export class VesselListComponent implements OnInit {

 
  public vessels=[] as any;

  constructor(private _vesselService:VesselService) { }

  ngOnInit() {
    // this.vessels =this._vesselService.getVessels();
    // this._vesselService.getAllVessels()
    //                 .subscribe(data=>this.vessels = data );
  }

  

}
