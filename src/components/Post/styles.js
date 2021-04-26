import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    width: '100%',
    height: Dimensions.get('window').height-50,
  },
  uiContainer: {
    height: '97%',
    justifyContent: 'flex-end',
  },
  rightContainer: {
    alignSelf: 'flex-end',
    height: 250,
    justifyContent: 'space-between',
    marginRight:5
  },
  bottomContainer: {
    padding: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end'
  },
  handel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  songImage:{
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 8,
    borderColor: '#4c4c4c',
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePictureContainer: {},
  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  iconContainer: {
      alignItems:'center'
  },
  statesLable: {
    color: '#fff',
    fontSize:13,
    fontWeight:'600',
    marginTop:5
  },
});

// 40"19

export default styles;
