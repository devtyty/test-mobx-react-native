import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import PostModel from '../models/post';

const Post: React.FC<{
  post: PostModel;
  ellipsisBody?: boolean;
  onReadMore?: (postId: number) => void;
  onRemove?: () => void;
}> = observer(({post, ellipsisBody = true, onReadMore, onRemove}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titlePost}>{post.title}</Text>
      <Text>{ellipsisBody ? post.body.substr(0, 100) : post.body}</Text>
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => {
            if (onReadMore) {
              onReadMore(post.id);
            }
          }}>
          {ellipsisBody && <Text style={styles.readMore}> Read more </Text>}
        </TouchableOpacity>

        <TouchableOpacity onPress={onRemove}>
          {ellipsisBody && <Text style={styles.readMore}> Remove </Text>}
        </TouchableOpacity>
      </View>
      <Text>Written by {post.user?.name}</Text>
    </View>
  );
});

export default Post;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  readMore: {
    color: 'skyblue',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  titlePost: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomView: {flexDirection: 'row'},
});
