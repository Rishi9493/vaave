import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostsListScreen from '../screens/postslist/PostsListScreen';
import UserDetailScreen from '../screens/users/UserDetailScreen';
import PostDetailScreen from '../screens/postdetail/PostDetailScreen';
const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={PostsListScreen} />
      <Stack.Screen name="user" component={UserDetailScreen} />
      <Stack.Screen name="postdetails" component={PostDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
