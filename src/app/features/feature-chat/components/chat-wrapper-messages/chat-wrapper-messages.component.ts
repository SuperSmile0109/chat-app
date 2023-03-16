import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MessageResponse, User } from 'src/app/core/models';

@Component({
  selector: 'chat-wrapper-messages',
  templateUrl: './chat-wrapper-messages.component.html'
})
export class ChatWrapperMessagesComponent implements OnInit {

  @Input() messages: MessageResponse[] = [];
  @Input() user!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
