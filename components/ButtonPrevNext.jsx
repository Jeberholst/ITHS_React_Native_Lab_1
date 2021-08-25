import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {rgbaColor} from "react-native-reanimated/src/reanimated2/Colors";

export const ButtonPrevNext = ({ ...props }) => (

        <Button
           style={styles.container}
           onPress={() => props.onPress()}
           title={props.title}
           disabled={props.enabled}
           color={rgbaColor(0,0,0, 0.3)}
           accessibilityLabel="Button PREVIOUS"
        />

);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 16,
    width: '50%'
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
