import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlButtonComponent } from './url-button.component';

describe('UrlButtonComponent', () => {
  let component: UrlButtonComponent;
  let fixture: ComponentFixture<UrlButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
