import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreporuciKnjiguComponent } from './preporuci-knjigu.component';

describe('PreporuciKnjiguComponent', () => {
  let component: PreporuciKnjiguComponent;
  let fixture: ComponentFixture<PreporuciKnjiguComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreporuciKnjiguComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreporuciKnjiguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
