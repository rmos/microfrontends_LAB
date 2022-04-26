import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeComponent } from '../components/mfe.component';

const routes: Routes = [
  /*{path: '', component: MfeComponent},*/
  {
    path:'', 
    component: MfeComponent,
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      },
      {
        path: 'login',
        loadChildren: () => import('src/app/components/login/login.module').then(m => m.LoginModule),
        //canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MfeRoutingModule { }
