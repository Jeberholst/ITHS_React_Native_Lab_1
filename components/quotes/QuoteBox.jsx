import React, {useContext, useEffect} from "react"
import {StyleSheet, Text, View} from "react-native";
import {QuoteContext} from "../../App";

export const QuoteBox = () => {

  const context = useContext(QuoteContext)

  return(
     <View style={styles.container}>
       <Text>{context ? context.quote : ''}</Text>
     </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
