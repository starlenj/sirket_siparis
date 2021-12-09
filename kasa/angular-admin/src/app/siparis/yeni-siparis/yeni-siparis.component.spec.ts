import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniSiparisComponent } from './yeni-siparis.component';

describe('YeniSiparisComponent', () => {
  let component: YeniSiparisComponent;
  let fixture: ComponentFixture<YeniSiparisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeniSiparisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeniSiparisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
