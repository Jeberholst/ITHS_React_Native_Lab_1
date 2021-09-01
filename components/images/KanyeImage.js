import React from "react";
import ImageKanye from '../../../ITHS_CPU_RN_Lab_1/__tests__/assets/images/Kanye-west.webp'
import { View, Image, StyleSheet } from 'react-native';


function KanyeImage(){
  return (
     <View style={styles.container}>
       <Image
          style={styles.image}
          source={ImageKanye}
       />
     </View>
  );
}

export default KanyeImage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 50,
    alignItems: 'center'
  },
  image: {
    width: '50vh',
    height: '30vh',
  },
});
