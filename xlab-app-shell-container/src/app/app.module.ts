import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { AsideComponent } from './layout/aside/aside.component';
import { ReactComponent } from './components/react/react.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ConfigComponent } from './config/config.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  imports: [
    BrowserModule,
    NgChartsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    AsideComponent,
    ReactComponent,
    NotfoundComponent,
    ConfigComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
