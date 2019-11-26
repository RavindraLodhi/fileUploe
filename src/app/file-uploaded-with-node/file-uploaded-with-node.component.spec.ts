import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadedWithNodeComponent } from './file-uploaded-with-node.component';

describe('FileUploadedWithNodeComponent', () => {
  let component: FileUploadedWithNodeComponent;
  let fixture: ComponentFixture<FileUploadedWithNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadedWithNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadedWithNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
