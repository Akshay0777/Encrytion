import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {

  const switchToEncrypt = () => {
    navigation.navigate("Encrypt", {inputString : "", inputRowData : ""})
  }

  const switchToDecrypt = () => {
    navigation.navigate("Decrypt", {inputString : "", inputRowData : ""})
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Choos the Option : </Text>

      <View style={styles.container}>
        <TouchableOpacity style={[styles.button]}
        onPress = {switchToEncrypt}>
          <Text>Encrypt</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {
          backgroundColor : "rgba(250, 126, 96, 0.8)",
          boxShadow: "rgba(248, 94, 55, 0.2) 0 -25px 18px -14px inset,rgba(248, 94, 55, 0.15) 0 1px 2px,rgba(248, 94, 55, 0.15) 0 2px 4px,rgba(248, 94, 55, 0.15) 0 4px 8px,rgba(248, 94, 55, 0.15) 0 8px 16px,rgba(248, 94, 55, 0.15) 0 16px 32px",
        }]}
        onPress = {switchToDecrypt}>
          <Text>Decrypt</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    textAlign : "center",
    margin : "5%"
  },
  text: {
    textAlign : "center"
  },

/* CSS */
  button : {
    width : "60%",
    marginLeft : "20%",
    marginTop : "10%",
    backgroundColor: "#c2fbd7",
    borderRadius: "100px",
    boxShadow: "rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px",
    cursor: "pointer",
    padding: "15px",
    textAlign: "center",
    textDecoration: "none",
    transition: "all 250ms",
    border : "0",
    fontSize: "26px",
    userSelect: "none",
    touchAction: "manipulation"
  }

  // .button:hover {
  //   box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  //   transform: scale(1.05) rotate(-1deg);
  // }
})

export default Home