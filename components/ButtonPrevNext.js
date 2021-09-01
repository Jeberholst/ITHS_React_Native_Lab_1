import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";

function ButtonPrevNext({...props}) {

  return (
     <View style={styles.container}>
       <Pressable
          onPress={() => props.onPress()}
          style={({pressed}) => [
            {
              backgroundColor: pressed
                 ? 'rgb(0, 0, 0, 0.7)'
                 : 'rgba(0, 0, 0, 0.2)'
            },
            styles.wrapperCustom
          ]}>
         <Text style={styles.text}>
           {props.title}
         </Text>
       </Pressable>
     </View>
  );
};

export default ButtonPrevNext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: '50%',
    maxWidth: '75%',
    justifyContent: "center",
    textAlign: "center"
  },
  text: {
    fontSize: 16,
    color: 'white'
  },
  wrapperCustom: {
    borderRadius: 6,
    padding: 16,
    // backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
});
