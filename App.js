import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {ContainerButtons} from "./components/ContainerButtons";
import {Header} from "./components/header/Header";
import {QuoteBox} from "./components/quotes/QuoteBox";
import {KanyeImage} from "./components/images/KanyeImage";
import {SafeAreaView} from "react-native-web";
import {ScrollView} from "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";

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
     <NavigationContainer>
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
     </NavigationContainer>

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
