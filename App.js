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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LinearGradient from "react-native-linear-gradient";
import { Display  } from "./components/Display/Display";

const App = () => {
  return (
    <LinearGradient colors={['#FD3E40','#C6245F','#960E7A']} style={styles.app_bg}>
      <StatusBar backgroundColor="#FD3E40" barStyle="light-content" />
      <Display/>
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
