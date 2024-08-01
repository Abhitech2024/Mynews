import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContactScreen = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async () => {
    if (feedback.length > 150) {
      Alert.alert('Error', 'Feedback must be 150 characters or less.');
      return;
    }

    try {
      const existingFeedbacks = await AsyncStorage.getItem('feedbacks');
      const feedbacks = existingFeedbacks ? JSON.parse(existingFeedbacks) : [];
      feedbacks.push(feedback);
      
      await AsyncStorage.setItem('feedbacks', JSON.stringify(feedbacks));
      console.log('Queries :', feedbacks);
      setFeedback('');
      Alert.alert('Success', 'Feedback submitted successfully.');

            // Retrieve registration data
            const userDataJson = await AsyncStorage.getItem('user');
            const userData = userDataJson ? JSON.parse(userDataJson) : {};
      
            // Combine data
            const combinedData = {
              ...userData,
              query: feedbacks,
            };
      
            // Print combined data to terminal
            console.log('Combined Data:', combinedData);
            
    } catch (error) {
      console.error('Error saving feedback:', error);
    }
  };

  const feedbackDelete = async () => {
    try {
      await AsyncStorage.removeItem('feedbacks');
      console.log('All feedbacks cleared.');
      Alert.alert('Success', 'All feedbacks have been cleared.');
    } catch (error) {
      console.error('Error clearing feedbacks:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style = {{fontSize : 30 , fontWeight: 'bold', color : 'grey'}}> Hello! Users</Text>
      <Text style = {{fontSize : 15 , color : 'black' , paddingTop :15 , paddingLeft : 5 , paddingBottom : 15}}>Don't hesitate to contact us or give any suggestions to improve the app.</Text>
      <Text style = {{fontSize : 15 , color : 'black' , paddingTop :15 , paddingLeft : 5 , paddingBottom : 15}}>Feedback Upto 150 characters</Text>
      <TextInput
        style={styles.input}
        multiline
        maxLength={150}
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Clear All Feedbacks" onPress={feedbackDelete} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 150,
    borderColor: 'gray',
    borderRadius : 10 ,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default ContactScreen;
