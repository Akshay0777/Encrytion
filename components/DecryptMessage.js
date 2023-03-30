import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const DecryptMessage = ({route , navigation}) => {
  const {inputString} = route.params;
  const {inputRowData} = route.params;
  const [inputData, setInputData] = useState(inputString);
  const [inputRow, setInputRow] = useState(inputRowData);
  const [result, setResult] = useState("");

 
  const Decrypt = () => {

    let s = inputData;
    let n = s.length;
    let answerString = "";

    let row = parseInt(inputRow);
    let col = parseInt(parseInt(n) / parseInt(row));

    if(row > n){
      setResult("")
      window.alert("Error : You entered row value greater than the length of actual input string")
    }
    else{
      for (let i = 0; i < col; ++i){
        for (let j = i; j < n; j += col + 1){
          answerString += s[j];
        }
      }
      setResult(answerString)
    }

  }

  const switchToEncrypt = () => {
    const passingResult = result;
    setResult("");
    navigation.navigate("Encrypt", {inputString : `${passingResult}`, inputRowData : `${parseInt(inputRow)}`})

  }

  return (
    <View style={styles.container}>
      <Text>DecryptMessage</Text>
      <View style={styles.container}>
        <Text>Enter your message to Decrypt : </Text>
        <TextInput  style={styles.input} onChange= {(e)=>{setInputData(e.target.value)}} value={inputData}/>
        <Text>Enter Rows : </Text>
        <TextInput  style={styles.input} value={inputRow} onChange= {(e)=>{setInputRow(e.target.value)}}/>
      </View>
      <View>
        <TouchableOpacity style={inputData === "" || inputRow === "" || isNaN(inputRow) ? styles.disabledButton : styles.button}
        disabled = {inputData === "" || inputRow === "" || isNaN(inputRow)}
        onPress = {Decrypt}
        >
          <Text>Decrypt</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container , {
        visibility : result === "" ? "hidden":"visible"
      }]}>
        <Text>Encrypted String : </Text>
        <Text> <h2>{result}</h2></Text>
        <TouchableOpacity style={[styles.button, {
          backgroundColor : "#c2fbd7",
          boxShadow: "rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px",
        }]}
        onPress = {switchToEncrypt}
        >
          <Text>Encrypt</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    margin : "20px"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius : "10px"
  },
  button : {
    width : "60%",
    marginLeft : "20%",
    marginTop : "1%",
    backgroundColor: "rgba(250, 126, 96, 0.8)",
    borderRadius: "100px",
    boxShadow: "rgba(248, 94, 55, 0.2) 0 -25px 18px -14px inset,rgba(248, 94, 55, 0.15) 0 1px 2px,rgba(248, 94, 55, 0.15) 0 2px 4px,rgba(248, 94, 55, 0.15) 0 4px 8px,rgba(248, 94, 55, 0.15) 0 8px 16px,rgba(248, 94, 55, 0.15) 0 16px 32px",
    cursor: "pointer",
    padding: "15px",
    textAlign: "center",
    textDecoration: "none",
    transition: "all 250ms",
    border : "0",
    fontSize: "26px",
    userSelect: "none",
    touchAction: "manipulation"
  },
  disabledButton : {
    width : "60%",
    marginLeft : "20%",
    marginTop : "1%",
    backgroundColor: "grey",
    borderRadius: "100px",
    boxShadow: "2px 2px #888888",
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

})



export default DecryptMessage