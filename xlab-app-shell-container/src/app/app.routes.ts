import { Routes } from '@angular/router';
import { ReactComponent } from './components/react/react.component';
import { ConfigComponent } from './config/config.component';
import { WrapperComponent } from './wrapper.component';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';


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
  /*{
    path: 'mfer',
    component: WrapperComponent
  }*/
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