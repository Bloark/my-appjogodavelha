import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screenshots

import Home from '../screens/Home/index'
import GameScreen from '../screens/GameScreen'
import WinScreen from '../screens/WinScreen'



const Stack = createNativeStackNavigator();

export default props => {

    return(

        <Stack.Navigator 
        initialRouteName='Home'     
    >

        <Stack.Screen name="Home"
                      component={ Home }
                      options={ { headerShown: false } }
        />
         <Stack.Screen name="GameScreen" 
                    component={ GameScreen }
                     options={ { headerShown: false } }
      />
       <Stack.Screen name="WinScreen" 
                    component={ WinScreen }
                     options={ { headerShown: false } }
      />

        </Stack.Navigator>

    )


}