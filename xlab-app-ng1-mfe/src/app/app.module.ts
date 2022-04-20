import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PageoneModule } from './pageone/pageone.module';

@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
