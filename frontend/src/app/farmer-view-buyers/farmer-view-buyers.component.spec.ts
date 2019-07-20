import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerViewBuyersComponent } from './farmer-view-buyers.component';

describe('FarmerViewBuyersComponent', () => {
  let component: FarmerViewBuyersComponent;
  let fixture: ComponentFixture<FarmerViewBuyersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerViewBuyersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerViewBuyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
