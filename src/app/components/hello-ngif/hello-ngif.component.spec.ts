import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloNgifComponent } from './hello-ngif.component';

describe('HelloNgifComponent', () => {
  let component: HelloNgifComponent;
  let fixture: ComponentFixture<HelloNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
