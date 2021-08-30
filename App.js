import { StatusBar } from 'expo-status-bar';
import React, {createContext, useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ContainerButtons} from "./components/ContainerButtons";
import {Header} from "./components/header/Header";
import {QuoteBox} from "./components/quotes/QuoteBox";
import {KanyeImage} from "./components/images/KanyeImage";
import {SafeAreaView} from "react-native-web";
import {ScrollView} from "react-native-gesture-handler";


// export const AppContext = createContext({
//   CURRENT_QUOTE: "Nothing to see here"
// });
export const QuoteContext = React.createContext({});

export default function App() {

  const [currentQuote, setCurrentQuote] = useState({quote: 'Starta genom att trycka på knappen!', prevQuote: currentQuote});

  const setQuote = (obj)=> {
    setCurrentQuote(obj)
  };

  useEffect(() => {
      console.log(currentQuote)
  }, [currentQuote])


  return (

     <SafeAreaView style={styles.container}>
       <ScrollView style={styles.scrollView} vertical={true}>
         <StatusBar style="auto" />
         <Header/>
         <KanyeImage/>
         <QuoteContext.Provider value={currentQuote}>

           <QuoteBox/>
           <ContainerButtons setQuote={setQuote} />

         </QuoteContext.Provider>

       </ScrollView>
     </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '150vh',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#2d2d2d',
    alwaysBounceVertical: true,
    paddingVertical: 20,
  },

});
