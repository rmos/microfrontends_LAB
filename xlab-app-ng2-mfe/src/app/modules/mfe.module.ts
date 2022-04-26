import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MfeComponent } from '../components/mfe.component';
import { NgPrimeModule } from './../app.ngprime.module';
import { MfeRoutingModule } from './mfe-routing.module';


@NgModule({
  declarations: [
    MfeComponent
  ],
  exports: [
    NgPrimeModule
  ],
  imports: [
    RouterModule,
    MfeRoutingModule,
    NgPrimeModule
  ]
})
export class MfeModule { }