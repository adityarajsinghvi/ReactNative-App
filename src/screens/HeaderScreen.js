import React from 'react';
import { 
    Text, View, ImageBackground, Image, StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import ImagePick from '../Components/ImagePick';

class HeaderScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
        <ImageBackground source={require('../assets/pic1.jpeg')} style={styles.imgbg} imageStyle={{opacity: 0.5}}>
            {/* <Image source={require('../assets/Avatar.png')} style={{width:100,height:100,borderRadius:100/2}}></Image> */}
            <ImagePick />
            <Text style={{fontWeight:'bold'}}>Mike Fisher</Text>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold'}}>You can Change the above pic too!</Text>
                <Text style={{fontWeight:'bold'}}>Don't forget to like my pics.</Text>
            </View>
      </ImageBackground>
    </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      numColumns: state.numColumns,
      data: state.data,
      followers: state.followers, 
    }
  }
  
export default connect(mapStateToProps)(HeaderScreen)

const styles = StyleSheet.create({
    header: {
      flex: 0.3,
  },
      body : {
          flex: 0.7,
      },
      imgbg: {
          width: '100%', 
          height: '100%',
          alignContent:'center',
          justifyContent:'center',
          alignItems:'center'
      }
  });
