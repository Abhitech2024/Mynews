import React, { useState } from 'react'
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const ContactForm = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    // Retrieve data from AsyncStorage
    try {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');

      // Check if stored credentials match input
      if (storedEmail === email && storedPassword === password) {
        navigation.navigate('HelloWorld');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  };

  return (
    <View style = {styles.mainContainer}>
    <Text style ={{color : 'black' ,fontSize : 60 , fontWeight :'bold'}}>Login</Text>
    <Text style ={{color : 'grey' , fontSize : 23 , marginVertical: 5}}>Dear! User Enter your Details </Text>

    <View style={styles.inputContainer}>
        <TextInput style ={styles.inputStyle} 
        placeholder='Email'
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"           
        autoCorrect={false}/>
    </View>

    <View style={styles.inputContainer}>
        <TextInput style ={styles.inputStyle}
        ref={this.buildNameTextInput}  
        placeholder='Password'
        autoCapitalize="none"         
        autoCorrect={false}
        secureTextEntry={true}/>
    </View>

      <TouchableOpacity
        onPress={handleLogin}
        style={[
          styles.buttonStyle,
          {
            backgroundColor:"green"
          },
        ]}
      >
      <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('Registration')}
      />
      <Button
        title="Login via Phone"
        onPress={() => navigation.navigate('SecondLogin')}
      />



    {/* <View>
        <Text style={styles.description}>
        Do you want to <Button title=" Enter via Phone"
        onPress={() => navigation.navigate('SecondLogin')}/>
        </Text>
    </View> */}

      {/* <Text style ={{paddingTop : 10 , paddingLeft: 7,color : 'grey' , fontSize : 18 , marginVertical: 5}}>Do NOT have a account?
      <Text style={{color :'blue'}}> Register</Text></Text> */}
    </View>
  )
}

export default ContactForm ; 


const styles = StyleSheet.create({
  mainContainer: {
    height : "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginTop: 20,
  },
  mainHeader: {
    fontSize: 25,
    color: "blue",
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: "bold",
    textAlign :"center"
  },
  description: {
    fontSize: 18,
    color: "grey",
    paddingLeft:10,
    paddingTop:5,
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: "regular",
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "regular",
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
    fontFamily: 'regular',
    fontSize: 20,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  wrapperText: {
    marginLeft: 10,
    fontFamily: "regular",
    fontSize: 16,
  },
  buttonStyle: {
    marginTop: 30,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

