import React, { useState } from 'react';
import { View,Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {

  const [formData, setFormData] = useState({
    email: '',  password: '',   error: '',
  });
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Retrieve stored credentials from AsyncStorage
      const userData = await AsyncStorage.getItem('user');

      if (userData) {
        const { email: storedEmail, password: storedPassword } = JSON.parse(userData);

        if (formData.email === storedEmail && formData.password === storedPassword) {
          navigation.navigate('Home');
        } else {
          setFormData({ ...formData, error: 'Invalid email or password' });
        }
      } else {
        setFormData({ ...formData, error: 'No user data found' });
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
      setFormData({ ...formData, error: 'Error logging in' });
    }
  };

  const handleChangeText = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };



  // const handleLogin = async () => {
  //   try {
  //     // Retrieve stored credentials from AsyncStorage
      
  //     const userData = await AsyncStorage.getItem('user');
      
  //     if (userData) {
  //       const { email: storedEmail, password: storedPassword } = JSON.parse(userData);

  //       if (email === storedEmail && password === storedPassword) {
  //        navigation.navigate('Home');
  //        //navigation.navigate('Drawer');
  //       } else {
  //         setError('Invalid email or password');
  //       }
  //     } else {
  //       setError('No user data found');
  //     }
  //   } catch (error) {
  //     console.log('Error retrieving data:', error);
  //     setError('Error logging in');
  //   }
  // };

  return (
    <View style={styles.container}>
    <Text style ={{color : 'black' ,fontSize : 60 , fontWeight :'bold'}}>Login</Text>
    <Text style ={{color : 'grey' , fontSize : 15 , marginVertical: 5,paddingBottom:20 }}>Dear! User Enter your Details Here.</Text>
     <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => handleChangeText('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => handleChangeText('password', text)}
        secureTextEntry
      />
      {formData.error ? <Text style={styles.errorText}>{formData.error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
      {/* <Button title="Login" onPress={() => navigation.navigate('Home')} /> */}
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('Registration')}
      />
      <Button
        title="Login via Phone"
        onPress={() => navigation.navigate('SecondLogin')}
      />
    </View>
  );
};

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
