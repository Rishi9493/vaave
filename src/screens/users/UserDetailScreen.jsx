import { View, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import {
  Text,
  Card,
  Avatar,
  ActivityIndicator,
  Divider,
  Surface,
  useTheme,
} from 'react-native-paper';
import { userStyles } from './userStyles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../../reducer/dataSlice';

const UserDetailScreen = ({ route: { params } }) => {
  const { userloading, userData, userError } = useSelector(state => state.data);
  const dispatch = useDispatch();
  const theme = useTheme();
  const { id } = params;

  useEffect(() => {
    const promise = dispatch(fetchUserById(id));
    return () => promise.abort();
  }, [id]);
  if (userloading) {
    return (
      <View style={userStyles.container}>
        <Surface style={userStyles.headerContainer} elevation={2}>
          <Text variant="headlineMedium" style={userStyles.header_title}>
            User Detail
          </Text>
        </Surface>
        <View style={userStyles.loadingContainer}>
          <ActivityIndicator size="large" animating={true} />
          <Text variant="bodyLarge" style={userStyles.loadingText}>
            Loading user details...
          </Text>
        </View>
      </View>
    );
  }

  if (userError) {
    return (
      <View style={userStyles.container}>
        <Surface style={userStyles.headerContainer} elevation={2}>
          <Text variant="headlineMedium" style={userStyles.header_title}>
            User Detail
          </Text>
        </Surface>
        <View style={userStyles.errorContainer}>
          <Text variant="titleLarge" style={userStyles.errorText}>
            Error loading user details
          </Text>
          <Text variant="bodyMedium" style={userStyles.errorSubtext}>
            {userError}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={userStyles.container}>
      <Surface style={userStyles.headerContainer} elevation={2}>
        <Text variant="headlineMedium" style={userStyles.header_title}>
          User Detail
        </Text>
      </Surface>

      <ScrollView
        style={userStyles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={userStyles.scrollContent}
      >
        <Card style={userStyles.profileCard} elevation={1}>
          <Card.Content style={userStyles.profileContent}>
            <Avatar.Text
              size={100}
              label={userData?.username?.charAt(0).toUpperCase() || 'U'}
              style={userStyles.avatar}
            />
            <Text variant="headlineMedium" style={userStyles.username}>
              {userData?.username}
            </Text>
          </Card.Content>
        </Card>

        <Card style={userStyles.infoCard} elevation={1}>
          <Card.Content>
            <View style={userStyles.infoRow}>
              <Avatar.Icon
                size={48}
                icon="email"
                style={userStyles.iconAvatar}
              />
              <View style={userStyles.infoContent}>
                <Text variant="labelMedium" style={userStyles.infoLabel}>
                  EMAIL
                </Text>
                <Text variant="bodyLarge" style={userStyles.infoValue}>
                  {userData?.email}
                </Text>
              </View>
            </View>

            <Divider style={userStyles.divider} />

            <View style={userStyles.infoRow}>
              <Avatar.Icon size={48} icon="web" style={userStyles.iconAvatar} />
              <View style={userStyles.infoContent}>
                <Text variant="labelMedium" style={userStyles.infoLabel}>
                  WEBSITE
                </Text>
                <Text variant="bodyLarge" style={userStyles.infoValue}>
                  {userData?.website}
                </Text>
              </View>
            </View>

            <Divider style={userStyles.divider} />

            <View style={userStyles.infoRow}>
              <Avatar.Icon
                size={48}
                icon="office-building"
                style={userStyles.iconAvatar}
              />
              <View style={userStyles.infoContent}>
                <Text variant="labelMedium" style={userStyles.infoLabel}>
                  COMPANY
                </Text>
                <Text variant="bodyLarge" style={userStyles.infoValue}>
                  {userData?.company?.name}
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

export default UserDetailScreen;
