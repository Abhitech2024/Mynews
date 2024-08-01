import React from 'react';
import { View, Button, Text , StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//Logout Screen
function LogoutScreen({ navigation }) {
  return (
    <View>
      <Text style ={{color : 'grey' , fontSize : 20 , fontWeight : 'bold', paddingBottom : 50}}>Logout Page</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
export default LogoutScreen;
