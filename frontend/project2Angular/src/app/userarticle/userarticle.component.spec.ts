import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserarticleComponent } from './userarticle.component';

describe('UserarticleComponent', () => {
  let component: UserarticleComponent;
  let fixture: ComponentFixture<UserarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
