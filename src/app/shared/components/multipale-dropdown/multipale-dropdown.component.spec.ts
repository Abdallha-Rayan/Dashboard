import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipaleDropdownComponent } from './multipale-dropdown.component';

describe('MultipaleDropdownComponent', () => {
  let component: MultipaleDropdownComponent;
  let fixture: ComponentFixture<MultipaleDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipaleDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipaleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
