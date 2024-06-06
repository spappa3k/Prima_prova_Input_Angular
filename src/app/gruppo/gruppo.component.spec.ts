import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruppoComponent } from './gruppo.component';

describe('GruppoComponent', () => {
  let component: GruppoComponent;
  let fixture: ComponentFixture<GruppoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GruppoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
