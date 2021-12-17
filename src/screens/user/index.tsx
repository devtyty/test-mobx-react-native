/* eslint-disable react-hooks/exhaustive-deps */
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {useAppContext} from '../../AppContext';
import Post from '../../components/post';
import {Text, View} from 'react-native';

const UserPage = observer(() => {
  const {api, store} = useAppContext();
  const [loading, setLoading] = useState(false);
  //   const params = useParams<{userId: string}>();
  const userId = Number('1');

  const load = async () => {
    try {
      setLoading(true);
      await api.user.getById(userId);
      await api.post.getByUserId(userId);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <View>loading...</View>;
  }

  const user = store.user.byId.get(userId);

  if (!user) {
    return <View>User not found</View>;
  }

  return (
    <View>
      <Text>
        {user.name} • {user.username}
      </Text>
      <Text>{user.email}</Text>
      <Text>Posts</Text>
      {user.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </View>
  );
});

export default UserPage;
