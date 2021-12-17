/* eslint-disable react-hooks/exhaustive-deps */
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {useAppContext} from '../../AppContext';
import Post from '../../components/post';
import {Text, View} from 'react-native';
import Comment from '../../components/comment';

const PostPage = observer(({route}: RouteSetting) => {
  const {api, store} = useAppContext();

  const [loading, setLoading] = useState(false);

  const postId = (route.params as any)?.postId;

  const load = async () => {
    try {
      setLoading(true);
      await api.post.getById(postId);
      await api.comment.getByPostId(postId);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <Text>loading...</Text>;
  }

  const post = store.post.byId.get(postId);

  if (!post) {
    return <Text>Post not found</Text>;
  }

  return (
    <View>
      <Post ellipsisBody={false} post={post} />
      <Text>Comments </Text>
      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </View>
  );
});

export default PostPage;
