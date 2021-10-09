import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native"

const App = () => {
  return (
    <View style={style.container}>
      <Text style={style.holaMundo}>Hello world!</Text>
      <Image
        source={{uri: 'https://picsum.photos/200/200' }}
        style={style.image}
      />
      <TouchableOpacity onPress={() => Alert.alert("holi")} style={style.button}>
        <Text style={style.textButton}>Press me</Text>
      </TouchableOpacity>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14A751'
  },

  holaMundo: {
    marginTop: 24,
    fontSize: 30,
    color: '#fff'
  },

  image: {
    height: 200,
    width: 200
  },

  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 5,
    margin: 5
  },

  textButton: {
    color: '#fff',
    fontSize: 20
  }
})

export default App;