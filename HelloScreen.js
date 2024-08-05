import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HelloScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Hello Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HelloScreen;
