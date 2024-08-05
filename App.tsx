import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from './auth_register'; // Adjust path if needed
import LoginScreen from './auth_login'; // Adjust path if needed
import HelloScreen from './HelloScreen'; // Adjust path if needed

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Hello" component={HelloScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;











// import React, { useState } from 'react';
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';

// const data = [
//   { label: 'Business', value: '1' },
//   { label: 'Sports', value: '2' },
//   { label: 'USA', value: '3' },
//   { label: 'Technology', value: '4' },
//   { label: 'Movies', value: '5' },
//   { label: 'Wall-Street', value: '6' },
// ];


// const App = () => {
//   const [value, setValue] = useState(null);
//   const [isFocus, setIsFocus] = useState(false);

//   const renderLabel = () => {
//     if (value || isFocus) {
//       return (
//         <Text style={[styles.label, isFocus && { color: 'blue' }]}>
//           Dropdown label
//         </Text>
//       );
//     }
//     return null;
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {renderLabel()}
//       <Dropdown
//         style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
//         placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         inputSearchStyle={styles.inputSearchStyle}
//         iconStyle={styles.iconStyle}
//         data={data}
//         search
//         maxHeight={300}
//         labelField="label"
//         valueField="value"
//         placeholder={!isFocus ? 'Select item' : '...'}
//         searchPlaceholder="Search..."
//         value={value}
//         onFocus={() => setIsFocus(true)}
//         onBlur={() => setIsFocus(false)}
//         onChange={item => {
//           setValue(item.value);
//           setIsFocus(false);
//         }}
//       />
//     </SafeAreaView>
//   );
// };

//  export default App;

// const styles = StyleSheet.create({

//   container: {
//     backgroundColor: 'white',
//     padding: 16,
//   },
//   dropdown: {
//     height: 50,
//     borderColor: 'gray',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//   },
//   icon: {
//     marginRight: 5,
//   },
//   label: {
//     position: 'absolute',
//     backgroundColor: 'white',
//     left: 22,
//     top: 8,
//     zIndex: 999,
//     paddingHorizontal: 8,
//     fontSize: 14,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
// });



// import * as React from 'react';
// import { View, Text, Button , Alert} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import 'react-native-gesture-handler'
 

// const Drawer = createDrawerNavigator();

// function Contactus() {
//   return(
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Thanks for contact Us!</Text>
//     </View>
//   );
// };

// function Home() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <HelloWorldPage />
//     </View>
//   );
// }

// function About() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Hello Abhishek!</Text>
//       <Text> How was your day..</Text>
//     </View>
//   );
// }

// function Logout () {
//   return(
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text> Thanks! for visiting our App.</Text>
//     <Button title = "Logout Here" onPress={Alert.alert('You are successfully loged out')}/>
//     </View>
//   )
// }

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName='Home'>
//       <Drawer.Screen name="News" component={Home} />
//       <Drawer.Screen name ="Contact Us" component={Contactus} />
//       <Drawer.Screen name="About Us" component={About} />
//       <Drawer.Screen name ="Logout"  component={Logout} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

//options ={{headerShown : false}} 


// App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';





// import react from 'react';
// import {View , Text , Button ,SafeAreaView} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// const App = () => {
//   const setData = async() =>{
//     await AsyncStorage.setItem("user","Mr Abhishek Kumar")
//   }
//   const getData = async() => {
//     const name = await AsyncStorage.getItem("user");
//     console.warn(name);
//   }
//   return(
//     <SafeAreaView style ={{ marginTop : 100 , marginLeft : 30}}>
//       <Text style = {{fontSize : 30}}>Async Storage</Text>
//       <Button title='Set Data' onPress={setData} />
//       <Button title='Get Data' onPress={getData} />
//     </SafeAreaView>
//   )
// }
// export default App;




// import * as React from 'react';
// import { View, Text,Button,SafeAreaView,ScrollView,TextInput} from 'react-native';
// import { useEffect , useState} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import Registration from './src/screens/Registration';
// import ContactForm from './src/screens/ContactForm';
// import Loginpassword from './src/screens/login2';
// import Newslist from './src/screens/Newslist';
// import HookEffect from './src/screens/HookEffect';
// import Storage from './src/screens/storage_practice';
// import HelloWorldPage from './Drawer_Nav/HelloWorldPage';

// import LoginPage from './mainLogin/LoginPage';
// import RegisterPage from './mainLogin/RegisterPage';
// import SecondLoginScreen from './mainLogin/SecondLoginScreen';
// //import DrawNavigation from './DrawNavigation';
// //import CustomDrawerContent from './CustomDrawer';
// import AboutScreen from './Drawer_Nav/AboutScreen';
// import ContactScreen from './Drawer_Nav/ContactScreen';
// import LogoutScreen from './Drawer_Nav/LogoutScreen';
// import BookmarkScreen from './Drawer_Nav/Bookmark';


// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();


// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="News" component={HelloWorldPage} />
//       <Drawer.Screen name="About" component={AboutScreen} />
//         <Drawer.Screen name="Contact Us" component={ContactScreen} />
//         <Drawer.Screen name="Bookmark" component={BookmarkScreen}/>
//         <Drawer.Screen name="Logout" component={LogoutScreen} />
//     </Drawer.Navigator>
//   );
// }

// // Main Stack Navigator
// export default function App() {

  
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen name="Login" component={LoginPage} options={{headerShown : false}}/>
//         <Stack.Screen name="Registration" component={RegisterPage} />
//         <Stack.Screen name="SecondLogin" component={SecondLoginScreen} options ={{headerShown : false}} />
//         <Stack.Screen name="Home" component={DrawerNavigator} options={{headerShown : false}}  />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }




// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
    // <Stack.Navigator initialRouteName="Login">
    //   <Stack.Screen name="Login" component={LoginPage} options={{headerShown : false}}/>
    //   <Stack.Screen name="Registration" component={RegisterPage} />
    //  <Stack.Screen name="SecondLogin" component={SecondLoginScreen} options ={{headerShown : false}} />
//          <Stack.Screen name="HelloWorld" component={HelloWorldPage} /> 
//         {/* <Stack.Screen name="Drawer" component ={DrawNavigation} />  */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const Drawer = createDrawerNavigator();

// const App= () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HelloWorldPage} />
        // <Drawer.Screen name="About" component={AboutScreen} />
        // <Drawer.Screen name="Contact Us" component={ContactScreen} />
        // <Drawer.Screen name="Logout" component={LogoutScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;





// const App = () => {
//    return( 
//     <View>
//     <HelloWorldPage/> 
//     {/* <Newslist/>     
//         <ContactForm/>
//       <Loginpassword/> 
//       <Storage />
//       <HookEffect/> 
//        <Registration/> 
//        */}     
      
//      </View>
//   )
// };
//  export default App;





// const App = () => {

//   const[data,setData] = useState(undefined);

//   const getAPIData = async() =>{
//     //API Call
//     const url ="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=98649cd7fb29483896ebdf70ac6dc09c";
//     let result = await fetch(url);
//     result = await result.json();
//     // console.warn(result);
//     setData(result)
//   }
//     useEffect(() =>{
//     getAPIData();
//     },[])

//   return(
//     <SafeAreaView>
//       <Text>API Call.</Text>
//       {
//           data ? <View>
//           <Text>{data.status}</Text>
//           <Text>{data.totalResults}</Text>
//           <Text>{data.articles[0].source.name}</Text>
//           <Text>{data.articles[3].author}</Text> 
//           <Text>{data.articles[1].author}</Text> 
//           <Text>{data.articles[1].title}</Text> 
//           <Text>{data.articles[1].description}</Text> 
//           <Text>{data.articles[1].content}</Text> 
//           <Text>{data.articles[1].publishedAt}</Text> 
//           <Text>{data.articles[1].urlToImage}</Text> 
//           {/* <View>
//             <Image source ={{uri : data.articles[1].urlToImage}} /> 
//           </View> */}
//           </View>:<Text>Error</Text>
//       }
//     </SafeAreaView>
//   )
// };
// export default App;





//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };
//   const validatePhoneNumber = (phoneNumber) => {
//     // Check if phone number is exactly 10 digits and contains only digits
//     return /^\d{10}$/.test(phoneNumber);
//   };
//   const validatePassword = (password) => {
//     // Password length should be exactly 6 characters
//     if (password.length !== 6) {
//       return false;
//     }
//     // Check for at least one uppercase letter
//     if (!/[A-Z]/.test(password)) {
//       return false;
//     }
//     // Check for at least one special character
//     if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//       return false;
//     }
//     // Check for at least one numeric digit
//     if (!/\d/.test(password)) {
//       return false;
//     }
//     return true;
//   };








// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <WelcomeScreen />
//       <Button
//         title="Go To Login Page"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Button
//         title="Create New Account"
//         onPress={() => navigation.navigate('Account')}
//       />
//       <ContactForm/> 

//     </View>
//   );
// }

// function Account() {
//   return(
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Registration/>
//     </View>
//   )
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//         <Stack.Screen name="Account" component={Account}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;











// import * as React from 'react';
// import { View, Text ,SafeAreaView,ImageBackground,Button} from 'react-native';


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';



// const Home = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
//       <Text>Home Screen! </Text>
//     </View>
//   ); 
// }

// const Login = ({navigation}) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Login Screen !</Text>
//       <Button title ="Go to Home page" onPress={() => navigation.navigate('Home')}  />
//     </View>
//   );
// };

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//      <NavigationContainer>
//       <Stack.Navigator>
//       <Stack.Screen name= 'Home' component={Home} />
//       <Stack.Screen name= 'Login' component={Login} />  
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default Home ;








// CONTACT APP Project classwork
// ContactList.js


 {/* {contacts.map(contact => (
    <View key={contact.id} style={styles.contact}>
    <Text style={styles.name}>{contact.name}</Text>
    <Text style={styles.phone}>{contact.phone}</Text>
    </View>
  ))} */}



// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import Mobilecontact from './src/screens/mobile';


// const App = () => {
//   return (
//       <Mobilecontact/>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
// });

// export default App;







