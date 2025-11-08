import { View } from 'react-native';
import React from 'react';
import PostsListScreen from './src/screens/postslist/PostsListScreen';
import UserDetailScreen from './src/screens/users/UserDetailScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
const App = () => {
  return <AppNavigator />;
};

export default App;
