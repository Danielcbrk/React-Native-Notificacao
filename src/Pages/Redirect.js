import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'




  export default class Redirect extends Component {
   
  
    render() {
      let {container, button} = styles

      return(
        <View style={container}>
            <Text>Essa é a tela de redirecionamento!</Text>
        </View>
      )
    }
  }

  /* Estilização do projeto */
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: 200,
      marginTop: 10
    }
  });