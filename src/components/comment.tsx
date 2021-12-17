import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
import CommentModel from '../models/comment';

const Comment: React.FC<{comment: CommentModel}> = observer(({comment}) => {
  return (
    <View>
      <Text>
        {comment.name} • {comment.email}
      </Text>
      <Text>{comment.body}</Text>
    </View>
  );
});

export default Comment;
