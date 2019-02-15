import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DetailScreen extends React.Component{
  state = {
    title: '',
  }

  componentWillMount(){
    const {params} = this.props.navigation.state;
    this.setState({title:params.title});
  }

  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.titleText}>{this.state.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  titleText:{
    fontSize:27,
  }
});

export default DetailScreen;