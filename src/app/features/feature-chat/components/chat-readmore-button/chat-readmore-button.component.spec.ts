import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatReadmoreButtonComponent } from './chat-readmore-button.component';
import { findEl } from 'src/app/core/spec-helpers/chat.spec-helper';

describe('ChatReadmoreButtonComponent', () => {
  let component: ChatReadmoreButtonComponent;
  let fixture: ComponentFixture<ChatReadmoreButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatReadmoreButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatReadmoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should select/emit button click', () => {
    spyOn(component.readMoreMessage, 'emit');
    findEl(fixture, 'more-button').triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.readMoreMessage.emit).toHaveBeenCalled();
  });
});
