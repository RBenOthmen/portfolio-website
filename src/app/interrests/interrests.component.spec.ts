import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterrestsComponent } from './interrests.component';

describe('InterrestsComponent', () => {
  let component: InterrestsComponent;
  let fixture: ComponentFixture<InterrestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterrestsComponent]
    });
    fixture = TestBed.createComponent(InterrestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
