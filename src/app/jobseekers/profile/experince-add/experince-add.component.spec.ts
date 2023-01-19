import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperinceAddComponent } from './experince-add.component';

describe('ExperinceAddComponent', () => {
  let component: ExperinceAddComponent;
  let fixture: ComponentFixture<ExperinceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperinceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperinceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
