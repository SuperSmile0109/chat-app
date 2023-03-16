import { Action } from '@ngrx/store';

import { ChatResponseLatest, ChatResponseMore, MessageRequest } from '../../models';

export enum ChatActionTypes {
  LoadGeneralChats = '[General Chats] Load General Chats',
  LoadGeneralChatsSuccess = '[General Chats] Load General Chats Success',
  LoadGeneralChatsFail = '[General Chats] Load General Chats Fail',

  LoadLGTMChats = '[LGTM Chats] Load LGTM Chats',
  LoadLGTMChatsSuccess = '[LGTM Chats] Load LGTM Chats Success',
  LoadLGTMChatsFail = '[LGTM Chats] Load LGTM Chats Fail',

  LoadTechnologyChats = '[Tech Chats] Load Tech Chats',
  LoadTechnologyChatsSuccess = '[Tech Chats] Load Tech Chats Success',
  LoadTechnologyChatsFail = '[Tech Chats] Load Tech Chats Fail',

  ClearMessages = '[Chats] Clear Chats',
}

export class LoadGeneralChats implements Action {
  readonly type = ChatActionTypes.LoadGeneralChats;
  constructor(public payload: MessageRequest) {}
}

export class LoadGeneralChatsSuccess implements Action {
  readonly type = ChatActionTypes.LoadGeneralChatsSuccess;
  constructor(public payload: ChatResponseLatest | ChatResponseMore) {}
}

export class LoadGeneralChatsFail implements Action {
  readonly type = ChatActionTypes.LoadGeneralChatsFail;
  constructor(public payload: any) {}
}

export class LoadLGTMChats implements Action {
  readonly type = ChatActionTypes.LoadLGTMChats;
  constructor(public payload: MessageRequest) {}
}

export class LoadLGTMChatsSuccess implements Action {
  readonly type = ChatActionTypes.LoadLGTMChatsSuccess;
  constructor(public payload: ChatResponseLatest | ChatResponseMore) {}
}

export class LoadLGTMChatsFail implements Action {
  readonly type = ChatActionTypes.LoadLGTMChatsFail;
  constructor(public payload: any) {}
}

export class LoadTechnologyChats implements Action {
  readonly type = ChatActionTypes.LoadTechnologyChats;
  constructor(public payload: MessageRequest) {}
}

export class LoadTechnologyChatsSuccess implements Action {
  readonly type = ChatActionTypes.LoadTechnologyChatsSuccess;
  constructor(public payload: ChatResponseLatest | ChatResponseMore) {}
}

export class LoadTechnologyChatsFail implements Action {
  readonly type = ChatActionTypes.LoadTechnologyChatsFail;
  constructor(public payload: any) {}
}

export class ClearMessages implements Action {
  readonly type = ChatActionTypes.ClearMessages;
}

export type ChatActions =
  | LoadGeneralChats
  | LoadGeneralChatsSuccess
  | LoadGeneralChatsFail
  | LoadLGTMChats
  | LoadLGTMChatsSuccess
  | LoadLGTMChatsFail
  | LoadTechnologyChats
  | LoadTechnologyChatsSuccess
  | LoadTechnologyChatsFail
  | ClearMessages;
