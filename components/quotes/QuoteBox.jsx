import React, {useContext} from "react"
import {StyleSheet, Text, View} from "react-native";
import {QuoteContext} from "../../App";

export const QuoteBox = () => {

  const context = useContext(QuoteContext)

  return (
     <View style={styles.container}>
       <View style={styles.card}>
         <Text style={styles.textPrev}>{context ? context.prevQuote : ''}</Text>
         <Text style={styles.textCurrent}>{context ? context.quote : ''}</Text>
       </View>
     </View>
  )

}

const styles = StyleSheet.create({
  container: {
    height: '50vh',
    width: '100%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  card: {
    flexDirection: 'column',
    // backgroundColor: 'white',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    padding: '10%'
  },
  textCurrent: {
    marginTop: 25,
    fontSize: 22,
    color: 'white',
  },
  textPrev: {
    fontSize: 12,
    color: '#3f3f3f',
  }

});
