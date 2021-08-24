import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {ScreenContainer} from "react-native-screens";
import {ButtonPrev} from "./ButtonPrev";
import {ButtonNext} from "./ButtonNext";

export const ContainerButtons = () => (
   <ScreenContainer style={styles.container}>
      <ButtonPrev/>
      <ButtonNext/>
   </ScreenContainer>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
