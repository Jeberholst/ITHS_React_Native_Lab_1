import {StyleSheet} from "react-native";

const SharedStyles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 24,
    borderRadius: 15,
    marginLeft: 15,
    textColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 30,
    color: '#000'
  },

});


export const navButtonStyle = StyleSheet.compose(SharedStyles.button, SharedStyles.text);
