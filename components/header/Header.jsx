import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {rgbaColor} from "react-native-reanimated/src/reanimated2/Colors";

export const Header = () => {

  return(
     <View style={styles.content}>
       <Text style={styles.text}>{'Kanye Quote'}</Text>
     </View>
  )

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: rgbaColor(0,0,0, 0.3),
  },
  text: {
    fontSize: 30,
    color: '#fff',
    textTransform: 'uppercase'
  },
});


