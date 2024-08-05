import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ActivityIndicator, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationScreen = ({ navigation }) => {
    // Single state object for all form fields and errors
    const [formState, setFormState] = useState({
        username: '', email: '', phone: '', password: '', confirmPassword: '',
        loading: false,
        nameError: '', emailError: '', phoneError: '', passwordError: '', confirmPasswordError: ''
    });

    const handleRegister = async () => {
        // Destructure formState for easy access
        const { username, email, phone, password, confirmPassword } = formState;

        // Validate inputs
        if (!username || !email || !phone || !password || !confirmPassword) {
            setFormState(prevState => ({
                ...prevState,
                nameError: !username ? 'Username cannot be empty' : '',
                emailError: !email ? 'Email cannot be empty' : '',
                phoneError: !phone ? 'Phone number cannot be empty' : '',
                passwordError: !password ? 'Password cannot be empty' : '',
                confirmPasswordError: !confirmPassword ? 'Confirm Password cannot be empty' : ''
            }));
            return;
        }
        if (!/^[a-zA-Z ]+$/.test(username)) {
            setFormState(prevState => ({
                ...prevState,
                nameError: 'Name should not contain numeric or special characters'
            }));
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setFormState(prevState => ({
                ...prevState,
                emailError: 'Invalid email format'
            }));
            return;
        }
        if (!/^\d{10}$/.test(phone)) {
            setFormState(prevState => ({
                ...prevState,
                phoneError: 'Phone number must be 10 digits'
            }));
            return;
        }
        if (password.length < 6) {
            setFormState(prevState => ({
                ...prevState,
                passwordError: 'Password must be at least 6 characters long'
            }));
            return;
        }
        if (!/\d/.test(password)) {
            setFormState(prevState => ({
                ...prevState,
                passwordError: 'Password must contain at least one numeric digit'
            }));
            return;
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setFormState(prevState => ({
                ...prevState,
                passwordError: 'Password must contain at least one special character'
            }));
            return;
        }
        if (password !== confirmPassword) {
            setFormState(prevState => ({
                ...prevState,
                confirmPasswordError: 'Passwords do not match'
            }));
            return;
        }

        // Show loader for 3 seconds
        setFormState(prevState => ({ ...prevState, loading: true }));
        setTimeout(async () => {
            // Storing data in AsyncStorage
            try {
                const userData = { username, email, phone, password };
                await AsyncStorage.setItem('user', JSON.stringify(userData));
                // Navigate back to Login screen after registration
                navigation.navigate('Login');
            } catch (error) {
                Alert.alert('Error', 'Error saving data:', error.message);
            } finally {
                setFormState(prevState => ({ ...prevState, loading: false }));
            }
        }, 3000); // Simulate 3 seconds delay
    };

    return (
        <View style={styles.container}>
            <Text style={{ color: 'blue', fontSize: 60, fontWeight: 'bold' }}>Register</Text>
            <Text style={{ color: 'grey', fontSize: 15, marginVertical: 5, paddingBottom: 15 }}>
                Enter your Details to Register !
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={formState.username}
                onChangeText={text => setFormState(prevState => ({ ...prevState, username: text }))}
            />
            {formState.nameError ? <Text style={styles.errorText}>{formState.nameError}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={formState.email}
                onChangeText={text => setFormState(prevState => ({ ...prevState, email: text }))}
            />
            {formState.emailError ? <Text style={styles.errorText}>{formState.emailError}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={formState.phone}
                onChangeText={text => setFormState(prevState => ({ ...prevState, phone: text }))}
                keyboardType="numeric"
                maxLength={10}
            />
            {formState.phoneError ? <Text style={styles.errorText}>{formState.phoneError}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={formState.password}
                onChangeText={text => setFormState(prevState => ({ ...prevState, password: text }))}
                secureTextEntry
            />
            {formState.passwordError ? <Text style={styles.errorText}>{formState.passwordError}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={formState.confirmPassword}
                onChangeText={text => setFormState(prevState => ({ ...prevState, confirmPassword: text }))}
                secureTextEntry
            />
            {formState.confirmPasswordError ? <Text style={styles.errorText}>{formState.confirmPasswordError}</Text> : null}
            <Button title="Register" onPress={handleRegister} />
            <Button title="Login via phone" onPress={() => navigation.navigate('SecondLogin')} />
            {formState.loading && (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )}
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
    loaderContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'left',
        width: '80%',
    },
});
export default RegistrationScreen;








// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, ActivityIndicator, Text, Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const RegistrationScreen = ({ navigation }) => {
//   const [formState, setFormState] = useState({
//     username: '', email: '', phone: '', password: '', confirmPassword: '',
//     loading: false,
//     nameError: '', emailError: '', phoneError: '', passwordError: '', confirmPasswordError: '',
//   });

//   const updateField = (field, value) => {
//     setFormState(prevState => ({
//       ...prevState,
//       [field]: value,
//       [`${field}Error`]: '',  // Clear the error message when the user starts typing
//     }));
//   };

//   const validateForm = () => {
//     const { username, email, phone, password, confirmPassword } = formState;
//     let isValid = true;

//     if (!username) {
//       setFormState(prevState => ({ ...prevState, nameError: 'Username cannot be empty' }));
//       isValid = false;
//     }
//     if (!email) {
//       setFormState(prevState => ({ ...prevState, emailError: 'Email cannot be empty' }));
//       isValid = false;
//     }
//     if (!phone) {
//       setFormState(prevState => ({ ...prevState, phoneError: 'Phone number cannot be empty' }));
//       isValid = false;
//     }
//     if (!password) {
//       setFormState(prevState => ({ ...prevState, passwordError: 'Password cannot be empty' }));
//       isValid = false;
//     }
//     if (!confirmPassword) {
//       setFormState(prevState => ({ ...prevState, confirmPasswordError: 'Confirm Password cannot be empty' }));
//       isValid = false;
//     }

//     if (username && !/^[a-zA-Z ]+$/.test(username)) {
//       setFormState(prevState => ({ ...prevState, nameError: 'Name should not contain numeric or special characters' }));
//       isValid = false;
//     }
//     if (email && !/\S+@\S+\.\S+/.test(email)) {
//       setFormState(prevState => ({ ...prevState, emailError: 'Invalid email format' }));
//       isValid = false;
//     }
//     if (phone && !/^\d{10}$/.test(phone)) {
//       setFormState(prevState => ({ ...prevState, phoneError: 'Phone number must be 10 digits' }));
//       isValid = false;
//     }
//     if (password && password.length < 6) {
//       setFormState(prevState => ({ ...prevState, passwordError: 'Password must be at least 6 characters long' }));
//       isValid = false;
//     }
//     if (password && !/\d/.test(password)) {
//       setFormState(prevState => ({ ...prevState, passwordError: 'Password must contain at least one numeric digit' }));
//       isValid = false;
//     }
//     if (password && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//       setFormState(prevState => ({ ...prevState, passwordError: 'Password must contain at least one special character' }));
//       isValid = false;
//     }
//     if (password && confirmPassword && password !== confirmPassword) {
//       setFormState(prevState => ({ ...prevState, confirmPasswordError: 'Passwords do not match' }));
//       isValid = false;
//     }

//     return isValid;
//   };

//   const handleRegister = async () => {
//     if (!validateForm()) return;

//     setFormState(prevState => ({ ...prevState, loading: true }));

//     setTimeout(async () => {
//       try {
//         const { username, email, phone, password } = formState;
//         const userData = { username, email, phone, password };

//         await AsyncStorage.setItem('user', JSON.stringify(userData));
//         navigation.navigate('Login');
//       } catch (error) {
//         Alert.alert('Error', 'Error saving data:', error.message);
//       } finally {
//         setFormState(prevState => ({ ...prevState, loading: false }));
//       }
//     }, 3000); // Simulate 3 seconds delay
//   };

//   const {
//     username, email, phone, password, confirmPassword, loading,

//     nameError, emailError, phoneError, passwordError, confirmPasswordError,
//   } = formState;

//   return (
//     <View style={styles.container}>
//       <Text style={{ color: 'black', fontSize: 60, fontWeight: 'bold' }}>Register</Text>
//       <Text style={{ color: 'grey', fontSize: 15, marginVertical: 5, paddingBottom: 15 }}>
//         Enter your Details to Register
//       </Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={(value) => updateField('username', value)}
//       />
//       {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={(value) => updateField('email', value)}
//       />
//       {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
//       <TextInput
//         style={styles.input}
//         placeholder="Phone"
//         value={phone}
//         onChangeText={(value) => updateField('phone', value)}
//         keyboardType="numeric"
//         maxLength={10}
//       />
//       {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={(value) => updateField('password', value)}
//         secureTextEntry
//       />
//       {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         value={confirmPassword}
//         onChangeText={(value) => updateField('confirmPassword', value)}
//         secureTextEntry
//       />
//       {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
//       <Button title="Register" onPress={handleRegister} />
//       <Button title="Login via phone" onPress={() => navigation.navigate('SecondLogin')} />
//       {loading && (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     width: '80%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     padding: 10,
//   },
//   loaderContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//     textAlign: 'left',
//     width: '80%',
//   },
// });

// export default RegistrationScreen;


// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, ActivityIndicator, Text } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const RegistrationScreen = ({ navigation }) => {

//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [nameError, setNameError] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [phoneError, setPhoneError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
//     const handleRegister = async () => {
//       // Validate inputs
//       if (!username || !email || !phone || !password || !confirmPassword) {
//         if (!username) setNameError('Username cannot be empty');
//         if (!email) setEmailError('Email cannot be empty');
//         if (!phone) setPhoneError('Phone number cannot be empty');
//         if (!password) setPasswordError('Password cannot be empty');
//         if (!confirmPassword) setConfirmPasswordError('Confirm Password cannot be empty');
//         return;
//       }
//       //  let users = {
//       //   'name': username,
//       //   'email': email,
//       //   'phone': phone,
//       //   'password': password,
//       //   // 'confirmation Password': confirmPassword,
//       //   'query': {   
                 
//       //   },
//       //  }
//       //  console.log(users);

//       if (!/^[a-zA-Z ]+$/.test(username)) {
//         setNameError('Name should not contain numeric or special characters');
//         return;
//       } else {
//         setNameError('');
//       }
  
//       if (!/\S+@\S+\.\S+/.test(email)) {
//         setEmailError('Invalid email format');
//         return;
//       } else {
//         setEmailError('');
//       }
  
//       if (!/^\d{10}$/.test(phone)) {
//         setPhoneError('Phone number must be 10 digits');
//         return;
//       } else {
//         setPhoneError('');
//       }
  
//       if (password.length < 6) {
//         setPasswordError('Password must be at least 6 characters long');
//         return;
//       } else {
//         setPasswordError('');
//       }
  
//       if (!/\d/.test(password)) {
//         setPasswordError('Password must contain at least one numeric digit');
//         return;
//       } else {
//         setPasswordError('');
//       }
  
//       if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//         setPasswordError('Password must contain at least one special character');
//         return;
//       } else {
//         setPasswordError('');
//       }
  
//       if (password !== confirmPassword) {
//         setConfirmPasswordError('Passwords do not match');
//         return;
//       } else {
//         setConfirmPasswordError('');
//       }
  
//       // Show loader for 3 seconds

//       setLoading(true);
//       setTimeout(async () => {
//         // Storing data in AsyncStorage
//         try {
//           const userData = {username, email, phone, password };
  
//           await AsyncStorage.setItem('user', JSON.stringify(userData));
  
//         // Navigate back to Login screen after registration
//         navigation.navigate('Login');

//         } catch (error) {
//           Alert.alert('Error', 'Error saving data:', error.message);
//         } finally {
//           setLoading(false);
//         }
//       }, 3000); // Simulate 3 seconds delay
//     };
  
//     return (
//       <View style={styles.container}>
//         <Text style={{ color: 'black', fontSize: 60, fontWeight: 'bold' }}>Register</Text>
//         <Text style={{ color: 'grey', fontSize: 15, marginVertical: 5, paddingBottom: 15 }}>
//           Enter your Details to Register
//         </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//         />
//         {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//         />
//         {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
//         <TextInput
//           style={styles.input}
//           placeholder="Phone"
//           value={phone}
//           onChangeText={setPhone}
//           keyboardType="numeric"
//           maxLength={10}
//         />
//         {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//         />
//         {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
//         <Button title="Register" onPress={handleRegister} />
//         <Button title="Login via phone" onPress={() => navigation.navigate('SecondLogin')} />
  
//         {loading && (
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="#0000ff" />
//           </View>
//         )}
//       </View>
//     );
//   };




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     width: '80%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     padding: 10,
//   },
//   loaderContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//     textAlign: 'left',
//     width: '80%',
//   },
// });

// export default RegistrationScreen;
