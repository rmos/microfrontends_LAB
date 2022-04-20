import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesubtwoComponent } from './pagesubtwo.component';

describe('PagesubtwoComponent', () => {
  let component: PagesubtwoComponent;
  let fixture: ComponentFixture<PagesubtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesubtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesubtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
