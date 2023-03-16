import { ChatActions, ChatActionTypes } from "./chat.actions";
import { initialChatState, ChatData } from "./chat.state";

export const chatReducer = (state = initialChatState, action: ChatActions): ChatData => {
  switch (action.type) {
    case ChatActionTypes.LoadGeneralChats: {
      return { ...state, isLoading: true, error: null };
    }

    case ChatActionTypes.LoadGeneralChatsSuccess: {
      return { ...state, general: action.payload, isLoading: false, error: null };
    }

    case ChatActionTypes.LoadGeneralChatsFail: {
      return { ...state, isLoading: false, error: action.payload };
    }

    case ChatActionTypes.LoadLGTMChats: {
      return { ...state, isLoading: true, error: null };
    }

    case ChatActionTypes.LoadLGTMChatsSuccess: {
      return { ...state, lgtm: action.payload, isLoading: false, error: null };
    }

    case ChatActionTypes.LoadLGTMChatsFail: {
      return { ...state, isLoading: false, error: action.payload };
    }

    case ChatActionTypes.LoadTechnologyChats: {
      return { ...state, isLoading: true, error: null };
    }

    case ChatActionTypes.LoadTechnologyChatsSuccess: {
      return { ...state, technology: action.payload, isLoading: false, error: null };
    }

    case ChatActionTypes.LoadTechnologyChatsFail: {
      return { ...state, isLoading: false, error: action.payload };
    }

    case ChatActionTypes.ClearMessages: {
      return { ...state, lgtm: undefined, technology: undefined, general: undefined };
    }

    default: {
      return state;
    }
  };

};
