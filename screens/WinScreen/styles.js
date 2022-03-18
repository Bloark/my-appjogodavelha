import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../values'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center'
    },
    title: {
      fontSize: Fonts.title,
      fontWeight: 'bold',
      color: Colors.text        
    },
    subtitle: {
      fontSize: Fonts.base,
      color: Colors.subtitle,
      marginTop: Metrics.margin.base
    },
    buttonHome:{
      marginTop: Metrics.margin.base
    },
    buttonText:{
      fontSize: Fonts.buttonText,
      color: Colors.text,
      fontWeight: 'bold'

    }, 
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
      },
      playerO:{
        fontSize: Fonts.player,
        color: Colors.playerO 
    },
    ganhador:{
      fontSize: Fonts.player,
      color: Colors.winner,
      fontWeight: 'bold'
    }
})

