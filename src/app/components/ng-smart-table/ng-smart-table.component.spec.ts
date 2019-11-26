import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSmartTableComponent } from './ng-smart-table.component';

describe('NgSmartTableComponent', () => {
  let component: NgSmartTableComponent;
  let fixture: ComponentFixture<NgSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSmartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
