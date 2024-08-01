import React from 'react';
import {View, Text, Touchable, TouchableOpacity,SafeAreaView} from 'react-native';

const Signup = () => {
  return (<View>
    <Text
      style={{  color: 'red',fontSize: 25, ontWeight: 'bold',marginTop: 20,}}>
      Register
    </Text>
    <Text
      style={{color: 'red',fontSize: 20, fontWeight: 'bold',  marginBottom: 20, }}>
      Create a new account
    </Text>
        <View
          style={{
            backgroundColor: 'grey',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
            {/* <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Contact Number" keyboardType={'number'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} /> */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: 'green', fontWeight: 'bold', fontSize: 16}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: 'green', fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
          </View>
        </View>
      </View>
  );
};

export default Signup;