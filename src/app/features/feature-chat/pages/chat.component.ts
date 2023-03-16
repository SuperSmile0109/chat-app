import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Channel,
  MessageRequest,
  MessageResponse,
  PostMessageRequest,
  User,
} from 'src/app/core/models';
import { ChatService } from 'src/app/core/services/chat.service';
import {
  ClearMessages,
  LoadGeneralChats,
  LoadLGTMChats,
  LoadTechnologyChats,
  getGeneralChats,
  getLGTMChats,
  getTechnologyChats,
} from 'src/app/core/store/chat-store';
import { AppState } from 'src/app/core/store/root-state';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  channel!: Channel;
  user!: User;
  old!: boolean;
  message: any;
  messages!: MessageResponse[];
  loading: boolean = false;
  chatDetails: any = {};

  constructor(
    private chatService: ChatService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  setSelectedUser(event: any): void {
    this.user = event;
    this.chatDetails = { ...this.chatDetails, user: this.user };
  }

  setSelectedChannel(event: any): void {
    this.channel = event;
    this.chatDetails = { ...this.chatDetails, channel: this.channel };
    this.user && this.getMessages({ channelId: this.channel.channelId });
  }

  postUserMessage(event: any): void {
    if (this.channel && this.user) {
      const data: PostMessageRequest = {
        channelId: this.channel.channelId,
        text: event.message,
        userId: this.user.userId,
      };

      this.chatService.postMessage(data).subscribe({
        next: ({ data }) => {
          if (data) {
            this.getMessages({ channelId: this.channel.channelId });
          }
        },
        error: (error) => {
          if (error) {
            this.messages.push({
              ...data,
              notsent: true,
              messageId: '',
              datetime: new Date().toString(),
            });
          }
        },
      });
    }
  }

  readMoreMessages(event: any): void {
    this.old = event;
    let data: MessageRequest = {
      channelId: this.channel.channelId,
      old: this.old,
      messageId: this.old
        ? this.messages[0].messageId
        : this.messages[this.messages.length - 1].messageId,
    };
    this.getMessages(data);
  }

  getMessages(payload: MessageRequest): void {
    const fetchMore = payload.messageId && payload.old ? true : false;
    switch (payload.channelId) {
      case '1':
        this.store.dispatch(new LoadGeneralChats(payload));
        this.store
          .select(getGeneralChats)
          .subscribe((value: any) => this.sortMessages(value, fetchMore));
        break;

      case '2':
        this.store.dispatch(new LoadLGTMChats(payload));
        this.store
          .select(getLGTMChats)
          .subscribe((value: any) => this.sortMessages(value, fetchMore));
        break;

      case '3':
        this.store.dispatch(new LoadTechnologyChats(payload));
        this.store
          .select(getTechnologyChats)
          .subscribe((value: any) => this.sortMessages(value, fetchMore));
        break;

      default:
        break;
    }
  }

  sortMessages(messageValue: any, fetchMore: boolean): void {
    if (messageValue) {
      let data = messageValue.data;
      let message_arr = fetchMore ? data.fetchMoreMessages : data.fetchLatestMessages;

      if (message_arr) {
        let new_messages = [...message_arr].reverse();

        if (fetchMore) {
          this.messages = this.old
            ? [...new_messages, ...this.messages]
            : [...this.messages, ...new_messages];
        } else {
          this.messages = [...new_messages];
        }

        this.store.dispatch(new ClearMessages());
      }


    }
  }
}
