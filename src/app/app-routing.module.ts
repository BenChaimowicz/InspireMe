import { CreateNewInspirationComponent } from './create-new-inspiration/create-new-inspiration.component';
import { InspireDisplayComponent } from './inspire-display/inspire-display.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'inspiration', component: InspireDisplayComponent },
  { path: 'create', component: CreateNewInspirationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
