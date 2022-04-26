import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { MfeModule } from 'src/app/modules/mfe.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MfeModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

