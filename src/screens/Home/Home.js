import React from 'react';
import {StyleSheet, Text, View,FlatList,Dimensions} from 'react-native';

// Componnents
import Post from '../../components/Post/index';
import posts from '../../../data/post'

const Home = () => {
  return (
    <View>
      <FlatList
       data={posts}
      renderItem={({item})=><Post post={item}/>}
      showsVerticalScrollIndicator={false}
      snapToInterval={ Dimensions.get('window').height}
      snapToAlignment={"start"}
      decelerationRate={'fast'} 
      />
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
