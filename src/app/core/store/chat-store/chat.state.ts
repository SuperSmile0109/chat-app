import { ChatResponseLatest, ChatResponseMore } from "../../models";

export interface ChatData {
  isLoading: boolean;
  error: any;
  general: ChatResponseLatest | ChatResponseMore | undefined;
  lgtm: ChatResponseLatest | ChatResponseMore | undefined;
  technology: ChatResponseLatest | ChatResponseMore | undefined;
}

export interface ChatState {
  readonly chat: ChatData
}

export const initialChatState: ChatData = {
  isLoading: false,
  error: null,
  general: undefined,
  lgtm: undefined,
  technology: undefined,
}
