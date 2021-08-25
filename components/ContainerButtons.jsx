import React, {useState} from 'react';
import {StyleSheet} from "react-native";
import {ScreenContainer} from "react-native-screens";
import {ButtonPrevNext} from "./ButtonPrevNext";

export const ContainerButtons = () => {

   const [isPrevEnabled, setIsPrevEnabled] = useState(false);
   const [isNextEnabled, setNextEnabled] = useState(true);

   return(
      <ScreenContainer style={styles.container}>
        <ButtonPrevNext {...{title: 'Prev', onPress: () => { alert('Previous') }, accessLabel: 'Next button', enabled: isNextEnabled }}/>
        <ButtonPrevNext {...{title: 'Next', onPress: () => { alert('Next') }, accessLabel: 'Next button', enabled: isPrevEnabled}}/>
      </ScreenContainer>
    )

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
