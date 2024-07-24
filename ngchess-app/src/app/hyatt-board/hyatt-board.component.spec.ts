import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyattBoardComponent } from './hyatt-board.component';

describe('HyattBoardComponent', () => {
  let component: HyattBoardComponent;
  let fixture: ComponentFixture<HyattBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HyattBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HyattBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
