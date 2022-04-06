import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactComponent } from './components/react/react.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'react',
    component: ReactComponent
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

