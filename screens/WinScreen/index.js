import React, {useState} from 'react';

import { View, Text, Alert, TouchableOpacity} from 'react-native'
import style from './styles'

export default props => {
  const [ winner, setWinner ] = useState(props.route.params.setWinner)

  function confirmExit(){
    Alert.alert('Sair', 'Deseja retornar ao menu incial?', [
      {
        text: 'Sim',
        onPress(){
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Home'}]
          })
        }
      }, 
      {
        text: 'Não'
      }
    ])
  }

    return(
      <View style={ style.container}>

          <Text style={style.title}># jogo da Velha #</Text>
          <Text style={style.subtitle}> Resultado da Partida </Text>

          {
            winner === '' &&
            <Text style={style.ganhador}> Nenhum Ganhador </Text>
          }

          {
            winner !== '' &&
            <>
            <Text style={style.ganhador}> GANHADOR </Text>
            <View                              
              style={style.boxPlayer}              
              >
              <Text style={winner === 'X' ? style.playerX : style.playerO}>{winner}</Text>                            
            </View> 

            
            </>
          }

          <TouchableOpacity style={style.buttonHome} onPress={confirmExit} > 

              <Text style={style.buttonText}> Voltar ao Menu </Text>
            
            </TouchableOpacity>
       
      </View>
    )
  }