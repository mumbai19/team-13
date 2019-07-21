import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertPortalComponent } from './expert-portal.component';

describe('ExpertPortalComponent', () => {
  let component: ExpertPortalComponent;
  let fixture: ComponentFixture<ExpertPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
