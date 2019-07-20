import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerVideosComponent } from './farmer-videos.component';

describe('FarmerVideosComponent', () => {
  let component: FarmerVideosComponent;
  let fixture: ComponentFixture<FarmerVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
