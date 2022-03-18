import React from 'react'
import { Text, View } from 'react-native'

import style from './styles'

export default props => {

    return (
        
        <>
        <View style={style.boxPlayer} >
            <Text style={ style.playerO }>O</Text>
        </View>
        </>
    )


}