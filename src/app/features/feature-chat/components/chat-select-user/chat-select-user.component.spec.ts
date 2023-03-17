import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ChatSelectUserComponent } from './chat-select-user.component';
import { findEl, setFieldValue } from 'src/app/core/spec-helpers/chat.spec-helper';

describe('ChatSelectUserComponent', () => {
  let component: ChatSelectUserComponent;
  let fixture: ComponentFixture<ChatSelectUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatSelectUserComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatSelectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit/get selected user', () => {
    // Spy on event function
    spyOn(component, 'getSelectedUser');

    // Set values
    setFieldValue(fixture, 'user-id', 'Russell');
    fixture.detectChanges();

    // Trigger event
    findEl(fixture, 'form').triggerEventHandler('change', {});
    fixture.detectChanges();
    expect(component.getSelectedUser).toHaveBeenCalled();
  });
});
