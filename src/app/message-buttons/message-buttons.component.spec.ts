import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageButtonsComponent } from './message-buttons.component';

describe('MessageButtonsComponent', () => {
  let component: MessageButtonsComponent;
  let fixture: ComponentFixture<MessageButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
