/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

//perro

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LinearGradient from "react-native-linear-gradient";
import Screen from './components/Screen/Screen'
// import Login from './components/Login/Login'

import reducer from './reducers/Log.js'

import { createStore, applyMiddleware } from 'redux'

const store = createStore(reducer)


console.log('perro')
const App = () => {
  return (
    <LinearGradient colors={['#FD3E40','#C6245F','#960E7A']} style={styles.app_bg}>
      <StatusBar backgroundColor="#FD3E40" barStyle="light-content" />
      <View>
        <Screen/>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  app_bg:{
    height:'100%',
    justifyContent:'center',
  }
});

export default App;
