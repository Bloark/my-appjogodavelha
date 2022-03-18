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
      windowMenu:{
        flexDirection: 'row'

      }
})

