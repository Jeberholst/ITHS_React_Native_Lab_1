import React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from "react-native";
import {rgbaColor} from "react-native-reanimated/src/reanimated2/Colors";

export const ButtonPrevNext = ({ ...props }) => {

  return (
     <View style={styles.container}>
       <Pressable
          onPress={() => props.onPress()}
          style={({ pressed }) => [
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

//   return (
//       <View style={styles.container}>
//         <Pressable
//            onPress={() => props.onPress()}
//            style={({ pressed }) => [
//              {
//                backgroundColor: pressed
//                   ? 'rgb(210, 230, 255)'
//                   : 'white'
//              },
//            ]}>
//           <Pressable
//
//              title={props.title}
//              disabled={props.enabled}
//              color={rgbaColor(0,0,0, 0.3)}
//              accessibilityLabel="Button PREVIOUS"
//           >
//             <Text style={styles.text}>
//               {props.text}
//             </Text>
//
//           </Pressable>
//         <View/>
//
//       )
// }
//
// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     marginHorizontal: 16,
//     width: '50%'
//   },
//   title: {
//     textAlign: 'center',
//     marginVertical: 8,
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: '#737373',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });
