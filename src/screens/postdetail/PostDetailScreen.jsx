import { View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import {
  Text,
  Card,
  Avatar,
  ActivityIndicator,
  Divider,
  Surface,
  Chip,
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEachComment, fetchEachPost } from '../../reducer/dataSlice';
import { postStyles } from './postdetailStyles';

const PostDetailScreen = ({ route: { params } }) => {
  const { postId } = params;
  const {
    eachpostloading,
    eachpost,
    eachposterror,
    eachcommentloading,
    eachcomment,
  } = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const postPromise = dispatch(fetchEachPost(postId));
    const commentPromise = dispatch(fetchEachComment(postId));
    return () => {
      postPromise.abort();
      commentPromise.abort();
    };
  }, [dispatch, postId]);

  if (eachpostloading || eachcommentloading) {
    return (
      <View style={postStyles.container}>
        <Surface style={postStyles.headerContainer} elevation={2}>
          <Text variant="headlineMedium" style={postStyles.header_title}>
            Post Details
          </Text>
        </Surface>
        <View style={postStyles.loadingContainer}>
          <ActivityIndicator size="large" animating={true} />
          <Text variant="bodyLarge" style={postStyles.loadingText}>
            Loading post details...
          </Text>
        </View>
      </View>
    );
  }

  if (eachposterror) {
    return (
      <View style={postStyles.container}>
        <Surface style={postStyles.headerContainer} elevation={2}>
          <Text variant="headlineMedium" style={postStyles.header_title}>
            Post Details
          </Text>
        </Surface>
        <View style={postStyles.errorContainer}>
          <Text variant="titleLarge" style={postStyles.errorText}>
            Error loading post
          </Text>
          <Text variant="bodyMedium" style={postStyles.errorSubtext}>
            {eachposterror}
          </Text>
        </View>
      </View>
    );
  }

  const renderCommentItem = ({ item }) => (
    <Card style={postStyles.commentCard} elevation={1}>
      <Card.Content>
        <View style={postStyles.commentHeader}>
          <Avatar.Icon
            size={40}
            icon="account-circle"
            style={postStyles.commentAvatar}
          />
          <View style={postStyles.commentHeaderText}>
            <Text variant="titleMedium" style={postStyles.commentName}>
              {item.name}
            </Text>
            <View style={postStyles.emailChip}>
              <Avatar.Icon
                size={20}
                icon="email"
                style={postStyles.emailIcon}
              />
              <Text variant="labelSmall" style={postStyles.commentEmail}>
                {item.email}
              </Text>
            </View>
          </View>
        </View>
        <Divider style={postStyles.commentDivider} />
        <Text variant="bodyMedium" style={postStyles.commentBody}>
          {item.body}
        </Text>
      </Card.Content>
    </Card>
  );

  const ListHeaderComponent = () => (
    <>
      <Card style={postStyles.postCard} elevation={2}>
        <Card.Content>
          <View style={postStyles.postHeader}>
            <Avatar.Text
              size={50}
              label={`U${eachpost?.userId}`}
              style={postStyles.userAvatar}
            />
            <View style={postStyles.postHeaderText}>
              <Text variant="labelMedium" style={postStyles.userLabel}>
                Posted by User
              </Text>
              <Text variant="titleLarge" style={postStyles.userId}>
                User {eachpost?.userId}
              </Text>
            </View>
          </View>

          <Text variant="headlineSmall" style={postStyles.postTitle}>
            {eachpost?.title}
          </Text>

          <Divider style={postStyles.postDivider} />

          <Text variant="bodyLarge" style={postStyles.postBody}>
            {eachpost?.body}
          </Text>
        </Card.Content>
      </Card>

      <View style={postStyles.commentsHeader}>
        <Text variant="titleLarge" style={postStyles.commentsTitle}>
          Comments
        </Text>
        <Chip
          icon="comment-multiple"
          style={postStyles.commentCount}
          textStyle={postStyles.commentCountText}
        >
          {eachcomment?.length || 0}
        </Chip>
      </View>
    </>
  );

  const ListEmptyComponent = () => (
    <View style={postStyles.emptyContainer}>
      <Avatar.Icon size={80} icon="comment-off" style={postStyles.emptyIcon} />
      <Text variant="titleMedium" style={postStyles.emptyText}>
        No comments yet
      </Text>
    </View>
  );

  return (
    <View style={postStyles.container}>
      <Surface style={postStyles.headerContainer} elevation={2}>
        <Text variant="headlineMedium" style={postStyles.header_title}>
          Post Details
        </Text>
      </Surface>

      <FlatList
        data={eachcomment || []}
        renderItem={renderCommentItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={!eachcommentloading && ListEmptyComponent}
        contentContainerStyle={postStyles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PostDetailScreen;
