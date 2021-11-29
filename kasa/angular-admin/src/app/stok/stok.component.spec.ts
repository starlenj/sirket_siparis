import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokComponent } from './stok.component';

describe('StokComponent', () => {
  let component: StokComponent;
  let fixture: ComponentFixture<StokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
