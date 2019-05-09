import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { modelsComponent } from './models/models.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about'},
  { path: 'about', component: AboutComponent },
  { path: 'models', component: modelsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
