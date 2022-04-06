import { Component, AfterViewInit } from '@angular/core';
// @ts-ignore
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'xlab-app-shell';

  ngAfterViewInit() {
    Feather.replace();
  }

}
