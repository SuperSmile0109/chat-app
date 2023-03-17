import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWrapperTextareaComponent } from './chat-wrapper-textarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { setFieldValue, findEl } from 'src/app/core/spec-helpers/chat.spec-helper';

describe('ChatWrapperTextareaComponent', () => {
  let component: ChatWrapperTextareaComponent;
  let fixture: ComponentFixture<ChatWrapperTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatWrapperTextareaComponent ],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatWrapperTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit/get user message', () => {
    // Spy on event function
    spyOn(component, 'getUserMessage');

    // Set values
    setFieldValue(fixture, 'message-value', 'Hello');
    fixture.detectChanges();

    // Trigger event
    findEl(fixture, 'form').triggerEventHandler('submit', {});
    fixture.detectChanges();
    expect(component.getUserMessage).toHaveBeenCalled();
  });
});
