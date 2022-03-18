import React, {useState} from 'react';

import { View, Text, TouchableOpacity } from 'react-native'
import style from './styles'

import ButtonX from '../../components/ButtonX'
import ButtonO from '../../components/ButtonO'

export default props => {
  const [ player, setPlayer ] = useState('')
  const [ board, setBoard ] = useState([])
  const [ remainingPlays, setRemainingPlays ] = useState('')
  const [ winner, setWinner ] = useState('')
  

  function playerGame(player){

    setPlayer(player);    
    setRemainingPlays(9);
    
    setBoard([
      ['','',''],
      ['','',''],
      ['','','']
  
  ])

    props.navigation.navigate({name:'GameScreen',
                              params:{setPlayer:player,
                              setRemainingPlays:9,
                              setBoard:[['','',''],
                                        ['','',''],
                                        ['','','']]
                                      }                      
    })

  }

    return(
      <View style={ style.container } >
          <Text style={ style.title }> 
          # Jogo da Velha # 
          </Text>
          <Text style={style.subtitle}> Selecione o primeiro jogador </Text> 
          <View style = { style.windowMenu } >

          <TouchableOpacity onPress={ ()=> playerGame('X') } >  
          <ButtonX/>
          </TouchableOpacity> 
          
          <TouchableOpacity onPress={()=> playerGame('O') } >
          <ButtonO/>
          </TouchableOpacity> 

          </View>
       
      </View>
    )
  }