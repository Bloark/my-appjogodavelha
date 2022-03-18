import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../values'

export default StyleSheet.create({

        boxPlayer: {
            width:80,
            height:80,
            backgroundColor: Colors.boxPlayer,
            alignItems: 'center',
            justifyContent: 'center',
            margin: Metrics.margin.small
        },
        playerX:{
            fontSize: Fonts.player,
            color: Colors.playerX 

        }
    
    }    
)
