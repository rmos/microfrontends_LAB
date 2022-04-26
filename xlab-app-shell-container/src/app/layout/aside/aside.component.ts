import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor() { }

  expandedMenu: boolean[] = [];
  

  public toggleMenu(e: Event, index: number) {
    console.log(e);
    //@ts-ignore
    console.log(e.delegateTarget.ariaExpanded);
    //@ts-ignore
    this.expandedMenu[index] = e.delegateTarget.ariaExpanded === 'true';
    console.log('dsdsd', index +'_'+ this.expandedMenu[index]);
    console.log('array', this.expandedMenu);

  }

  ngOnInit(): void {
    this.expandedMenu[0] = true;
    console.log('array', this.expandedMenu);
  }

}
