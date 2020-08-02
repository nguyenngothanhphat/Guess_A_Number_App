// Import packages
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Import utils
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
