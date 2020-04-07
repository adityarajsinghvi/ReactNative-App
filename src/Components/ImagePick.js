import React, { Component } from 'react';
import {
  View,
  Text,
  Image,TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';


//Permissions in AndroidManifest.xml
//<uses-permission android:name="android.permission.CAMERA"/>
//<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

export default class ImagePick extends React.Component {
    state = {
        // photo: <Image source={require('../../asset/avatar.png') }/>,
        // photo: require('../../asset/avatar.png'),
        photo: {uri: "https://bootdey.com/img/Content/avatar/avatar2.png"},
      }
      handelChoosePhoto = () =>{
        const options = {
          noData : true,
        };
        ImagePicker.launchImageLibrary(options, response => {
          if(response.uri){
            this.setState({ photo: response });
          }
        });
      }
      render(){
        const { photo } = this.state;
        return(
          <View style={{flex:1,alignItems:"center",justifyContent: "center"}}>
            {photo && (
            <Image
              source = {{ uri : photo.uri }}
              style = {{width: wp('32%'), height:hp('18%'),borderRadius:wp('100%')}}
            />)}
            {/* <Button 
              title="Choose Photo"
              onPress={this.handelChoosePhoto}
            /> */}
            <View>
            <TouchableOpacity onPress={this.handelChoosePhoto}><Text>Choose Pic</Text></TouchableOpacity>
            </View>
          </View>
        );
      }
}