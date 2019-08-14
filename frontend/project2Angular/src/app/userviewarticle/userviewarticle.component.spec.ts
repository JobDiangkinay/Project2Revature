import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewarticleComponent } from './userviewarticle.component';

describe('UserviewarticleComponent', () => {
  let component: UserviewarticleComponent;
  let fixture: ComponentFixture<UserviewarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserviewarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
