import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesuboneComponent } from './pagesubone.component';

describe('PagesuboneComponent', () => {
  let component: PagesuboneComponent;
  let fixture: ComponentFixture<PagesuboneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesuboneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesuboneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
