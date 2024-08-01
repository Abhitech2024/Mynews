import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      
      <Text style={styles.sectionTitle}>Company Details</Text>
      <Text style={styles.detail}>Company Name: NewsApp Inc.</Text>
      <Text style={styles.detail}>Phone Number: +91 9988776655</Text>
      <Text style={styles.detail}>Email: myNews@app.com</Text>
      
      <Text style={styles.sectionTitle}>Vision</Text>
      <Text style={styles.vision}>Our vision is to provide the latest news updates accurately and earliest, keeping our users informed about world events 24/7.</Text>
      
      <Text style={styles.sectionTitle}>Technologies Used</Text>
      <Text style={styles.detail}>- React Native</Text>
      <Text style={styles.detail}>- NewsAPI</Text>
      <Text style={styles.detail}>- AsyncStorage</Text>
      <Text style={styles.detail}>- React Navigation</Text>
      
      <Text style={styles.sectionTitle}>App Developer</Text>
      <Text style={styles.developer}>App Developer: <Text style={styles.bold}>Abhishek</Text></Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color : 'grey'
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
    color : 'brown'
  },
  detail: {
    fontSize: 16,
    marginBottom: 4,
  },
  vision: {
    fontSize: 16,
    marginBottom: 16,
  },
  developer: {
    fontSize: 16,
    marginBottom: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default AboutPage;

