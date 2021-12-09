import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiparisListComponent } from './siparis-list.component';

describe('SiparisListComponent', () => {
  let component: SiparisListComponent;
  let fixture: ComponentFixture<SiparisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiparisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiparisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
