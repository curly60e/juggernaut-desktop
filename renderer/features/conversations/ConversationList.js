import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'rmwc';
import { conversationType } from '../../types';
import ConversationListItem from './ConversationListItem';
import EmptyConversationList from './EmptyConversationList';
import NoConversationsFound from './NoConversationsFound';

const ConversationList = props => {
  const {
    conversations,
    selectedConversationId,
    selectConversation,
    searchQuery
  } = props;

  if (conversations.length === 0) {
    if (searchQuery === '') {
      return <EmptyConversationList />;
    }
    return <NoConversationsFound searchQuery={searchQuery} />;
  }

  return (
    <List className="conversationList" twoLine>
      {conversations.map(conversation => (
        <ConversationListItem
          key={conversation.id}
          id={conversation.id}
          select={selectConversation}
          selected={conversation.id === selectedConversationId}
          conversation={conversation}
        />
      ))}
    </List>
  );
};

ConversationList.propTypes = {
  conversations: PropTypes.arrayOf(conversationType).isRequired,
  selectedConversationId: PropTypes.number,
  selectConversation: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired
};

ConversationList.defaultProps = {
  selectedConversationId: null
};

export default ConversationList;
