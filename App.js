import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';

// Screens
import Home from './src/screens/Home/Home';
import Navigation from './src/navigation/index'

import 'react-native-gesture-handler'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content"/>
     <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
        <Navigation/>
        {/* <Home/>  */}
      </SafeAreaView> 
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
