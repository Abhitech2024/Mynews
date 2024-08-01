import React , {useState} from 'react'
import { SafeAreaView,ScrollView,StyleSheet, Text, View ,TextInput, TouchableOpacity,Button, Alert} from 'react-native'



const Loginpassword = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
    };

  const handleValidation = () => {
    if (phoneNumber === '') {
      Alert.alert('Invalid Phone Number', 'Phone number cannot be empty.');
    } else if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
    } else {
      Alert.alert('Form Valid', 'Thanks for Register');
    }
  };
   
  return ( 
  <ScrollView 
    contentContainerStyle={{ paddingTop : 30,paddingHorizontal : 20}}>

    <Text style ={{color : 'black' ,fontSize : 60 , fontWeight :'bold'}}>Login</Text>
    <Text style ={{color : 'grey' , fontSize : 20 , marginVertical: 5}}>Enter your Phone number to Login</Text>


    <View style={styles.inputContainer}>
        <TextInput style ={styles.inputStyle}  
        placeholder=' +91 Phone Number'
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="numeric"
        maxLength={10}         
        autoCapitalize="none"
        autoCorrect={false}/>
    </View>

    <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor:"green"
          },
        ]}
        onPress={handleValidation}
      >
     <Text style={styles.buttonText}>Login</Text>
     </TouchableOpacity>
     <Text style ={{paddingTop : 10 ,color : 'grey' , fontSize : 20 , marginVertical: 5}}>Do NOT have an account?<Text style={{color :'blue'}}> Register</Text></Text>

  </ScrollView>
  )
};

export default Loginpassword;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: "grey",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
    fontFamily: 'regular',
    fontSize: 20,
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