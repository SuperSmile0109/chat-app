import { gql } from 'apollo-angular';

export const LOAD_LATEST_MESSAGES = gql`
  query ($channelId: String!) {
    fetchLatestMessages(channelId: $channelId) {
      messageId
      userId
      text
      datetime
    }
  }
`;

export const LOAD_LATEST_MESSAGES_TEST = gql`
  query ($channelId: String!) {
    fetchLatestMessages(channelId: $channelId) {
      messageId
      userId
      text
      datetime
      __typename
    }
  }
`;

export const LOAD_MORE_MESSAGES = gql`
  query ($channelId: String!, $messageId: String!, $old: Boolean!) {
    fetchMoreMessages(channelId: $channelId, messageId: $messageId, old: $old) {
      messageId
      userId
      text
      datetime
    }
  }
`;

export const POST_MESSAGES = gql`
  mutation ($channelId: String!, $text: String!, $userId: String!) {
    postMessage(channelId: $channelId, text: $text, userId: $userId) {
      messageId
      userId
      text
      datetime
    }
  }
`;
