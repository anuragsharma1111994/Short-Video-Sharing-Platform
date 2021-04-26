import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// ! Stylesheets
import Styles from './Styles';

//! Icons
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const User = () => {
  return (
    <View style={Styles.Header}>
        <View style={Styles.LeftContainer}>
        <Feather name='user-plus' color='#fff' size={25}/>
        </View>

      <View style={Styles.UserNameContainer}>
        <Text style={Styles.UserName}>Anurag Sharma</Text>
      </View>
    </View>
  );
};

export default User;

{
  /* <Feather style={{marginTop:5,marginLeft:10}} name='user-plus' color='#fff' size={25}/>
<Text style={{color:'#fff',fontWeight:'bold',marginLeft:115,marginTop:9}}>
    Anurag Sharma
</Text>
<View style={Styles.HeaderIcon}>
<AntDesign style={{marginRight:5}} name='qrcode' size={25} color='#fff'/>
<Entypo name='dots-three-horizontal' color='#fff' size={23}/>
</View> */
}
