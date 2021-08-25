import { StatusBar } from 'expo-status-bar';
import React, {createContext, useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ContainerButtons} from "./components/ContainerButtons";
import {Header} from "./components/header/Header";
import {QuoteBox} from "./components/quotes/QuoteBox";


// export const AppContext = createContext({
//   CURRENT_QUOTE: "Nothing to see here"
// });
export const QuoteContext = React.createContext({});

export default function App() {

  const [currentQuote, setCurrentQuote] = useState({quote: 'Starta'});

  const setQuote = (obj)=> {
    setCurrentQuote(obj)
  };

  useEffect(() => {
      console.log(currentQuote)
  }, [currentQuote])


  return (

      <View style={styles.container}>
          <StatusBar style="auto" />
          <Header/>
          <QuoteContext.Provider value={currentQuote}>

            <QuoteBox/>
            <ContainerButtons setQuote={setQuote}/>

          </QuoteContext.Provider>

        </View>


  );
}
const Content = () => {

  return(
     <View style={styles.content}>
       <Text style={styles.text}>{'EN FIN TEXT HÄR'}</Text>
     </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    color: 'white',
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  content: {
    height: '25%'
  }

});
