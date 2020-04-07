import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';



class FollowersScreen extends Component {
      renderItem = ({item},index) => {
        var icon = (item.status)?(<Icon name="md-checkmark-circle-outline" size={40}/>):(<Icon name="md-add-circle-outline" size={40}/>);
        return (
            <View style={styles.row}>
              <Image source={{ uri: item.image }} style={styles.pic} />
              <View>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                  <TouchableOpacity style={{alignContent:'center',justifyContent:'center',alignItems:'center'}} onPress={()=>{
                      const dataclone=[...this.props.followers]
                      dataclone[item.id-1].status= !dataclone[item.id-1].status;
                      this.props.dispatch({type: 'TOGGLE_APP', data: {
                        dataclone
                      }})
                      
                  }}>
                    {icon}
                  </TouchableOpacity>
                </View>
                <View style={styles.msgContainer}>
                  <Text style={styles.msgTxt}>{item.username}</Text>
                </View>
              </View>
            </View>
        );
      }
    
      render() {
        return(
          <View style={{ flex: 1 }} >
            <FlatList 
              extraData = {this.props}
              data={this.props.followers}
              keyExtractor = {(item) => {
                return item.id;
              }}
              renderItem={(item,index)=>this.renderItem(item,index)}/>
          </View>
        );
      }
    }

    const mapStateToProps = (state) => {
      return {
        followers: state.followers
      }
    }
    
    export default connect(mapStateToProps)(FollowersScreen)
    const styles = StyleSheet.create({
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#DCDCDC',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 10,
      },
      pic: {
        borderRadius: 30,
        width: 60,
        height: 60,
      },
      nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
      },
      nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 18,
        width:170,
      },
      mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
      },
      msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      msgTxt: {
        fontWeight: '400',
        color: '#008B8B',
        fontSize: 12,
        marginLeft: 15,
      },
    });