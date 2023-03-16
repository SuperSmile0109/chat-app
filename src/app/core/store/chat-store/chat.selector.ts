import { createSelector } from '@ngrx/store';
import { ChatData } from '.';
import { AppState } from '../root-state';

const getChatState = (state: AppState): ChatData => state.chat;

export const getChatLoading = createSelector(
  getChatState,
  (state) => state.isLoading
);

export const getChatError = createSelector(
  getChatState,
  (state) => state.error
);

export const getGeneralChats = createSelector(
  getChatState,
  (state) => state.general
);

export const getLGTMChats = createSelector(
  getChatState,
  (state) => state.lgtm
);

export const getTechnologyChats = createSelector(
  getChatState,
  (state) => state.technology
);
