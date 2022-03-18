import React, {useState} from 'react';

import { View, Text, TouchableOpacity} from 'react-native'
import style from './styles'

import ButtonX from '../../components/ButtonX'

export default props => {
  console.log(props.route.params)
  console.log(props.route.params.setBoard)

  

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
                              style={style.boxPlayer}>
                              <Text style={column === 'X' ? style.playerX : style.playerO}>{column}</Text>                            
                            </TouchableOpacity> 
                          )
                        })
                      }
                  </View>
                )                        
              } )
            }
        
       
      </View>
    )
  }