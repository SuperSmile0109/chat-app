import { ChatData, initialChatState } from "./chat-store";

export interface AppState {
  chat: ChatData;
}

export const initialAppState: AppState = {
  chat: initialChatState,
};
