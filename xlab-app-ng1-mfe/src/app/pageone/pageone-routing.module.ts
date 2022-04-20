import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageoneComponent } from './pageone.component';
import { PagesuboneComponent } from './pagesubone/pagesubone.component';
import { PagesubtwoComponent } from './pagesubtwo/pagesubtwo.component';

const routes: Routes = [
  {path:'',component:PageoneComponent},
  {path:'pagesubone',component:PagesuboneComponent,pathMatch:'full'},
  {path:'pagesubtwo',component:PagesubtwoComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageoneRoutingModule { }
