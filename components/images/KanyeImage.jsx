import React from "react";
import ImageKanye from '../../assets/images/Kanye-west.webp'
import { View, Image, StyleSheet } from 'react-native';


export const KanyeImage = () => {
  return (
     <View style={styles.container}>
       <Image
          style={styles.image}
          source={ImageKanye}
       />
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image: {
    width: '50vh',
    height: '30vh',
  },
});
