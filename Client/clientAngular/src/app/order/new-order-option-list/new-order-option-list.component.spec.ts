import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderOptionListComponent } from './new-order-option-list.component';

describe('NewOrderOptionListComponent', () => {
  let component: NewOrderOptionListComponent;
  let fixture: ComponentFixture<NewOrderOptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrderOptionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
