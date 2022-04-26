import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeComponent } from './components/mfe.component';

const routes: Routes = [
  {
    path: '', 
    component: MfeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
