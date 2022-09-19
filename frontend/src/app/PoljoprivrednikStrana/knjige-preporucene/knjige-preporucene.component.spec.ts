import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigePreporuceneComponent } from './knjige-preporucene.component';

describe('KnjigePreporuceneComponent', () => {
  let component: KnjigePreporuceneComponent;
  let fixture: ComponentFixture<KnjigePreporuceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigePreporuceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigePreporuceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
