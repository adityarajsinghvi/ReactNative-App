import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GalleryScreen from './src/screens/GalleryScreen';
import FollowersScreen from './src/screens/FollowersScreen';
import HeaderScreen from './src/screens/HeaderScreen';
import {Provider, connect} from 'react-redux';

import { createStore } from 'redux'
import reducer from './src/redux/reducers/reducer1'
const store = createStore(reducer)

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <View style={{flex:1}}>
    <View style={styles.header}>
    <HeaderScreen />
    </View>
    <View style={styles.body}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Gallery" component={GalleryScreen}/>
        <Tab.Screen name="Followers" component={FollowersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
    </View>
    </Provider>
  );
}


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
