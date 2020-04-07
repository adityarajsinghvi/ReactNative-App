import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';

class GalleryScreen extends React.Component {

  renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    var itemDimension = Dimensions.get('window').width / this.props.numColumns;
    return (
      <TouchableOpacity style={[styles.item, {height: itemDimension}]}>
        <Image style={{height:itemDimension - 2, width:itemDimension - 2}} source={{uri: item.image}}/>
      </TouchableOpacity>
    );
  }
  
  formatRow = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
    return data;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.formatRow(this.props.data, this.props.numColumns)}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}
          numColumns={this.props.numColumns}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numColumns: state.numColumns,
    data: state.data,
  }
}

export default connect(mapStateToProps)(GalleryScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
}); 