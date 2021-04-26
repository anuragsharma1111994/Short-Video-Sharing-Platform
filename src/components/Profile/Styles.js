import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  Header: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    height: 45,
    backgroundColor: '#000',
  },
  UserNameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  UserName:{
    color: '#fff',
    fontWeight: 'bold',
  },
  HeaderIcon: {
    flexDirection: 'row',
    marginLeft: 122,
    marginTop: 9,
  },
  LeftContainer:{
      alignItems:'flex-end'
      
  }
});

// 40"19

export default styles;
