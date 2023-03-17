import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSelectChannelComponent } from './chat-select-channel.component';
import { findEl } from 'src/app/core/spec-helpers/chat.spec-helper';

describe('ChatSelectChannelComponent', () => {
  let component: ChatSelectChannelComponent;
  let fixture: ComponentFixture<ChatSelectChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatSelectChannelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatSelectChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should select/emit channel', () => {
    spyOn(component.selectedChannel, 'emit');
    findEl(fixture, 'channel-button').triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.selectedChannel.emit).toHaveBeenCalled();
  });
});
