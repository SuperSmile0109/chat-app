import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWrapperMessagesComponent } from './chat-wrapper-messages.component';

describe('ChatWrapperMessagesComponent', () => {
  let component: ChatWrapperMessagesComponent;
  let fixture: ComponentFixture<ChatWrapperMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatWrapperMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatWrapperMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
