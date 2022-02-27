import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VesselListComponent } from './vessel-list/vessel-list.component';

const routes: Routes = [
  { path:'vessels', component:VesselListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [VesselListComponent]