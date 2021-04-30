import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloDiComponent } from './hello-di.component';

describe('HelloDiComponent', () => {
  let component: HelloDiComponent;
  let fixture: ComponentFixture<HelloDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloDiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
