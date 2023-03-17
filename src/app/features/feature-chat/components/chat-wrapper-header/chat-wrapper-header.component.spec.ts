import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWrapperHeaderComponent } from './chat-wrapper-header.component';

describe('ChatWrapperHeaderComponent', () => {
  let component: ChatWrapperHeaderComponent;
  let fixture: ComponentFixture<ChatWrapperHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatWrapperHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatWrapperHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
