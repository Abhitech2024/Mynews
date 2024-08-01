import React, { useState } from 'react';
import { View,Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SecondLoginScreen = ({ navigation } , props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Retrieve the stored user data from AsyncStorage
      const userData = await AsyncStorage.getItem('user');
      
      if (userData) {
        const { phone: registeredPhoneNumber } = JSON.parse(userData);

        if (phoneNumber === registeredPhoneNumber) {
          navigation.navigate('Home');
         // navigation.navigate('Drawer');
        } else {
          setError('Phone number does not match');
        }
      } else {
        setError('No user data found');
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
      setError('Error logging in');
    }
  };

  // const handleLogin = async () => {
  //   try {
  //     // Retrieve registered phone number from AsyncStorage
  //     const registeredPhoneNumber = await AsyncStorage.getItem('phone');

  //     if (phoneNumber === registeredPhoneNumber) {
  //       navigation.navigate('HelloWorld');
  //     } else {
  //       setError('Phone number does not match');
  //     }
  //   } catch (error) {
  //     console.log('Error retrieving data:', error);
  //     setError('Error logging in');
  //   }
  // };

  return (
    <View style={styles.container}>
          <Text style ={{color : 'black' ,fontSize : 60 , fontWeight :'bold'}}>Login</Text>
          <Text style ={{color : 'grey' , fontSize : 15 , marginVertical: 5, paddingBottom:15}}>Enter your Phone number to Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
        maxLength={10}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
      {/* <Button title="Login" onPress={() => navigation.navigate('Home')} /> */}
      <Button
        title="Login via Email"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default SecondLoginScreen;

