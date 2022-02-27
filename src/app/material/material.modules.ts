import { NgModule } from '@angular/core';
import  { MatSliderModule  } from '@angular/material/slider';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';


const MaterialComponents = [
  
    MatSliderModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule
];


@NgModule({
  declarations: [],
  imports: [  MaterialComponents],
  exports:[ MaterialComponents ]
})
export class MaterialModule { }
