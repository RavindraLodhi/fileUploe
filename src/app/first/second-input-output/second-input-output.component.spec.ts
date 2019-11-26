import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondInputOutputComponent } from './second-input-output.component';

describe('SecondInputOutputComponent', () => {
  let component: SecondInputOutputComponent;
  let fixture: ComponentFixture<SecondInputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondInputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
