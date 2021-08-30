import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {rgbaColor} from "react-native-reanimated/src/reanimated2/Colors";

export const Header = () => {

  return(
     <View style={styles.container}>
       <Text style={styles.text}>{'Kanye Quote'}</Text>
     </View>
  )

}
const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
  },
  text: {
    fontSize: 30,
    marginTop: 15,
    color: '#fff',
    textTransform: 'uppercase',
  },
});


