import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchUserById } from '../../reducer/dataSlice';
import { styles } from './styles';
import { Card, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const PostsListScreen = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { data, loading } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderItem = ({ item, index }) => {
    return (
      <Card style={styles.card}>
        <Card.Content>
          <Pressable onPress={() => handleCardNavigation()}>
            <View style={styles.cardHeader}>
              <View style={styles.numberBadge}>
                <Text style={styles.numberText}>{index + 1}</Text>
              </View>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
            {item.body && (
              <TouchableOpacity
                style={styles.userName}
                onPress={() => handleNavigation(item.userId)}
              >
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    color: '#6200ee',
                  }}
                >{`User-${item.userId}`}</Text>
              </TouchableOpacity>
            )}
          </Pressable>
        </Card.Content>
      </Card>
    );
  };

  const renderListEmpty = () => {
    if (loading) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#6200ee" />
          <Text style={styles.loadingText}>Loading posts...</Text>
        </View>
      );
    }
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>📭</Text>
        <Text style={styles.emptyTitle}>No Posts Available</Text>
        <Text style={styles.emptySubtitle}>
          Check back later for new content
        </Text>
      </View>
    );
  };

  const renderListFooter = () => {
    if (!data || data.length === 0) return null;

    return (
      <View style={styles.footerContainer}>
        <View style={styles.divider} />
        <Text style={styles.endText}> You've reached the end </Text>
        <View style={styles.spacer} />
      </View>
    );
  };

  const handleNavigation = id => {
    navigate('user', { id });
  };
  const handleCardNavigation = () => {
    navigate('postdetails');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header_title}>Posts List</Text>
        {data && data.length > 0 && (
          <View style={styles.countBadge}>
            <Text style={styles.countText}>{data.length}</Text>
          </View>
        )}
      </View>
      <TextInput
        style={{
          // marginTop: 15,
          marginHorizontal: 15,
          backgroundColor: 'white',
        }}
        label="Search"
        mode="outlined"
        placeholder="Type userId or title"
        left={<TextInput.Icon icon="account-search" />}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id?.toString() ?? Math.random().toString()}
        ListEmptyComponent={renderListEmpty}
        ListFooterComponent={renderListFooter}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </View>
  );
};

export default PostsListScreen;
