import React from 'react';
import {Image,Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


// ! Screen 
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile'

// ! Icons
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UploadImage from '../Assets/images/plus-icon.png';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Discover'}
        component={()=><Text>Search</Text>}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name={'search1'} size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'Upload'}
        component={()=><Text>Upload</Text>}
        options={{
          tabBarIcon: () => (
            <Image
              source={UploadImage}
              style={{
                height: 30,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Inbox'}
        component={()=><Text>Inbox</Text>}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'message-plus-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={()=><Text>PROFILE </Text>}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'md-person-outline'} size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeBottomTabNavigator;
