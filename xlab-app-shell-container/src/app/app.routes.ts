import { Routes } from '@angular/router';
import { ReactComponent } from './components/react/react.component';
import { ConfigComponent } from './config/config.component';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const APP_ROUTES: Routes = [
  {
    path: 'react',
    component: ReactComponent,
    pathMatch: 'full'
  },
  {
    path: 'config',
    component: ConfigComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'react1',
    component: WebComponentWrapper,
    data: {
      //type: 'module',
      remoteEntry: 'http://localhost:5003/remoteEntry.js',
      remoteName: 'mfer',
      exposedModule: './web-components',
      elementName: 'mfer-wc'
    } as WebComponentWrapperOptions
  },
  
];