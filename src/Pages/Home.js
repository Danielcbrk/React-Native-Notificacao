import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { Notification } from '../NotificationManager'


const notificador = Notification;



export default function Home(props) {


  let { container, button } = styles

  return (
    <View style={container}>
      <Text style={{fontSize:30, color:'black', fontWeight:'bold'}}>FOOD</Text>
      
      <Image
          source={require('../Img/comida2.png')}
          style={{height:230}}
      />
      <Text style={{fontSize:30,color:'black', fontWeight:'bold'}}>DELIVERY</Text>

      <TouchableOpacity
        style={button}
        onPress={() => props.enviar()}
      >
        <Text>Enviar notificação</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={button}
        onPress={() => props.cancelar()}>
        <Text>Cancelar notificações</Text>
      </TouchableOpacity>
    </View>
  )

}

/* Estilização do projeto */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4A460'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 10
  }
});