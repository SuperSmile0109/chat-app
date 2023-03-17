import { ActionReducerMap } from '@ngrx/store';

import { AppState } from './root-state';
import { chatReducer } from './chat-store';

export const appReducers: ActionReducerMap<AppState, any> = {
  chat: chatReducer,
};
