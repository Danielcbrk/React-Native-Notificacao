import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {Notification} from './src/NotificationManager'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './src/Pages/Home'
import Redirect from './src/Pages/Redirect'



const notificador = Notification;
const Stack = createStackNavigator();



  export default class App extends Component {
   
    componentDidMount() {
      notificador.configure();
      notificador.creatChannel()
      notificador.agendarNotificacoes()
    }


    // Criar a notificação
    mandarNotificacao = () => {
      notificador.showNotification(
        1,
        "Esse é o nosso título",
        "E aqui está a mensagem. Vamos inserir uma mensagem um pouco mais longa para vermos o Android irá se adaptar ao conteúdo na tela?",
        {}, // data
        {} // options
      ),
      notificador.showNotification(
      2,
        "Segunda notificação 😍",
        "E talz...",
        {}, // data
        {} // options
      )
    }

    cancelar = () => {
      notificador.cancelAllLocalNotification()
    }

    render() {
      let {container, button} = styles

      return(
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" >
                { ( {navigation} ) => 
                {
                  notificador.setNavegador(navigation);
                  return(
                <Home 
                  enviar={this.mandarNotificacao} 
                  cancelar={this.cancelar}  
                />) }}
              </Stack.Screen >
             
              <Stack.Screen name="Redirect" >
              { (navigation) => {return(<Redirect />) }}
              </Stack.Screen >
             
            </Stack.Navigator>
        </NavigationContainer>
      );
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