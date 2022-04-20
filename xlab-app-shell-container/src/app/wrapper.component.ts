import { AfterContentInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

 
@Component({
    template: '<div #vc></div>'
})
export class WrapperComponent implements AfterContentInit {
    registry = {
        'mfer': () => import('mfer/web-components')
    };
  @ViewChild('vc', {read: ElementRef, static: true})
  vc!: ElementRef;

  constructor(private route: ActivatedRoute) { }

  ngAfterContentInit(): void {

    const importFn = this.registry['mfer'];
    importFn()
      .then(_ => console.debug(`element loaded!`))
      .catch(err => console.error(`error loading :`, err));

    const element = document.createElement("mfer-wc");
    this.vc.nativeElement.appendChild(element);

  }

}