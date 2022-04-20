import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageoneRoutingModule } from './pageone-routing.module';
import { PagesuboneComponent } from './pagesubone/pagesubone.component';
import { PagesubtwoComponent } from './pagesubtwo/pagesubtwo.component';


@NgModule({
  declarations: [
    PagesuboneComponent,
    PagesubtwoComponent
  ],
  imports: [
    CommonModule,
    PageoneRoutingModule
  ]
})
export class PageoneModule { }
