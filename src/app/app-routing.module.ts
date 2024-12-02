import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { TripsViewComponent } from './trips-view/trips-view.component';
//* Imports

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'trips', component: TripsViewComponent },
  //* Routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
