import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'chat-readmore-button',
  templateUrl: './chat-readmore-button.component.html',
  styleUrls:["./chat-readmore-button.component.scss"]
})
export class ChatReadmoreButtonComponent implements OnInit {

  @Input() old: boolean | undefined
  @Output() readMoreMessage = new EventEmitter();
  @Output() moveScroll = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  readMoreMessages(old: boolean | undefined) {
    this.readMoreMessage.emit(old);
    this.moveScroll.emit();
  }

}
