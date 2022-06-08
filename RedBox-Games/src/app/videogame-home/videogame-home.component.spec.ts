import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameHomeComponent } from './videogame-home.component';

describe('VideogameListComponent', () => {
  let component: VideogameHomeComponent;
  let fixture: ComponentFixture<VideogameHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogameHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
