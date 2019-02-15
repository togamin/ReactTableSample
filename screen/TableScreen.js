import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';

class TableScreen extends React.Component {
  state = {
    contentsList:['ピチュー','ピカチュウ','ライチュウ','ルリリ','マリル','マリルリ','とが','とがみ','とがみん','とがみんブログ'],
  }

  renderCell({item}){
    console.log(item);
    return(
      <TouchableHighlight onPress={() => {this.props.navigation.navigate('DetailScreen',{title:item})}}>
      <View style = {styles.listItem}>
        <Text style = {styles.listTitle}>{item}</Text>
      </View>
    </TouchableHighlight>
    );
  }

  render(){
    return(
      <View style = {styles.container}>
        <FlatList data = {this.state.contentsList} renderItem = {this.renderCell.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    flex:1,
  },
  listItem:{
    padding:18,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    backgroundColor:'#fff',
  },
  listTitle:{
    fontSize:18,
  }
});

export default TableScreen;