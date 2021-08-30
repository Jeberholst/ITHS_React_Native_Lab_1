import React, {createContext, useContext, useState} from 'react';
import {StyleSheet} from "react-native";
import {ScreenContainer} from "react-native-screens";
import {ButtonPrevNext} from "./ButtonPrevNext";
import {fetchNew} from "../api/api";
import {QuoteContext} from "../App";

export const ContainerButtons = ({setQuote}) => {

   const [isPrevEnabled, setIsPrevEnabled] = useState(false);
   const [isNextEnabled, setNextEnabled] = useState(true);

    const context = useContext(QuoteContext)

   const onNextClick = async () => {
     const data = await fetchNew()
     Object.assign(data, { prevQuote: context ? context.quote : ''})
     console.log('DATA RETURNED', data)
     setQuote(data)
   }

   return(
      <ScreenContainer style={styles.container}>
        <ButtonPrevNext {...{title: 'Next Quote', onPress: () => onNextClick() , accessLabel: 'Next button', enabled: !isNextEnabled}}/>
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
