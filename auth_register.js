import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function RegisterScreen() {
  // State object to manage form fields and error message
  const [formState, setFormState] = useState({
    username: '',  email: '', phone: '', password: '', confirmPassword: '',
    errorMessage: '',
  });

  const handleChange = (name, value) => {
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    const { username, email, phone, password, confirmPassword } = formState;

    if (username === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
      setFormState(prevState => ({
        ...prevState,
        errorMessage: 'All fields are required.',
      }));
      return;
    }

    if (password !== confirmPassword) {
      setFormState(prevState => ({
        ...prevState,
        errorMessage: 'Passwords do not match.',
      }));
      return;
    }

    try {
      // Create a new user with email and password
      await auth().createUserWithEmailAndPassword(email, password);

      // Get the currently signed-in user
      const user = auth().currentUser;

      if (user) {
        // Store additional user information in Firestore
        await firestore().collection('users').doc(user.uid).set({
          username,
          email,
          phone,
          password,
        });

        // Clear the form fields
        setFormState({
          username: '', email: '',  phone: '', password: '', confirmPassword: '',
          errorMessage: '',
        });
        alert('User registered successfully!');
      }
    } catch (error) {
      setFormState(prevState => ({
        ...prevState,
        errorMessage: error.message,
      }));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Enter your details here</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formState.username}
        onChangeText={text => handleChange('username', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formState.email}
        onChangeText={text => handleChange('email', text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={formState.phone}
        onChangeText={text => handleChange('phone', text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formState.password}
        onChangeText={text => handleChange('password', text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={formState.confirmPassword}
        onChangeText={text => handleChange('confirmPassword', text)}
        secureTextEntry
      />
      {formState.errorMessage ? <Text style={styles.errorText}>{formState.errorMessage}</Text> : null}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
});

export default RegisterScreen;