import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageoneComponent } from './pageone/pageone.component';

const routes: Routes = [
  {path:'', component: PageoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
