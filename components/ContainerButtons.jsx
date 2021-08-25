import React, {createContext, useState} from 'react';
import {StyleSheet} from "react-native";
import {ScreenContainer} from "react-native-screens";
import {ButtonPrevNext} from "./ButtonPrevNext";
import {fetchNew} from "../api/api";



export const ContainerButtons = ({setQuote}) => {

   const [isPrevEnabled, setIsPrevEnabled] = useState(false);
   const [isNextEnabled, setNextEnabled] = useState(false);

   const onNextClick = async () => {
     const data = await fetchNew()
     console.log('DATA RETURNED', data)
     setQuote(data)
   }

   return(
      <ScreenContainer style={styles.container}>
        {/*<ButtonPrevNext {...{title: 'Prev', onPress: () => { alert('Previous') }, accessLabel: 'Next button', enabled: isNextEnabled }}/>*/}
        <ButtonPrevNext {...{title: 'Next', onPress: () => onNextClick() , accessLabel: 'Next button', enabled: isPrevEnabled}}/>
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
