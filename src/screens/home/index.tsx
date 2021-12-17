/* eslint-disable react-hooks/exhaustive-deps */
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {useAppContext} from '../../AppContext';
import Post from '../../components/post';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const HomePage = observer(({navigation}: RouteSetting) => {
  const {api, store} = useAppContext();
  const [loading, setLoading] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      await api.post.getAll();
      await api.user.getAll();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const onReadMore = (postId: number) => {
    navigation.navigate('Post' as never, {postId} as never);
  };

  if (loading) {
    return <Text>loading...</Text>;
  }

  return (
    <View>
      <Text style={styles.header}>Posts</Text>
      <ScrollView>
        {store.post.all.map(post => (
          <Post
            onRemove={() => store.post.remove(post.id)}
            onReadMore={onReadMore}
            key={post.id}
            post={post}
          />
        ))}
      </ScrollView>
    </View>
  );
});

export default React.memo(HomePage);

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
});
