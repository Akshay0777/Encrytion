import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const EncryptMessage = ({navigation, route}) => {
  const {inputString} = route.params;
  const {inputRowData} = route.params;
  const [inputData, setInputData] = useState(inputString);
  const [inputRow, setInputRow] = useState(inputRowData);
  const [result, setResult] = useState("");

  const Encrypt = () => {
    let s = inputData;
    let n = s.length;
    let answerString = "";


    let row = parseInt(inputRow);
    let column = parseInt(n/row) + parseInt(row-1);

    if(row > n){
      setResult("")
      window.alert("Error : You entered row value greater than the length of actual input string")
    }
    else{
      for(let i = 0; i<row; i++){
        //counter for adding extra spaces at the end of each ith iteration
        let counter = 0;

        // adding extra spaces at beginnig 
        let k = i;
        while(k>0){
          answerString += " ";
          k--;
          counter++;
        }
        answerString += s[i];
        counter++;
        for(let j = i+row; j<n; j+=row){
          answerString += s[j];
          counter++;
        }
        
        // adding extra spaces at the end by using counter
        while(counter < column){
          answerString += " ";
          counter++;
        }
      }
      // answerString;
      setResult(answerString)
    }

  }
  

  const switchToDecrypt = () => {
    const passingResult = result;
    setResult("");
    navigation.navigate("Decrypt", {inputString : `${passingResult}`, inputRowData : `${parseInt(inputRow)}`})

  }

  return (
    <View style={styles.container}>
      <Text>EncryptMessage</Text>
      <View style={styles.container}>
        <Text>Enter your message to Encrypt : </Text>
        <TextInput  style={styles.input} onChange= {(e)=>{setInputData(e.target.value)}} value={inputData}/>
        <Text>Enter Rows : </Text>
        <TextInput keyboardType='numeric'  style={styles.input} value={inputRow} onChange= {(e)=>{setInputRow(e.target.value)}}/>
      </View>
      <View>
        <TouchableOpacity style={inputData === "" || inputRow === "" || isNaN(inputRow) ? styles.disabledButton : styles.button}
        disabled = {inputData === "" || inputRow === "" || isNaN(inputRow)}
        onPress = {Encrypt}
        >
          <Text>Encrypt</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container , {
        visibility : result === "" ? "hidden":"visible"
      }]}>
        <Text>Encrypted String : </Text>
        <Text> <h2>{result}</h2></Text>
        <TouchableOpacity style={[styles.button, {
          backgroundColor : "rgba(250, 126, 96, 0.8)",
          boxShadow: "rgba(248, 94, 55, 0.2) 0 -25px 18px -14px inset,rgba(248, 94, 55, 0.15) 0 1px 2px,rgba(248, 94, 55, 0.15) 0 2px 4px,rgba(248, 94, 55, 0.15) 0 4px 8px,rgba(248, 94, 55, 0.15) 0 8px 16px,rgba(248, 94, 55, 0.15) 0 16px 32px",
        }]}
        disabled = {inputData === "" || inputRow == undefined}
        onPress = {switchToDecrypt}
        >
          <Text>Decrypt</Text>
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

export default EncryptMessage