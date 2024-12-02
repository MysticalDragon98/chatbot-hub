import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveMessageComponent } from './interactive-message.component';

describe('InteractiveMessageComponent', () => {
  let component: InteractiveMessageComponent;
  let fixture: ComponentFixture<InteractiveMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
