import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebLateralMenuComponent } from './web-lateral-menu.component';

describe('WebLateralMenuComponent', () => {
  let component: WebLateralMenuComponent;
  let fixture: ComponentFixture<WebLateralMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebLateralMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebLateralMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
