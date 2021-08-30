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
                 ? 'rgb(210, 230, 255)'
                 : 'white'
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
    flex: 2,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: 'white'
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
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
