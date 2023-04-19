import React, { useState } from 'react';

import { View, Text, Alert, TouchableOpacity} from 'react-native'
import style from './styles'


export default props => {
  console.log(props.route.params)
  

  const [ player, setPlayer ] = useState(props.route.params.setPlayer)
  const [ board, setBoard ] = useState(props.route.params.setBoard)
  const [ remainingPlays, setRemainingPlays ] = useState(props.route.params.setRemainingPlays)
  const [ winner, setWinner ] = useState('')

 

  function play(line,column){
    console.log(line,column)
    board[line][column] = player
    setBoard([...board])
    setPlayer(player === 'X' ? 'O' : 'X')

    checkWinner(board,line,column)
  }

  function checkWinner(board,line,column){
    //validandos as linhas
    if (board[line][0] !== '' && board[line][0] === board[line][1] && board[line][1] === board[line][2] ){
      return finishGame(board[line][0])
    }
    //validando as colunas
    if (board[0][column] !== '' && board[0][column] === board[1][column] && board[1][column] === board[2][column] ){
      return finishGame(board[0][column])
    }

    //validando as diagonal 1
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2] ){
      return finishGame(board[0][0])
    }

    //validando as diagonal 2
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0] ){
      return finishGame(board[0][2])
    }

    //Nenhum ganhador 
    if((remainingPlays - 1) === 0){
      return finishGame('')
    }

    //jogo não finalizado
    setRemainingPlays((remainingPlays - 1))

  }

  function finishGame(player){
  console.log('Ganhador ')
  setWinner(player)

  props.navigation.navigate({name:'WinScreen',params:{setWinner:player}  })

  }

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
          <Text style={ style.title}># Jogo da Velha #</Text>
          {
            props.route.params.setBoard.map((line, numberLine) => {                    
                return(
                  <View key={numberLine} style = { style.windowMenu } >
                      {
                        line.map((column, numberColumn) =>{
                          return(
                            <TouchableOpacity 
                              key={numberColumn}
                              style={style.boxPlayer}
                              onPress={()=> play( numberLine,numberColumn ) }
                              disabled ={column !== ''}>
                              <Text style={column === 'X' ? style.playerX : style.playerO}>{column}</Text>                            
                            </TouchableOpacity> 
                          )
                        })
                      }
                  </View>
                )                        
              } )
            }

            <TouchableOpacity style={style.buttonHome} onPress={confirmExit} > 

              <Text style={style.buttonText}> Voltar ao Menu </Text>
            
            </TouchableOpacity> 
        
       
      </View>
    )
  }