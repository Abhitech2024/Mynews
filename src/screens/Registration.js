import React , {useState} from 'react'
import { SafeAreaView,ScrollView,StyleSheet, Text, View ,TextInput, TouchableOpacity,Button, Alert} from 'react-native'



const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Check if phone number is exactly 10 digits and contains only digits
    return /^\d{10}$/.test(phoneNumber);
  };

  const validatePassword = (password) => {
    // Password length should be exactly 6 characters
    if (password.length !== 6) {
      return false;
    }

    // Check for at least one uppercase letter
    // if (!/[A-Z]/.test(password)) {
    //   return false;
    // }

    // Check for at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return false;
    }

    // Check for at least one numeric digit
    if (!/\d/.test(password)) {
      return false;
    }

    return true;
  };
  const handleValidation = () => {
    if (name === '') {
      Alert.alert('Invalid Name', 'Name cannot be empty.');
    } else if (!isNaN(name)) {
      Alert.alert('Invalid Name', 'Name cannot contain numeric characters.');
    } else if (email === '') {
      Alert.alert('Invalid Email', 'Email cannot be empty.');
    } else if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Email must be in the format example@gmail.com.');
    } else if (phoneNumber === '') {
      Alert.alert('Invalid Phone Number', 'Phone number cannot be empty.');
    } else if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
    } else if (password === '') {
      Alert.alert('Invalid Password', 'Password cannot be empty.');
    } else if (!validatePassword(password)) {
      Alert.alert(
        'Invalid Password',
        'Password must be exactly 6 characters long, contain at least one special character, and one numeric digit.'
      );
    } else if (confirmPassword === '') {
      Alert.alert('Invalid Confirm Password', 'Confirm Password cannot be empty.');
    } else if (password !== confirmPassword) {
      Alert.alert('Invalid Confirm Password', ' Oops! Password and Confirm Password NOT same');
    } else {
      Alert.alert('Form Valid', 'Thanks for Register');
    }
  };
   
  return ( 
  <ScrollView 
    contentContainerStyle={{ paddingTop : 20,paddingHorizontal : 20}}>

  <Text style ={{color : 'black' ,fontSize : 60 , fontWeight :'bold'}}>Register</Text>
  <Text style ={{color : 'grey' , fontSize : 23 , marginVertical: 5}}>Enter your Details to Register</Text>
   
    <View style={styles.inputContainer}>
        <TextInput style ={styles.inputStyle}  
        placeholder='Username' 
        onChangeText={setName}
        value={name}
        keyboardType="default"        
        autoCapitalize="none"
        autoCorrect={false}/>
    </View>

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
        placeholder=' +91 Phone Number'
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="numeric"
        maxLength={10}         
        autoCapitalize="none"
        autoCorrect={false}/>
    </View>

    <View style={styles.inputContainer}>
        <TextInput style ={styles.inputStyle}
        ref={this.buildNameTextInput}  
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        autoCapitalize="none"         
        autoCorrect={false}
        secureTextEntry={true}/>
    </View>

    <View style={styles.inputContainer}>
        <TextInput style ={styles.inputStyle}  
        placeholder='Confirm Password'
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        autoCapitalize="none"         
        autoCorrect={false}
        secureTextEntry={false}/>
    </View>
     {/* <Button title="Register" onPress={handleValidation}  style ={{color : 'green'}}/>  */}
    <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor:"green"
          },
        ]}
        onPress={handleValidation}
      >
     <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
  </ScrollView>
  )
};

export default Registration

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
    fontSize: 15,
    color: "#7d7d7d",
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