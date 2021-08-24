import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ContainerButtons} from "./components/ContainerButtons";
import {Header} from "./components/header/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <Content/>
      <ContainerButtons/>

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
