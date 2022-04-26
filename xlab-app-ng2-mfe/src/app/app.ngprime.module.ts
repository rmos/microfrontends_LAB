import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    exports: [
        InputTextModule,
        ButtonModule,
        CheckboxModule
    ]
})
export class NgPrimeModule { }
