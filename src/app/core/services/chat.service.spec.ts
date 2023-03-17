import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';

import { ChatService } from './chat.service';
import { LOAD_LATEST_MESSAGES, LOAD_MORE_MESSAGES } from '../queries';
import { messages } from '../spec-helpers/chat.spec-helper';
import { MessageRequest } from '../models';

describe('ChatService', () => {
  let service: ChatService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [ChatService],
    });
    service = TestBed.inject(ChatService);
    controller = TestBed.inject(ApolloTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch messages', () => {
    service.getLatestMessages({ channelId: "1" }).subscribe((server_messages) => {
      expect(server_messages.data).toEqual(messages);
    });

    const req = controller.expectOne(LOAD_LATEST_MESSAGES);
    req.flushData(messages);
    controller.verify();
  });

  xit('should fetch more messages', () => {
    const params: MessageRequest = { channelId: "1", messageId: "7441760356450402007", old: true };
    service.getLatestMessages(params).subscribe((server_messages) => {
      expect(server_messages.data).toEqual(messages);
    });

    const req = controller.expectOne(LOAD_MORE_MESSAGES);
    req.flushData(messages);
    controller.verify();
  });
});
