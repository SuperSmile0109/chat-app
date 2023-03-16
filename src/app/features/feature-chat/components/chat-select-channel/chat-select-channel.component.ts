import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Channel } from 'src/app/core/models';

@Component({
  selector: 'chat-select-channel',
  templateUrl: './chat-select-channel.component.html'
})
export class ChatSelectChannelComponent implements OnInit {

  @Output() selectedChannel = new EventEmitter<any>();

  channels: Channel[] = [
    {
      channelId: '1',
      channelValue: 'General',
      active: false
    },
    {
      channelId: '2',
      channelValue: 'LGTM',
      active: false
    },
    {
      channelId: '3',
      channelValue: 'Technology',
      active: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getSelectedChannel(channel: Channel): void {
    this.channels.forEach(channel => channel.active = false);
    channel.active = true;
    this.selectedChannel.emit(channel);
  }

}
