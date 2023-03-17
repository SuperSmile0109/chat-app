import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, switchMap, map, catchError, of } from 'rxjs';

import * as chatActions from './chat.actions';
import { ChatService } from '../../services/chat.service';

@Injectable()

export class ChatEffects {
  constructor(private _actions$: Actions, private _chatService: ChatService) { };

  loadGeneralChat$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType<chatActions.LoadGeneralChats>(
        chatActions.ChatActionTypes.LoadGeneralChats,
      ),
      switchMap(action =>
        this._chatService.getMessages(action.payload).pipe(
          map(items => new chatActions.LoadGeneralChatsSuccess(items)),
          catchError(error =>
            of(new chatActions.LoadGeneralChatsFail(error)),
          ),
        ),
      ),
    ),
  );

  loadLGTMChat$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType<chatActions.LoadLGTMChats>(
        chatActions.ChatActionTypes.LoadLGTMChats,
      ),
      switchMap(action =>
        this._chatService.getMessages(action.payload).pipe(
          map(items => new chatActions.LoadLGTMChatsSuccess(items)),
          catchError(error =>
            of(new chatActions.LoadLGTMChatsFail(error)),
          ),
        ),
      ),
    ),
  );

  loadTechnologyChat$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType<chatActions.LoadTechnologyChats>(
        chatActions.ChatActionTypes.LoadTechnologyChats,
      ),
      switchMap(action =>
        this._chatService.getMessages(action.payload).pipe(
          map(items => new chatActions.LoadTechnologyChatsSuccess(items)),
          catchError(error =>
            of(new chatActions.LoadTechnologyChatsFail(error)),
          ),
        ),
      ),
    ),
  );
  
}
