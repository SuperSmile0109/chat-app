import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/app/core/models';

@Component({
  selector: 'chat-wrapper-header',
  templateUrl: './chat-wrapper-header.component.html'
})
export class ChatWrapperHeaderComponent implements OnInit {

  @Input() channel!: Channel

  constructor() { }

  ngOnInit(): void {
  }

}
