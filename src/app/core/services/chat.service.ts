import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';

import { ChatResponseLatest, ChatResponseMore, MessageRequest, PostMessageRequest } from '../models';
import { LOAD_LATEST_MESSAGES, LOAD_MORE_MESSAGES, POST_MESSAGES } from '../queries';

@Injectable({
  providedIn: 'root',
})

export class ChatService {
  constructor(private appollo: Apollo) { };

  postMessage(params: PostMessageRequest): Observable<any> {
    return this.appollo.mutate<ChatResponseLatest | ChatResponseMore>({
      mutation: POST_MESSAGES,
      variables: params,
      fetchPolicy: 'network-only'
    });
  };
  
  getMessages(params: MessageRequest): Observable<any> {
    if (params.channelId && params.messageId) {
      return this.getMoreMessages(params);
    }
    return this.getLatestMessages(params);
  };

  getLatestMessages(params: MessageRequest): Observable<any> {
    return this.appollo.query<ChatResponseLatest | ChatResponseMore>({
      query: LOAD_LATEST_MESSAGES,
      variables: params,
      fetchPolicy: 'network-only'
    });
  };

  getMoreMessages(params: MessageRequest): Observable<any> {
    return this.appollo.query<ChatResponseLatest | ChatResponseMore>({
      query: LOAD_MORE_MESSAGES,
      variables: params,
      fetchPolicy: 'network-only'
    });
  };

}
