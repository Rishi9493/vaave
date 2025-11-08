import { View } from 'react-native';
import React from 'react';
import PostsListScreen from './src/screens/postslist/PostsListScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PostsListScreen />
    </SafeAreaView>
  );
};

export default App;
